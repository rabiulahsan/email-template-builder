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
  const [preview, setPreview] = useState(null); // For logo preview
  const [imagePreview, setImagePreview] = useState(null); // For image preview

  //for color picker
  const [showColorPicker, setShowColorPicker] = useState(false);

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

  //state for initial class
  const [initialClass, setInitialClass] = useState(
    "text-4xl font-bold text-center mt-4 px-3 py-2 cursor-pointer"
  );

  //state for description initial class
  const [initialDescClass, setInitialDescClass] = useState(
    "text-base text-center text-slate-600 mt-4 px-3 py-2 cursor-pointer"
  );

  // Handle alignment click (single-choice)
  const handleAlignmentClick = (alignClass) => {
    if (titleFocused) {
      setInitialClass((prev) =>
        updateClass(prev, alignClass, [
          "text-center",
          "text-justify",
          "text-left",
          "text-right",
        ])
      );
    } else if (descFocused) {
      setInitialDescClass((prev) =>
        updateClass(prev, alignClass, [
          "text-center",
          "text-justify",
          "text-left",
          "text-right",
        ])
      );
    }
  };

  // Handle decoration click (multiple-choice)
  const handleDecorationClick = (decorClass) => {
    if (titleFocused) {
      setInitialClass((prev) => toggleClass(prev, decorClass));
    } else if (descFocused) {
      setInitialDescClass((prev) => toggleClass(prev, decorClass));
    }
  };

  // Handle size click (single-choice)
  const handleSizeClick = (sizeClass) => {
    if (titleFocused) {
      setInitialClass((prev) =>
        updateClass(prev, sizeClass, [
          "text-sm",
          "text-base",
          "text-lg",
          "text-xl",
          "text-2xl",
          "text-3xl",
          "text-4xl",
        ])
      );
    } else if (descFocused) {
      setInitialDescClass((prev) =>
        updateClass(prev, sizeClass, [
          "text-sm",
          "text-base",
          "text-lg",
          "text-xl",
          "text-2xl",
          "text-3xl",
          "text-4xl",
        ])
      );
    }
  };

  //handle the color for text
  const handleColorClick = (colorClass) => {
    if (titleFocused) {
      //add style color to titleRef
      titleRef.current.style.color = colorClass;
    } else if (descFocused) {
      //add style color to descRef
      descRef.current.style.color = colorClass;
    }
  };

  // Helper function to update a class (single-choice)
  const updateClass = (prev, newClass, replaceClasses) => {
    const filteredClasses = prev
      .split(" ")
      .filter((cls) => !replaceClasses.includes(cls))
      .join(" ");
    return `${filteredClasses} ${newClass}`.trim();
  };

  // Helper function to toggle a class (multiple-choice)
  const toggleClass = (prev, toggleClass) => {
    const clsArr = prev.split(" ");
    if (clsArr.includes(toggleClass)) {
      return clsArr.filter((cls) => cls !== toggleClass).join(" "); // Remove class
    } else {
      return [...clsArr, toggleClass].join(" "); // Add class
    }
  };

  console.log(initialClass);

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
                        className={`${initialClass}`}
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
                        className={`${initialDescClass} `}
                        onClick={handleDescClick}
                        ref={descRef}
                        contentEditable={descFocused}
                        onInput={(e) => setDescText(e.currentTarget.innerText)}
                      >
                        {section.content}
                      </p>
                    </div>
                  );

                // design for button in the template
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

            {/* decoration options  */}
            <div className="border border-slate-300 rounded-md px-3 py-2">
              <div className="flex border border-slate-300 rounded-md overflow-hidden text-slate-700">
                <p
                  className={`flex-1 px-3 py-2 font-bold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("font-bold")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("font-bold")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Bold"
                  onClick={() => handleDecorationClick("font-bold")}
                >
                  B
                </p>
                <p
                  className={`flex-1 px-3 py-2 italic text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("italic")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("italic")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Italic"
                  onClick={() => handleDecorationClick("italic")}
                >
                  I
                </p>
                <p
                  className={`flex-1 px-3 py-2 underline text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("underline")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("underline")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Underline"
                  onClick={() => handleDecorationClick("underline")}
                >
                  U
                </p>
                <p
                  className={`flex-1 px-3 py-2 line-through text-center hover:bg-slate-100 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("line-through")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("line-through")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Strikethrough"
                  onClick={() => handleDecorationClick("line-through")}
                >
                  T
                </p>
              </div>

              {/* write the text here  */}
              <div className="mt-4">
                <textarea
                  className="w-full text-sm bg-white outline-none focus:outline-none rounded-md resize-none"
                  placeholder="Select to change text"
                  rows="6"
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
                  className={`flex-1 px-3 py-2 font-bold text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer flex justify-center items-center ${
                    titleFocused
                      ? initialClass.includes("text-left")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-left")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Left"
                  onClick={() => handleAlignmentClick("text-left")}
                >
                  <MdFormatAlignLeft size={20} />
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-bold text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer flex justify-center items-center ${
                    titleFocused
                      ? initialClass.includes("text-right")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-right")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Right"
                  onClick={() => handleAlignmentClick("text-right")}
                >
                  <MdFormatAlignRight size={20} />
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-bold text-center hover:bg-slate-100 border-r border-slate-300 cursor-pointer flex justify-center items-center ${
                    titleFocused
                      ? initialClass.includes("text-center")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-center")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Center"
                  onClick={() => handleAlignmentClick("text-center")}
                >
                  <MdFormatAlignCenter size={20} />
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-bold text-center hover:bg-slate-100 cursor-pointer flex justify-center items-center ${
                    titleFocused
                      ? initialClass.includes("text-justify")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-justify")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Justify"
                  onClick={() => handleAlignmentClick("text-justify")}
                >
                  <MdFormatAlignJustify size={20} />
                </p>
              </div>
            </div>

            {/* Font size button  */}
            <div className="mt-5">
              <p className="text-slate-600 text-sm font-semibold mb-2">
                Font Size
              </p>
              <div className="flex border border-slate-300 rounded-md overflow-hidden text-slate-700">
                <p
                  className={`flex-1 px-3 py-2 font-semibold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("text-sm")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-sm")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Small"
                  onClick={() => handleSizeClick("text-sm")}
                >
                  sm
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-semibold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("text-base")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-base")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Base"
                  onClick={() => handleSizeClick("text-base")}
                >
                  md
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-semibold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("text-lg")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-lg")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Large"
                  onClick={() => handleSizeClick("text-lg")}
                >
                  lg
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-semibold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("text-xl")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-xl")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="Exltra Large"
                  onClick={() => handleSizeClick("text-xl")}
                >
                  xl
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-semibold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("text-2xl")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-2xl")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="2 x Extra Large"
                  onClick={() => handleSizeClick("text-2xl")}
                >
                  2xl
                </p>
                <p
                  className={`flex-1 px-3 py-2 font-semibold text-center  hover:bg-slate-100 border-r border-slate-300 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("text-3xl")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-3xl")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="3 x Extra Large"
                  onClick={() => handleSizeClick("text-3xl")}
                >
                  3xl
                </p>

                <p
                  className={`flex-1 px-3 py-2 font-semibold  text-center hover:bg-slate-100 cursor-pointer ${
                    titleFocused
                      ? initialClass.includes("text-4xl")
                        ? "bg-slate-100"
                        : ""
                      : descFocused
                      ? initialDescClass.includes("text-4xl")
                        ? "bg-slate-100"
                        : ""
                      : ""
                  }`}
                  title="4 x Extra Large"
                  onClick={() => handleSizeClick("text-4xl")}
                >
                  4xl
                </p>
              </div>
            </div>

            {/* font color button  */}
            <div className="mt-5">
              <p className="text-slate-600 text-sm font-semibold mb-2">
                Text Color
              </p>
              <div className="flex gap-x-2 items-center">
                {colorSamples.map((clr, idx) => (
                  <div
                    style={{ backgroundColor: clr.color }}
                    className="rounded w-[40px] h-[40px] cursor-pointer"
                    key={idx}
                    onClick={() => handleColorClick(clr.color)}
                  ></div>
                ))}

                {/* color picker button */}
                <div
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="flex justify-center items-center rounded w-[40px] h-[40px]  font-semibold text-2xl border border-slate-400 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                >
                  +
                </div>

                {/* Color Picker */}
                {showColorPicker && (
                  <div className="absolute mt-2 p-2 border rounded bg-white shadow">
                    <input
                      type="color"
                      onChange={(e) => {
                        const selectedColor = e.target.value;
                        handleColorClick(selectedColor);
                        setShowColorPicker(false); // Close color picker after selection
                      }}
                    />
                  </div>
                )}
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

//color samples
const colorSamples = [
  { id: 1, color: "#0284C7" }, // sky-600
  { id: 2, color: "#6B21A8" }, // purple-700
  { id: 3, color: "#000000" }, // black
  { id: 4, color: "#334155" }, // slate-700
  { id: 5, color: "#F97316" }, // orange-500
  { id: 6, color: "#22C55E" }, // green-500
  { id: 7, color: "#F43F5E" }, // rose-500
];
