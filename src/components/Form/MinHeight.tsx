"use client";
import "./Slider.css";
import { Data } from "@/app/data";
import { useAtom } from "jotai";
import { useState } from "react";

const MinHeight = () => {
  const [data, setData] = useAtom(Data);
  const heightOptions: string[] = [];

  for (let feet = 4; feet <= 7; feet++) {
    for (let inches = 0; inches < 12; inches++) {
      if (feet === 7 && inches > 0) break; 
      
      if (feet === 4 && inches === 0) {
        heightOptions.push("Any");
      } else if (inches === 0) {
        heightOptions.push(`${feet}'`);
      } else {
        heightOptions.push(`${feet}'${inches}"`);
      }
    }
  }

  const [minHeightIndex, setMinHeightIndex] = useState(24);

  const convertToCm = (feet: number, inches: number): number => {
    const totalInches = feet * 12 + inches;
    return totalInches * 2.54; // 1 inch = 2.54 cm
  };

  const handleMinHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinHeightIndex(value);

    const heightStr = heightOptions[value];
    let feet = 0;
    let inches = 0;

    if (heightStr === "Any") {
      setData({ ...data, min_height: 0 }); 
      return;
    } else {
      const [feetPart, inchesPart] = heightStr.split("'");
      feet = parseInt(feetPart);
      inches = inchesPart ? parseInt(inchesPart.replace('"', "")) : 0;
    }

    const cmValue = convertToCm(feet, inches);

    setData({ ...data, min_height: cmValue });
    // console.log(cmValue);
  };

  const rangeDistance = heightOptions.length - 1;
  const toPosition = (minHeightIndex / rangeDistance) * 100; 
  const FilledBackground = {
    left:0,
    width: `${toPosition}%`, 
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    setData({ ...data, exclude_obese: checked }); 
  };


  return (
    <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base md:text-lg rounded-xl p-4 md:p-8 pb-8 md:pb-16">
      <h2 className="text-3xl font-bold md:text-4xl text-center my-1 md:my-2">
        Min. Height
      </h2>





      <div className="relative py-10 w-full mx-auto">

      <div className="bg-[#C6C6C6] h-[4px] relative rounded-full">
        <div
          className="bg-primary absolute h-[4px] rounded-full"
          style={FilledBackground}
        ></div>
        <input
          id="minHeight"
          type="range"
          min="0"
          max={rangeDistance} // Ensure max corresponds to heightOptions length
          value={minHeightIndex}
          onChange={handleMinHeight}
          className="w-full"
        />
      </div>
      </div>
      <label
        htmlFor="exclude-obese"
        className="flex items-center gap-1 md:gap-2 cursor-pointer"
      >
        <input
          type="checkbox"
          id="exclude-obese"
          checked={isChecked}
          onChange={handleCheckbox}
          name="exclude-obese"
          className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] cursor-pointer"
        />
        Exclude Obese
      </label>
    </div>
  );
};

export default MinHeight;
