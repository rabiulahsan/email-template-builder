/* eslint-disable react/prop-types */
const TextEditingBox = ({ focusStates, initialClasses, texts, handlers }) => {
  //destructuring the focusstates from props
  const {
    titleFocused,
    descFocused,
    buttonFocused,
    contentFocused,
    footerFocused,
  } = focusStates;

  //destructuring the initialClasses from props
  const {
    initialClass,
    initialDescClass,
    initialButtonClass,
    initialContentClass,
    initialFooterClass,
  } = initialClasses;

  //destructuring the texts from props
  const { titleText, descText, buttonText, contentText, footerText } = texts;

  //destructuring the handlers from props
  const {
    handleDecorationClick,
    handleTitleChange,
    handleDescChange,
    handleBtnChange,
    handleContentChange,
    handleFooterChange,
  } = handlers;

  return (
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
              : buttonFocused
              ? initialButtonClass.includes("font-bold")
                ? "bg-slate-100"
                : ""
              : contentFocused
              ? initialContentClass.includes("font-bold")
                ? "bg-slate-100"
                : ""
              : footerFocused
              ? initialFooterClass.includes("font-bold")
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
              : buttonFocused
              ? initialButtonClass.includes("italic")
                ? "bg-slate-100"
                : ""
              : contentFocused
              ? initialContentClass.includes("italic")
                ? "bg-slate-100"
                : ""
              : footerFocused
              ? initialFooterClass.includes("italic")
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
              : buttonFocused
              ? initialButtonClass.includes("underline")
                ? "bg-slate-100"
                : ""
              : contentFocused
              ? initialContentClass.includes("underline")
                ? "bg-slate-100"
                : ""
              : footerFocused
              ? initialFooterClass.includes("underline")
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
              : buttonFocused
              ? initialButtonClass.includes("line-through")
                ? "bg-slate-100"
                : ""
              : contentFocused
              ? initialContentClass.includes("line-through")
                ? "bg-slate-100"
                : ""
              : footerFocused
              ? initialFooterClass.includes("line-through")
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
  );
};

export default TextEditingBox;
