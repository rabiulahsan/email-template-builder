/* eslint-disable react/prop-types */
const LogoImageUploader = ({ handleLogoChange, logo }) => {
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
