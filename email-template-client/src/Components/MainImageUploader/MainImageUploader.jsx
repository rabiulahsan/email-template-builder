/* eslint-disable react/prop-types */
const MainImageUploader = ({ handleImageChange, image }) => {
  return (
    <div>
      {!image && (
        <div className="border-dashed border-2 text-center py-3">
          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
            id="file-upload"
            accept="image/*"
          />
          <label htmlFor="file-upload" className="cursor-pointer ">
            <span className="font-bold text-sm text-orange-500 hover:underline">
              Add Imgae
            </span>
          </label>
        </div>
      )}
    </div>
  );
};

export default MainImageUploader;
