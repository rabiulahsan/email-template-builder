/* eslint-disable react/prop-types */
const MainImageUploader = ({ handleImageChange, image }) => {
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
    </div>
  );
};

export default MainImageUploader;
