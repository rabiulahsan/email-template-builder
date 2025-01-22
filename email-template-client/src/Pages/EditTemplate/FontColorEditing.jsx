/* eslint-disable react/prop-types */
import { useState } from "react";
import { SketchPicker } from "react-color";

const FontColorEditing = ({
  focusStates,
  allRefs,
  showColorPicker,
  setShowColorPicker,
}) => {
  //destructuring the focusstates from props
  const {
    titleFocused,
    descFocused,
    buttonFocused,
    contentFocused,
    footerFocused,
  } = focusStates;

  //destructuring the allRefs from props
  const { titleRef, descRef, contentRef, footerRef, buttonRef } = allRefs;

  const [color, setColor] = useState("#000000");

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

  return (
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
  );
};

export default FontColorEditing;

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
