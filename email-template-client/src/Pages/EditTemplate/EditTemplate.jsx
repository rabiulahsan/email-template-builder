import { Link, useParams } from "react-router";
import LogoImageUploader from "../../Components/LogoImageUploader/LogoImageUploader";
import { useEffect, useRef, useState } from "react";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import MainImageUploader from "../../Components/MainImageUploader/MainImageUploader";
import { FaArrowLeftLong } from "react-icons/fa6";
import TextEditingBox from "./TextEditingBox";
import AlignmentEditing from "./AlignmentEditing";
import FontSizeEditing from "./FontSizeEditing";
import FontColorEditing from "./FontColorEditing";
import BgColorEditing from "./BgColorEditing";
import DownloadButton from "./DownloadButton";

const EditTemplate = () => {
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [logo, setLogo] = useState(null); // For the logo image
  const [image, setImage] = useState(null); // For the main image
  const [template, setTemplate] = useState([]); // For the selected template
  const [preview, setPreview] = useState(null); // For logo preview
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const templateRef = useRef(null); // Reference to the template div
  const editorRef = useRef(null); // Reference to the editor div

  //for color picker
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showBgColorPicker, setShowBgColorPicker] = useState(false);

  //for title
  //state for initial class for title
  const [initialClass, setInitialClass] = useState("");
  const [titleFocused, setTitleFocused] = useState(false);
  const [titleText, setTitleText] = useState(""); // Content of the title
  const titleRef = useRef(null);

  //for title description
  //state for description initial class
  const [initialDescClass, setInitialDescClass] = useState("");
  const [descFocused, setDescFocused] = useState(false);
  const [descText, setDescText] = useState(""); // Content of the title
  const descRef = useRef(null);

  //for content
  //state for description initial class
  const [initialContentClass, setInitialContentClass] = useState("");
  const [contentFocused, setContentFocused] = useState(false);
  const [contentText, setContentText] = useState(""); // Content of the title
  const contentRef = useRef(null);

  //for button styling
  //state for footer initial class
  const [initialFooterClass, setInitialFooterClass] = useState("");
  const [buttonFocused, setButtonFocused] = useState(false);
  const [buttonText, setButtonText] = useState(""); // Content of the title
  const buttonRef = useRef(null);
  const [buttonUrl, setButtonUrl] = useState("");

  //for footer

  //state for button initial class
  const [initialButtonClass, setInitialButtonClass] = useState("");
  const [footerFocused, setFooterFocused] = useState(false);
  const [footerText, setFooterText] = useState(""); // Content of the title
  const footerRef = useRef(null);

  //get the template id from the url
  const templateId = useParams().id;

  //fetching the template from the server and set to initial states
  useEffect(() => {
    fetch(
      `https://email-template-server-three.vercel.app/api/get/templates/${templateId}`
    )
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setTemplate(data);
            setLoading(false);

            // Iterate through the sections and set classes dynamically
            data.sections.forEach((section) => {
              switch (section.type) {
                case "title":
                  setInitialClass(section.classes);
                  setTitleText(section.content);
                  break;
                case "title-desc":
                  setInitialDescClass(section.classes);
                  setDescText(section.content);
                  break;
                case "content":
                  setInitialContentClass(section.classes);
                  setContentText(section.content);
                  break;
                case "title-button":
                  setInitialButtonClass(section.classes);
                  setButtonText(section.content);
                  setButtonUrl(section.url);
                  break;
                case "footer":
                  setInitialFooterClass(section.classes);
                  setFooterText(section.content);
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

  // console.log(template);

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

  // this are all variables which are sent to components as props
  const focusStates = {
    titleFocused,
    descFocused,
    buttonFocused,
    contentFocused,
    footerFocused,
  };

  const setFocusStates = {
    setTitleFocused,
    setDescFocused,
    setButtonFocused,
    setContentFocused,
    setFooterFocused,
  };
  const initialClasses = {
    initialClass,
    initialDescClass,
    initialButtonClass,
    initialContentClass,
    initialFooterClass,
  };

  const setClassesStates = {
    setInitialClass,
    setInitialDescClass,
    setInitialButtonClass,
    setInitialContentClass,
    setInitialFooterClass,
    updateClass,
  };

  const texts = {
    titleText,
    descText,
    buttonText,
    contentText,
    footerText,
  };

  const allRefs = { titleRef, descRef, contentRef, footerRef, buttonRef };

  const handlers = {
    handleDecorationClick,
    handleTitleChange,
    handleDescChange,
    handleBtnChange,
    handleContentChange,
    handleFooterChange,
  };

  //loading design is here
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color="#4152bd" size={100} />
      </div>
    );
  }

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
        {/* give loading state for saving  */}
        {saveLoading ? (
          <div className="flex justify-center items-center h-screen w-[70%]">
            <HashLoader color="#4152bd" size={100} />
          </div>
        ) : (
          <div className="  bg-slate-200 w-[70%] rounded-md border border-slate-400 py-5">
            {/* it is the main template  */}
            <div
              className="flex justify-center items-center "
              ref={templateRef}
            >
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
                            setImage={setImage}
                            image={image}
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
        )}
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
                : "Select for Editing Text"}
            </p>
            {/* decoration options  */}
            <TextEditingBox
              focusStates={focusStates}
              initialClasses={initialClasses}
              texts={texts}
              handlers={handlers}
            ></TextEditingBox>
            {/* alignment button  */}
            {!buttonFocused && !footerFocused && (
              <div className="mt-5">
                <p className="text-slate-600 text-sm font-semibold mb-2">
                  Alignment
                </p>
                <AlignmentEditing
                  focusStates={focusStates}
                  setClassesStates={setClassesStates}
                  initialClasses={initialClasses}
                ></AlignmentEditing>
              </div>
            )}
            {/* text area for changing the button url  */}
            {buttonFocused && (
              <div className="mt-5">
                <p className="text-slate-600 text-sm font-semibold mb-2">
                  Button URL
                </p>
                <textarea
                  className="w-full text-sm bg-white px-4 py-2 border border-slate-300  focus:outline-none rounded-md resize-none"
                  placeholder="Give your button a URL"
                  rows="3"
                  onChange={(e) => {
                    setButtonUrl(e.target.value);
                  }}
                  value={buttonUrl}
                ></textarea>
              </div>
            )}
            {/* Font size button  */}
            <div className="mt-5">
              <p className="text-slate-600 text-sm font-semibold mb-2">
                Font Size
              </p>
              <FontSizeEditing
                focusStates={focusStates}
                setClassesStates={setClassesStates}
                initialClasses={initialClasses}
              ></FontSizeEditing>
            </div>

            {/* font color button  */}
            <div className="mt-5">
              <p className="text-slate-600 text-sm font-semibold mb-2">
                Text Color
              </p>
              {/* pass props for functioning this to font color editing */}
              <FontColorEditing
                setShowColorPicker={setShowColorPicker}
                showColorPicker={showColorPicker}
                focusStates={focusStates}
                allRefs={allRefs}
              ></FontColorEditing>
            </div>
            {/* bg color button only for footer  */}
            {(footerFocused || buttonFocused) && (
              <div className="mt-5">
                <p className="text-slate-600 text-sm font-semibold mb-2">
                  Backgrount Color
                </p>

                {/* pass props for functioning this to bg color editing */}
                <BgColorEditing
                  focusStates={focusStates}
                  allRefs={allRefs}
                  showBgColorPicker={showBgColorPicker}
                  setShowBgColorPicker={setShowBgColorPicker}
                ></BgColorEditing>
              </div>
            )}

            {/* download button and pass props for functioning this to save and download the html layout*/}
            <DownloadButton
              setFocusStates={setFocusStates}
              initialClasses={initialClasses}
              texts={texts}
              logo={logo}
              image={image}
              setShowColorPicker={setShowColorPicker}
              setShowBgColorPicker={setShowBgColorPicker}
              buttonUrl={buttonUrl}
              setSaveLoading={setSaveLoading}
              template={template}
              templateRef={templateRef}
            ></DownloadButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditTemplate;
