/* eslint-disable react/prop-types */
const LogoImageUploader = ({ handleLogoChange, logo }) => {
  return (
    <div>
      {!logo && (
        <div className="border-dashed border-2 text-center py-3">
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
