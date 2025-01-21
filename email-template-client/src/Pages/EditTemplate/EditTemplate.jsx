import { Link, useParams } from "react-router";
import LogoImageUploader from "../../Components/LogoImageUploader/LogoImageUploader";
import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
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
  const [template, setTemplate] = useState([]); // For the selected template
  const [preview, setPreview] = useState(null); // For logo preview
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const templateRef = useRef(null); // Reference to the template div
  const editorRef = useRef(null); // Reference to the editor div

  //for color picker
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showBgColorPicker, setShowBgColorPicker] = useState(false);
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#000000");

  //for title
  const [titleFocused, setTitleFocused] = useState(false);
  const [titleText, setTitleText] = useState(""); // Content of the title
  const titleRef = useRef(null);

  //for title descriptin
  const [descFocused, setDescFocused] = useState(false);
  const [descText, setDescText] = useState(""); // Content of the title
  const descRef = useRef(null);

  //for content
  const [contentFocused, setContentFocused] = useState(false);
  const [contentText, setContentText] = useState(""); // Content of the title
  const contentRef = useRef(null);

  //for button styling
  const [buttonFocused, setButtonFocused] = useState(false);
  const [buttonText, setButtonText] = useState(""); // Content of the title
  const buttonRef = useRef(null);

  //for footer
  const [footerFocused, setFooterFocused] = useState(false);
  const [footerText, setFooterText] = useState(""); // Content of the title
  const footerRef = useRef(null);

  // all default classes for styling the preview
  //state for initial class
  const [initialClass, setInitialClass] = useState("");

  //state for description initial class
  const [initialDescClass, setInitialDescClass] = useState("");

  //state for description initial class
  const [initialContentClass, setInitialContentClass] = useState("");

  //state for footer initial class
  const [initialFooterClass, setInitialFooterClass] = useState("");

  //state for button initial class
  const [initialButtonClass, setInitialButtonClass] = useState("");

  const templateId = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:5000/templates/${templateId}`)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setTemplate(data);

            // Iterate through the sections and set classes dynamically
            data.sections.forEach((section) => {
              switch (section.type) {
                case "title":
                  setInitialClass(section.classes);
                  break;
                case "title-desc":
                  setInitialDescClass(section.classes);
                  break;
                case "content":
                  setInitialContentClass(section.classes);
                  break;
                case "title-button":
                  setInitialButtonClass(section.classes);
                  break;
                case "footer":
                  setInitialFooterClass(section.classes);
                  break;
                default:
                  console.warn(`Unknown section type: ${section.type}`);
                  break;
              }
            });
          });
        } else {
          console.error("Failed to fetch the template");
        }
      })
      .catch((err) => console.error("Error fetching template:", err));
  }, [templateId]);

  console.log(template);

  //handle title content
  const handleTitleClick = () => {
    setTitleFocused(true); // Enable editing
    setButtonFocused(false);
    setDescFocused(false);
    setContentFocused(false);
    setFooterFocused(false);
    setShowColorPicker(false);
    setShowBgColorPicker(false);
    setTitleText(titleRef.current.innerText); // Set the title content in the textarea
  };

  // text will be changed based on title
  const handleTitleChange = (e) => {
    setTitleText(e.target.value); // Update the state with the edited content
    if (titleRef.current) {
      titleRef.current.innerText = e.target.value; // Update the preview in real-time
    }
  };

  //handle Desctiption content
  const handleDescClick = () => {
    setDescFocused(true); // Enable editing
    setTitleFocused(false);
    setButtonFocused(false);
    setContentFocused(false);
    setFooterFocused(false);
    setShowColorPicker(false);
    setShowBgColorPicker(false);
    setDescText(descRef.current.innerText); // Set the title content in the textarea
  };

  //text will be changed based on description
  const handleDescChange = (e) => {
    setDescText(e.target.value); // Update the state with the edited content
    if (descRef.current) {
      descRef.current.innerText = e.target.value; // Update the preview in real-time
    }
  };

  //handle button content
  const handleBtnClick = () => {
    setButtonFocused(true); //Enable Editing
    setTitleFocused(false);
    setDescFocused(false);
    setContentFocused(false);
    setFooterFocused(false);
    setShowColorPicker(false);
    setShowBgColorPicker(false);
    setButtonText(buttonRef.current.innerText); // Set the title content in the textarea
  };

  // button text will be changed based on input
  const handleBtnChange = (e) => {
    setButtonText(e.target.value); // Update the state with the edited content
    if (buttonRef.current) {
      buttonRef.current.innerText = e.target.value; // Update the preview in real-time
    }
  };

  //handle content
  const handleContentClick = () => {
    setContentFocused(true);
    setTitleFocused(false);
    setButtonFocused(false);
    setDescFocused(false);
    setFooterFocused(false);
    setShowColorPicker(false);
    setShowBgColorPicker(false);
    setContentText(contentRef.current.innerText); // Set the title content in the textarea
  };

  //text will be changed based on content editing
  const handleContentChange = (e) => {
    setContentText(e.target.value); // Update the state with the edited content
    if (contentRef.current) {
      contentRef.current.innerText = e.target.value; // Update the preview in real-time
    }
  };

  //handle footer content
  const handleFooterClick = () => {
    setFooterFocused(true);
    setContentFocused(false);
    setTitleFocused(false);
    setButtonFocused(false);
    setDescFocused(false);
    setShowColorPicker(false);
    setShowBgColorPicker(false);
    setFooterText(footerRef.current.innerText); // Set the title content in the textarea
  };

  //footer will be changed based on content editing
  const handleFooterChange = (e) => {
    setFooterText(e.target.value); // Update the state with the edited content
    if (footerRef.current) {
      footerRef.current.innerText = e.target.value; // Update the preview in real-time
    }
  };

  // Handle alignment click (single-choice)
  const handleAlignmentClick = (alignClass) => {
    if (titleFocused) {
      setInitialClass((prev) => updateClass(prev, alignClass, alignOptions));
    } else if (descFocused) {
      setInitialDescClass((prev) =>
        updateClass(prev, alignClass, alignOptions)
      );
    } else if (contentFocused) {
      setInitialContentClass((prev) =>
        updateClass(prev, alignClass, alignOptions)
      );
    } else if (footerFocused) {
      setInitialFooterClass((prev) =>
        updateClass(prev, alignClass, alignOptions)
      );
    } else if (buttonFocused) {
      setInitialButtonClass((prev) =>
        updateClass(prev, alignClass, alignOptions)
      );
    }
  };

  // Handle decoration click (multiple-choice)
  const handleDecorationClick = (decorClass) => {
    if (titleFocused) {
      setInitialClass((prev) => toggleClass(prev, decorClass));
    } else if (descFocused) {
      setInitialDescClass((prev) => toggleClass(prev, decorClass));
    } else if (contentFocused) {
      setInitialContentClass((prev) => toggleClass(prev, decorClass));
    } else if (footerFocused) {
      setInitialFooterClass((prev) => toggleClass(prev, decorClass));
    } else if (buttonFocused) {
      setInitialButtonClass((prev) => toggleClass(prev, decorClass));
    }
  };

  // Handle size click (single-choice)
  // here size options are declared below
  const handleSizeClick = (sizeClass) => {
    if (titleFocused) {
      setInitialClass((prev) => updateClass(prev, sizeClass, sizeOptions));
    } else if (descFocused) {
      setInitialDescClass((prev) => updateClass(prev, sizeClass, sizeOptions));
    } else if (contentFocused) {
      setInitialContentClass((prev) =>
        updateClass(prev, sizeClass, sizeOptions)
      );
    } else if (footerFocused) {
      setInitialFooterClass((prev) =>
        updateClass(prev, sizeClass, sizeOptions)
      );
    } else if (buttonFocused) {
      setInitialButtonClass((prev) =>
        updateClass(prev, sizeClass, sizeOptions)
      );
    }
  };

  //handle the color for text
  const handleColorClick = (colorClass) => {
    if (titleFocused && titleRef.current) {
      //add style color to titleRef
      titleRef.current.style.color = colorClass;
    } else if (descFocused && descRef.current) {
      //add style color to descRef
      descRef.current.style.color = colorClass;
    } else if (contentFocused && contentRef.current) {
      //add style color to descRef
      contentRef.current.style.color = colorClass;
    } else if (footerFocused && footerRef.current) {
      //add style color to descRef
      footerRef.current.style.color = colorClass;
    } else if (buttonFocused && buttonRef.current) {
      //add style color to descRef
      buttonRef.current.style.color = colorClass;
    }
  };

  //handle footer bg color change
  const handleBgColorClick = (colorClass) => {
    if (footerFocused && footerRef.current) {
      //add style color to descRef
      footerRef.current.style.backgroundColor = colorClass;
    } else if (buttonFocused && buttonRef.current) {
      //add style color to descRef
      buttonRef.current.style.backgroundColor = colorClass;
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

  // console.log(initialClass);

  //function for handle downloading
  const handleSaveandDownload = () => {
    // Reset all states immediately
    setButtonFocused(false);
    setTitleFocused(false); // Ensure title is unfocused
    setDescFocused(false);
    setContentFocused(false);
    setFooterFocused(false);
    setShowColorPicker(false);
    setShowBgColorPicker(false);

    // Delay the download to let the state update so that the border is removed (border is added on focus)
    setTimeout(() => {
      const contentToSave = templateRef.current.innerHTML;

      const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <!-- Include Tailwind CSS CDN -->
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100">
          ${contentToSave}
        </body>
        </html>
      `;

      const blob = new Blob([fullHtml], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "template.html";
      a.click();
      URL.revokeObjectURL(url);
    }, 50); // Wait for the state to update (50ms delay)
  };

  //function for defocusing all after editing
  //handle outside clicking
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the clicked element is outside all refs
      if (
        footerRef.current &&
        !footerRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        contentRef.current &&
        !contentRef.current.contains(e.target) &&
        titleRef.current &&
        !titleRef.current.contains(e.target) &&
        descRef.current &&
        !descRef.current.contains(e.target) &&
        editorRef.current &&
        !editorRef.current.contains(e.target) // Allow clicks inside editorRef
      ) {
        // Reset all states
        setButtonFocused(false);
        setTitleFocused(false);
        setDescFocused(false);
        setContentFocused(false);
        setFooterFocused(false);
        setShowColorPicker(false);
        setShowBgColorPicker(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className=" bg-slate-200 p-[2%]">
      {/* top bar of the page  */}
      <div className="flex items-center gap-x-5 mb-5">
        <Link to="/templates">
          <p className=" bg-orange-100 hover:bg-orange-200 cursor-pointer font-bold text-orange-500 p-3 rounded-full">
            <FaArrowLeftLong size={20} />
          </p>
        </Link>
        <p className=" font-bold text-slate-700 text-lg">{template.name}</p>
      </div>

      <div className="flex items-start gap-x-5">
        {/* editing template preview  */}
        <div className="  bg-slate-200 w-[70%] rounded-md border border-slate-400 py-5">
          {/* it is the main template  */}
          <div className="flex justify-center items-center " ref={templateRef}>
            <div
              ref={templateRef}
              className="w-[70%] mx-auto bg-white pt-[4%] rounded-md"
            >
              {template?.sections?.map((section) => {
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
                      <div
                        key={section.id}
                        className={`w-[70%] mx-auto ${
                          titleFocused ? "border border-slate-400" : ""
                        }`}
                      >
                        <h1
                          className={`${initialClass}`}
                          onClick={handleTitleClick}
                          ref={titleRef}
                        >
                          {section.content}
                        </h1>
                      </div>
                    );

                  //design for the title content
                  case "title-desc":
                    return (
                      <div
                        className={`w-[70%] mx-auto ${
                          descFocused ? "border border-slate-400" : ""
                        }`}
                        key={section.id}
                      >
                        <p
                          className={`${initialDescClass} `}
                          onClick={handleDescClick}
                          ref={descRef}
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
                        className={`flex justify-center items-center my-6 ${
                          buttonFocused ? "border border-slate-400" : ""
                        }`}
                      >
                        <a
                          // href=""
                          className={initialButtonClass}
                          onClick={handleBtnClick}
                          ref={buttonRef}
                        >
                          {section.content}
                        </a>
                      </div>
                    );

                  //design for the email content
                  case "content":
                    return (
                      <div
                        className={`w-[80] mx-auto px-4 py-4 ${
                          contentFocused ? "border border-slate-400" : ""
                        }`}
                        key={section.id}
                      >
                        <p
                          className={`${initialContentClass} `}
                          onClick={handleContentClick}
                          ref={contentRef}
                        >
                          {section.content}
                        </p>
                      </div>
                    );

                  //design for the footer
                  case "footer":
                    return (
                      <div
                        className={`w-full ${
                          footerFocused ? "border border-orange-600" : ""
                        }`}
                        key={section.id}
                      >
                        <p
                          className={`${initialFooterClass} `}
                          onClick={handleFooterClick}
                          ref={footerRef}
                        >
                          {section.content}
                        </p>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>

        {/*right side editing bar */}
        <div
          className="bg-white w-[30%] rounded-md border border-slate-400 p-4 sticky top-5"
          ref={editorRef}
        >
          <div className="">
            {/* text box  */}
            <p className="font-bold text-lg text-slate-700 mb-2">
              {titleFocused
                ? "Title Text"
                : descFocused
                ? "Description Text"
                : contentFocused
                ? "Content Text"
                : footerFocused
                ? "Footer Text"
                : buttonFocused
                ? "Button Text"
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
                        : initialButtonClass.includes("font-bold")
                        ? "bg-slate-100"
                        : ""
                      : initialContentClass.includes("font-bold")
                      ? "bg-slate-100"
                      : initialFooterClass.includes("font-bold")
                      ? "bg-slate-100"
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
                        : initialButtonClass.includes("italic")
                        ? "bg-slate-100"
                        : ""
                      : initialContentClass.includes("italic")
                      ? "bg-slate-100"
                      : initialFooterClass.includes("italic")
                      ? "bg-slate-100"
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
                        : initialButtonClass.includes("underline")
                        ? "bg-slate-100"
                        : ""
                      : initialContentClass.includes("underline")
                      ? "bg-slate-100"
                      : initialFooterClass.includes("underline")
                      ? "bg-slate-100"
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
                        : initialButtonClass.includes("line-through")
                        ? "bg-slate-100"
                        : ""
                      : initialContentClass.includes("line-through")
                      ? "bg-slate-100"
                      : initialFooterClass.includes("line-through")
                      ? "bg-slate-100"
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
                    } else if (contentFocused) {
                      handleContentChange(e);
                    } else if (footerFocused) {
                      handleFooterChange(e);
                    } else if (buttonFocused) {
                      handleBtnChange(e);
                    }
                  }}
                  value={
                    titleFocused
                      ? titleText
                      : descFocused
                      ? descText
                      : contentFocused
                      ? contentText
                      : footerFocused
                      ? footerText
                      : buttonFocused
                      ? buttonText
                      : ""
                  }
                ></textarea>
              </div>
            </div>

            {/* alignment button  */}
            {!buttonFocused && !footerFocused && (
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
                        : initialContentClass.includes("text-left")
                        ? "bg-slate-100"
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
                        : initialContentClass.includes("text-right")
                        ? "bg-slate-100"
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
                        : initialContentClass.includes("text-center")
                        ? "bg-slate-100"
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
                        : initialContentClass.includes("text-justify")
                        ? "bg-slate-100"
                        : ""
                    }`}
                    title="Justify"
                    onClick={() => handleAlignmentClick("text-justify")}
                  >
                    <MdFormatAlignJustify size={20} />
                  </p>
                </div>
              </div>
            )}

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
                  {showColorPicker ? "x" : "+"}
                </div>

                {/* Color Picker */}
                {showColorPicker && (
                  <div className="absolute mt-2 p-2 border rounded bg-white shadow">
                    <SketchPicker
                      color={color} // Current color state
                      onChange={(color) => {
                        setColor(color.hex); // Update the current color state
                        handleColorClick(color.hex); // Apply the color dynamically
                      }}
                      onChangeComplete={(color) => {
                        console.log("Final color selected:", color.hex); // Optional: Log the final color
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* bg color button only for footer  */}
            {(footerFocused || buttonFocused) && (
              <div className="mt-5">
                <p className="text-slate-600 text-sm font-semibold mb-2">
                  Bg Color
                </p>
                <div className="flex gap-x-2 items-center">
                  {colorSamples.map((clr, idx) => (
                    <div
                      style={{ backgroundColor: clr.color }}
                      className="rounded w-[40px] h-[40px] cursor-pointer"
                      key={idx}
                      onClick={() => handleBgColorClick(clr.color)}
                    ></div>
                  ))}

                  {/* color picker button */}
                  <div
                    onClick={() => setShowBgColorPicker(!showBgColorPicker)}
                    className="flex justify-center items-center rounded w-[40px] h-[40px]  font-semibold text-2xl border border-slate-400 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                  >
                    {showBgColorPicker ? "x" : "+"}
                  </div>

                  {/* Color Picker */}
                  {showBgColorPicker && (
                    <div className="absolute mt-2 p-2 border rounded bg-white shadow">
                      <SketchPicker
                        color={bgColor} // Current color state
                        onChange={(bg_clr) => {
                          setBgColor(bg_clr.hex); // Update the current color state
                          handleBgColorClick(bg_clr.hex); // Apply the color dynamically
                        }}
                        onChangeComplete={(bg_clr) => {
                          console.log("Final color selected:", bg_clr.hex); // Optional: Log the final color
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-center items-center">
              <button
                onClick={handleSaveandDownload}
                className="text-white font-semibold bg-slate-800 rounded px-5 py-2"
              >
                Save & Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTemplate;

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

const sizeOptions = [
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
];

const alignOptions = ["text-center", "text-justify", "text-left", "text-right"];
