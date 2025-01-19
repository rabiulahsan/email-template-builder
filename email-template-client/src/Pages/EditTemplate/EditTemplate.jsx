import { Link, useParams } from "react-router";
import LogoImageUploader from "../../Components/LogoImageUploader/LogoImageUploader";
import { useState } from "react";
import { toast } from "react-toastify";
import MainImageUploader from "../../Components/MainImageUploader/MainImageUploader";

const EditTemplate = () => {
  const [logo, setLogo] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // For image preview
  const [imagePreview, setImagePreview] = useState(null); // For image preview

  const templateId = useParams().id;

  const template = templates.filter((tp) => tp.id === Number(templateId));
  console.log(template);

  //handling the logo image
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
        showToast(
          "Please upload an image in PNG, JPEG, or WebP format.",
          "error"
        );
        return;
      }
      setLogo(file);

      // Preview the image before upload using FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the base64 URL for preview
      };
      reader.readAsDataURL(file); // Convert file to base64 format for display
    } else {
      showToast(
        "File size exceeds 10MB or file type is not supported.",
        "error"
      );
    }
  };

  //handling the main image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
        showToast(
          "Please upload an image in PNG, JPEG, or WebP format.",
          "error"
        );
        return;
      }
      setImage(file);

      // Preview the image before upload using FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the base64 URL for preview
      };
      reader.readAsDataURL(file); // Convert file to base64 format for display
    } else {
      showToast(
        "File size exceeds 10MB or file type is not supported.",
        "error"
      );
    }
  };

  return (
    <div>
      {template[0]?.sections?.map((section) => {
        switch (section.type) {
          //design for log input
          case "logo":
            return (
              <div key={section.id} className={section.classes}>
                <LogoImageUploader
                  handleLogoChange={handleLogoChange}
                  logo={logo}
                ></LogoImageUploader>
                {preview && (
                  <img
                    src={preview}
                    alt="Logo Preview"
                    className=" border border-slate-400 w-[60px] h-[60px] object-contain"
                  />
                )}
              </div>
            );

          //design for title field
          case "title":
            return (
              <h1 key={section.id} className={section.classes}>
                {section.content}
              </h1>
            );
          case "title-content":
            return (
              <p key={section.id} className={section.classes}>
                {section.content}
              </p>
            );
          case "title-button":
            return (
              <div key={section.id}>
                <Link to={section.url}>
                  <button className={section.classes}>{section.content}</button>
                </Link>
              </div>
            );

          case "image":
            return (
              <div key={section.id} className={section.classes}>
                <MainImageUploader
                  handleImageChange={handleImageChange}
                  image={image}
                ></MainImageUploader>
                {imagePreview && <img src={imagePreview} alt="Image Preview" />}
              </div>
            );

          //   case "footer":
          //     return (
          //       <footer key={section.id} className={section.classes}>
          //         <input
          //           type="text"
          //           value={section.content}
          //           placeholder="Footer Text"
          //           //   onChange={(e) =>
          //           //     updateSection(section.id, { content: e.target.value })
          //           //   }
          //         />
          //       </footer>
          //     );
          //   case "social":
          //     return (
          //       <div key={section.id} className={section.classes}>
          //         {section.links.map((link, idx) => (
          //           <a key={idx} href={link.url}>
          //             {link.platform}
          //           </a>
          //         ))}
          //       </div>
          //     );
          //   case "divider":
          //     return <hr key={section.id} className={section.classes} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default EditTemplate;

const templates = [
  {
    id: 1,
    name: "Minimalist Template",
    image:
      "https://i.ibb.co.com/ZLWhQc4/Screenshot-2025-01-19-at-13-01-50-etsymil-Mail-Builder-Customize-Content-Dashboard-by-Viola-Dwi-for.png",
    sections: [
      {
        id: 1,
        type: "logo",
        url: "/",
        classes: "w-[100px]  mx-auto",
      },
      {
        id: 2,
        type: "title",
        content: "Edit you Title for the Email",
        classes: "text-4xl font-bold text-center mt-4",
      },
      {
        id: 3,
        type: "title-content",
        content: "Event details here...",
        classes: "text-base text-center mt-4 text-slate-600",
      },
      {
        id: 5,
        type: "title-button",
        content: "Your Button",
        url: "/",
        classes:
          "bg-orange-500 text-white font-semibold py-2 px-5  rounded-sm hover:bg-orange-600",
      },
      { id: 6, type: "divider", content: "", classes: "border-t my-4" },
      {
        id: 4,
        type: "image",
        url: "",
        classes: "w-[700px] h-[500px] mx-auto my-4",
      },
      {
        id: 7,
        type: "content",
        content: "Additional information here.",
        classes: "text-base text-left",
      },
      {
        id: 8,
        type: "footer",
        content: "Contact us at contact@example.com",
        classes: "text-sm text-center mt-4",
      },
      {
        id: 9,
        type: "social",
        links: [
          { platform: "facebook", url: "https://facebook.com" },
          { platform: "twitter", url: "https://twitter.com" },
          { platform: "instagram", url: "https://instagram.com" },
        ],
        classes: "flex justify-center mt-4 space-x-4",
      },
    ],
  },
  {
    id: 2,
    name: "Blog Template",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-email-template-colorlib-8.jpg",
    sections: [],
  },
  {
    id: 3,
    name: "Wedding Template",
    image:
      "https://cdn.dribbble.com/userupload/16340444/file/original-1c7accb2ebd50c180c20ed06e39cf3bb.png?resize=1600x1200&vertical=center",
    sections: [],
  },
];

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
