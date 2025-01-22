/* eslint-disable react/prop-types */
import { useState } from "react";
import { SketchPicker } from "react-color";

const BgColorEditing = ({
  focusStates,
  allRefs,
  showBgColorPicker,
  setShowBgColorPicker,
}) => {
  //destructuring the focusstates from props
  const { buttonFocused, footerFocused } = focusStates;

  //destructuring the allRefs from props
  const { footerRef, buttonRef } = allRefs;

  const [bgColor, setBgColor] = useState("#000000");

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

  return (
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
  );
};

export default BgColorEditing;

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
