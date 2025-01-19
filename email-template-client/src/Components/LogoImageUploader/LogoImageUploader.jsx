/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
const LogoImageUploader = ({ setPreview, logo, setLogo }) => {
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

  return (
    <div>
      {!logo && (
        <div className="border-dashed border-2 border-slate-400 text-center py-3 w-[100px] mx-auto">
          <input
            type="file"
            onChange={handleLogoChange}
            className="hidden"
            id="logo-upload"
            accept="image/*"
          />
          <label htmlFor="logo-upload" className="cursor-pointer ">
            <span className="font-bold text-sm text-orange-500 hover:underline">
              Add Logo
            </span>
          </label>
        </div>
      )}
    </div>
  );
};

export default LogoImageUploader;

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
