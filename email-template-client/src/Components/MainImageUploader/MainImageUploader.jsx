/* eslint-disable react/prop-types */
import { toast, ToastContainer } from "react-toastify";

const MainImageUploader = ({ setImagePreview, image, setImage }) => {
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
      {!image && (
        <div className="border-dashed border-2 border-slate-500 text-center py-3 mx-auto my-8 w-[400px]  h-[300px]  flex items-center justify-center">
          <div className="">
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="main-image-upload"
              accept="image/*"
            />
            <label htmlFor="main-image-upload" className="cursor-pointer ">
              <span className="font-bold  text-orange-500 hover:underline">
                Choose Image for your Email Template
              </span>
            </label>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default MainImageUploader;

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
