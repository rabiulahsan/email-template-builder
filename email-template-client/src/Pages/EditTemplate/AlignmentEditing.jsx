import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
} from "react-icons/md";

/* eslint-disable react/prop-types */
const AlignmentEditing = ({
  focusStates,
  initialClasses,
  setClassesStates,
}) => {
  //destructuring the focusstates from props
  const { titleFocused, descFocused, contentFocused } = focusStates;
  const {
    setInitialClass,
    setInitialDescClass,
    setInitialContentClass,
    updateClass,
  } = setClassesStates;

  //destructuring the initialClasses from props
  const { initialClass, initialDescClass, initialContentClass } =
    initialClasses;

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
    }
  };

  return (
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
  );
};

export default AlignmentEditing;

const alignOptions = ["text-center", "text-justify", "text-left", "text-right"];
