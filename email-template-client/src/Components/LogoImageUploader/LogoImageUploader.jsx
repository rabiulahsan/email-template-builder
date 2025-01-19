/* eslint-disable react/prop-types */
const LogoImageUploader = ({ handleFileChange, logo }) => {
  return (
    <div>
      {!logo && (
        <div className="border-dashed border-2 text-center py-3">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            accept="image/*"
          />
          <label htmlFor="file-upload" className="cursor-pointer ">
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
