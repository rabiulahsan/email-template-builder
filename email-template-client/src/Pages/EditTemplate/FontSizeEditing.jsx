/* eslint-disable react/prop-types */
const FontSizeEditing = ({ focusStates, initialClasses, setClassesStates }) => {
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

  const {
    setInitialClass,
    setInitialDescClass,
    setInitialContentClass,
    setInitialFooterClass,
    setInitialButtonClass,
    updateClass,
  } = setClassesStates;

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
  return (
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
            : buttonFocused
            ? initialButtonClass.includes("text-sm")
              ? "bg-slate-100"
              : ""
            : contentFocused
            ? initialContentClass.includes("text-sm")
              ? "bg-slate-100"
              : ""
            : footerFocused
            ? initialFooterClass.includes("text-sm")
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
            : buttonFocused
            ? initialButtonClass.includes("text-base")
              ? "bg-slate-100"
              : ""
            : contentFocused
            ? initialContentClass.includes("text-base")
              ? "bg-slate-100"
              : ""
            : footerFocused
            ? initialFooterClass.includes("text-base")
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
            : buttonFocused
            ? initialButtonClass.includes("text-lg")
              ? "bg-slate-100"
              : ""
            : contentFocused
            ? initialContentClass.includes("text-lg")
              ? "bg-slate-100"
              : ""
            : footerFocused
            ? initialFooterClass.includes("text-lg")
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
            : buttonFocused
            ? initialButtonClass.includes("text-xl")
              ? "bg-slate-100"
              : ""
            : contentFocused
            ? initialContentClass.includes("text-xl")
              ? "bg-slate-100"
              : ""
            : footerFocused
            ? initialFooterClass.includes("text-xl")
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
            : buttonFocused
            ? initialButtonClass.includes("text-2xl")
              ? "bg-slate-100"
              : ""
            : contentFocused
            ? initialContentClass.includes("text-2xl")
              ? "bg-slate-100"
              : ""
            : footerFocused
            ? initialFooterClass.includes("text-2xl")
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
            : buttonFocused
            ? initialButtonClass.includes("text-3xl")
              ? "bg-slate-100"
              : ""
            : contentFocused
            ? initialContentClass.includes("text-3xl")
              ? "bg-slate-100"
              : ""
            : footerFocused
            ? initialFooterClass.includes("text-3xl")
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
            : buttonFocused
            ? initialButtonClass.includes("text-4xl")
              ? "bg-slate-100"
              : ""
            : contentFocused
            ? initialContentClass.includes("text-4xl")
              ? "bg-slate-100"
              : ""
            : footerFocused
            ? initialFooterClass.includes("text-4xl")
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
  );
};

export default FontSizeEditing;

const sizeOptions = [
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
];
