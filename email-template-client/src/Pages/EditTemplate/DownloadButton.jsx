/* eslint-disable react/prop-types */
import { toast, ToastContainer } from "react-toastify";

const DownloadButton = ({
  setFocusStates,
  initialClasses,
  texts,
  setShowColorPicker,
  setShowBgColorPicker,
  logo,
  image,
  buttonUrl,
  template,
  templateRef,
  setSaveLoading,
}) => {
  //destructuring the focusstates from props
  const {
    setButtonFocused,
    setDescFocused,
    setContentFocused,
    setFooterFocused,
    setTitleFocused,
  } = setFocusStates;

  //destructuring the initialClasses from props
  const {
    initialClass,
    initialDescClass,
    initialButtonClass,
    initialContentClass,
    initialFooterClass,
  } = initialClasses;

  //destructuring the texts from props
  const { buttonText, titleText, descText, contentText, footerText } = texts;

  //function for handle downloading
  const handleSaveandDownload = async () => {
    // Reset all states immediately
    setButtonFocused(false);
    setTitleFocused(false); // Ensure title is unfocused
    setDescFocused(false);
    setContentFocused(false);
    setFooterFocused(false);
    setShowColorPicker(false);
    setShowBgColorPicker(false);

    if (!logo || !image) {
      showToast("Please upload both images", "error");
      setSaveLoading(false); // Reset the save loading state
      return;
    }
    setSaveLoading(true); //set the save loading to true

    // URL for uploading images
    const uploadToCloudinary = async (imageFile) => {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
      const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      // Create FormData to send the file
      const formData = new FormData();
      formData.append("file", imageFile); // The file selected in the input
      formData.append("upload_preset", uploadPreset); // Upload preset from Cloudinary

      try {
        const response = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Cloudinary Error:", errorData);
          throw new Error(errorData.error.message || "Image upload failed");
        }

        const data = await response.json();
        console.log(data);
        return data.secure_url; // Return the secure URL of the uploaded image
      } catch (error) {
        console.error("Upload Error:", error);
        throw error;
      }
    };

    // Example usage: Upload images
    const [logoUrl, mainImageUrl] = await Promise.all([
      uploadToCloudinary(logo),
      uploadToCloudinary(image),
    ]);

    // Update the template sections
    const updatedTemplate = { ...template }; // Copy the original template object
    updatedTemplate.sections = updatedTemplate.sections.map((section) => {
      switch (section.type) {
        case "logo":
          section.url = logoUrl;
          break;
        case "image":
          section.url = mainImageUrl;
          break;
        case "title-button":
          section.url = buttonUrl;
          section.classes = initialButtonClass;
          section.content = buttonText;
          break;
        case "title":
          section.classes = initialClass;
          section.content = titleText;
          break;
        case "title-desc":
          section.classes = initialDescClass;
          section.content = descText;
          break;
        case "content":
          section.classes = initialContentClass;
          section.content = contentText;
          break;
        case "footer":
          section.classes = initialFooterClass;
          section.content = footerText;
          break;
        default:
          console.warn(`Unknown section type: ${section.type}`);
      }
      return section;
    });
    //

    // Post the updated template to the API
    try {
      // Post the updated template to the API
      const response = await fetch(
        "https://email-template-server-three.vercel.app/api/create/template",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTemplate),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post the template");
      }

      const result = await response.json();
      console.log("Template created successfully:", result);

      if (result.result?.insertedId) {
        // Trigger download
        setTimeout(() => {
          const contentToSave = templateRef.current.innerHTML;

          const fullHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Email Template</title>
              <!-- Include Tailwind CSS CDN -->
              <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body class="bg-gray-100">
              ${contentToSave}
            </body>
            </html>
          `;

          const blob = new Blob([fullHtml], { type: "text/html" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "template.html";
          a.click();
          URL.revokeObjectURL(url);
        }, 50);
      }
    } catch (error) {
      console.log("Error in updating template:", error);
    } finally {
      setSaveLoading(false); // Reset the save loading state
    }
  };
  return (
    <div className="mt-8 flex justify-center items-center">
      <button
        onClick={handleSaveandDownload}
        className="text-white font-semibold bg-slate-800 rounded px-5 py-2"
      >
        Save & Download
      </button>
      <ToastContainer />
    </div>
  );
};

export default DownloadButton;

//for displaying the toast
const showToast = (message, type = "info", position = "top-right") => {
  toast(message, {
    position,
    type,
    autoClose: 5000, // Auto close after 5 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
