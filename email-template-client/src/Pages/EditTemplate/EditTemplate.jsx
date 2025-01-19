import { Link, useParams } from "react-router";
import LogoImageUploader from "../../Components/LogoImageUploader/LogoImageUploader";
import { useRef, useState } from "react";
// import { toast } from "react-toastify";
import MainImageUploader from "../../Components/MainImageUploader/MainImageUploader";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatAlignJustify,
  MdFormatAlignCenter,
} from "react-icons/md";

const EditTemplate = () => {
  const [logo, setLogo] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // For logo preview
  const [imagePreview, setImagePreview] = useState(null); // For image preview

  //for title
  const [titleFocused, setTitleFocused] = useState(false);
  const [titleText, setTitleText] = useState(""); // Content of the title
  const titleRef = useRef(null);

  //for title descriptin
  const [descFocused, setDescFocused] = useState(false);
  const [descText, setDescText] = useState(""); // Content of the title
  const descRef = useRef(null);

  const templateId = useParams().id;

  const template = templates.filter((tp) => tp.id === Number(templateId));
  //   console.log(template);

  //handle title content
  const handleTitleClick = () => {
    setTitleFocused(true); // Enable editing
    setDescFocused(false);
    setTitleText(titleRef.current.innerText); // Set the title content in the textarea
  };

  // text will be changed based on title
  const handleTitleChange = (e) => {
    setTitleText(e.target.value); // Update the state with the edited content
    if (titleRef.current) {
      titleRef.current.innerText = e.target.value; // Update the preview in real-time
    }
  };

  //handle title content
  const handleDescClick = () => {
    setDescFocused(true); // Enable editing
    setTitleFocused(false);
    setDescText(descRef.current.innerText); // Set the title content in the textarea
  };

  //text will be changed based on description
  const handleDescChange = (e) => {
    setDescText(e.target.value); // Update the state with the edited content
    if (descRef.current) {
      descRef.current.innerText = e.target.value; // Update the preview in real-time
    }
  };

  return (
    <div className=" bg-slate-200 p-[2%]">
      {/* top bar of the page  */}
      <div className="flex items-center gap-x-5 mb-5">
        <Link to="/templates">
          <p className=" bg-orange-100 hover:bg-orange-200 cursor-pointer font-bold text-orange-500 p-3 rounded-full">
            <FaArrowLeftLong size={20} />
          </p>
        </Link>
        <p className=" font-bold text-slate-700 text-lg">{template[0].name}</p>
      </div>

      <div className="flex items-start gap-x-5">
        {/* editing template preview  */}
        <div className=" flex justify-center items-center bg-slate-200 w-[70%] rounded-md border border-slate-400 py-5">
          {/* it is the main template  */}
          <div className="w-[70%] mx-auto bg-white py-[4%] rounded-md">
            {template[0]?.sections?.map((section) => {
              switch (section.type) {
                //design for logo input
                case "logo":
                  return (
                    <div key={section.id} className="mb-5">
                      <LogoImageUploader
                        setPreview={setPreview}
                        logo={logo}
                        setLogo={setLogo}
                      ></LogoImageUploader>
                      {preview && (
                        <img
                          src={preview}
                          alt="Logo Preview"
                          className={section.classes}
                        />
                      )}
                    </div>
                  );

                // design for the images
                case "image":
                  return (
                    <div key={section.id} className="">
                      <MainImageUploader
                        setImagePreview={setImagePreview}
                        image={image}
                        setImage={setImage}
                      ></MainImageUploader>
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          alt="Image Preview"
                          className={section.classes}
                        />
                      )}
                    </div>
                  );

                //design for title field
                case "title":
                  return (
                    <div key={section.id} className="w-[70%] mx-auto">
                      <h1
                        className={`${section.classes} mt-4 px-3 py-2 cursor-pointer`}
                        onClick={handleTitleClick}
                        ref={titleRef}
                        contentEditable={titleFocused}
                        onInput={(e) => setTitleText(e.currentTarget.innerText)} // Update textarea in real-time
                      >
                        {section.content}
                      </h1>
                    </div>
                  );

                //design for the title content
                case "title-desc":
                  return (
                    <div className="w-[70%] mx-auto" key={section.id}>
                      <p
                        className={`${section.classes} cursor-pointer py-3 px-4 mt-4`}
                        onClick={handleDescClick}
                        ref={descRef}
                        contentEditable={descFocused}
                        onInput={(e) => setDescText(e.currentTarget.innerText)}
                      >
                        {section.content}
                      </p>
                    </div>
                  );
                case "title-button":
                  return (
                    <div
                      key={section.id}
                      className="flex justify-center items-center my-6"
                    >
                      <Link to={section.url}>
                        <button className={section.classes}>
                          {section.content}
                        </button>
                      </Link>
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
        </div>

        {/*right side editing bar */}
        <div className="bg-white w-[30%] rounded-md border border-slate-400 p-4">
          <div className="">
            {/* text box  */}
            <p className="font-bold text-lg text-slate-700 mb-2">
              {titleFocused
                ? "Title Text"
                : descFocused
                ? "Description Text"
                : "Text"}
            </p>
            <div className="border border-slate-300 rounded-md px-3 py-2">
              <div className="flex border border-slate-300 rounded-md overflow-hidden text-slate-700">
                <p
                  className="flex-1 px-3 py-2 font-bold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer"
                  title="Bold"
                >
                  B
                </p>
                <p
                  className="flex-1 px-3 py-2 italic text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer"
                  title="Italic"
                >
                  I
                </p>
                <p
                  className="flex-1 px-3 py-2 underline text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer"
                  title="Underline"
                >
                  U
                </p>
                <p
                  className="flex-1 px-3 py-2 line-through text-center hover:bg-slate-100 cursor-pointer"
                  title="Strikethrough"
                >
                  T
                </p>
              </div>

              {/* write the text here  */}
              <div className="mt-4">
                <textarea
                  className="w-full text-sm bg-white outline-none focus:outline-none rounded-md resize-none"
                  placeholder="Select to change text"
                  rows="4"
                  onChange={(e) => {
                    if (titleFocused) {
                      handleTitleChange(e);
                    } else if (descFocused) {
                      handleDescChange(e);
                    }
                  }}
                  value={titleFocused ? titleText : descFocused ? descText : ""}
                ></textarea>
              </div>
            </div>

            {/* alignment button  */}
            <div className="mt-5">
              <p className="text-slate-600 text-sm font-semibold mb-2">
                Alignment
              </p>
              <div className="flex border border-slate-300 rounded-md overflow-hidden text-slate-700">
                <p
                  className="flex-1 px-3 py-2 font-bold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer flex justify-center items-center"
                  title="Left"
                >
                  <MdFormatAlignLeft size={20}></MdFormatAlignLeft>
                </p>
                <p
                  className="flex-1 px-3 py-2 italic text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer flex justify-center items-center"
                  title="Right"
                >
                  <MdFormatAlignRight size={20}></MdFormatAlignRight>
                </p>
                <p
                  className="flex-1 px-3 py-2 underline text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer flex justify-center items-center"
                  title="Center"
                >
                  <MdFormatAlignCenter size={20}></MdFormatAlignCenter>
                </p>
                <p
                  className="flex-1 px-3 py-2 line-through text-center hover:bg-slate-100 cursor-pointer flex justify-center items-center"
                  title="Justify"
                >
                  <MdFormatAlignJustify size={20}></MdFormatAlignJustify>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        classes: "mx-auto w-[100px] h-[60px] object-contain",
      },
      {
        id: 2,
        type: "title",
        content: "Edit your Title for the Email",
        classes: "text-4xl font-bold text-center",
      },
      {
        id: 3,
        type: "title-desc",
        content: "Event details here...",
        classes: "text-base text-center text-slate-600",
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
        classes: " h-[400px] mx-auto my-4 object-contain",
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
// const showToast = (message, type = "info", position = "top-right") => {
//   toast(message, {
//     position,
//     type,
//     autoClose: 5000, // Auto close after 5 seconds
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// };
