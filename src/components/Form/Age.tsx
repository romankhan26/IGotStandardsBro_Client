"use client";
import "./Slider.css";
import { useState } from "react";
import { Data } from "@/lib/data";
import {  useSetAtom } from "jotai";

const Age = () => {
  const  setData = useSetAtom(Data);
  // console.log(data)
  // State for age ranges
  const [minAge, setMinAge] = useState(20);
  const [maxAge, setMaxAge] = useState(40);

  const rangeDistance = 85 - 18 + 1;
  const AgeGap = 5;

  // Calculate filled background positions
  const fromPosition = Math.ceil(((minAge - 18) / rangeDistance) * 100);
  const toPosition = Math.ceil(((85 - maxAge) / rangeDistance) * 100);
  // console.log(fromPosition, toPosition)
  const FilledBackground = {
    left: fromPosition + "%",
    right: toPosition + "%",
  };

  // Update min age handler

  
  
  const handleMinAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = Number(e.target.value);
    if (value < maxAge && maxAge - value >= AgeGap) {
    
        setMinAge(value);
        setData((prev:object)=>({ ...prev, min_age: value }));
    
    }
  };

  // Update max age handler
  const handleMaxAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = Number(e.target.value);
    if (value > minAge && value - minAge >= AgeGap) {
     
        setMaxAge(value);
        setData((prev:object)=>({ ...prev, max_age: value })); // Update the Jotai atom
     
    }
  };

  // Exclude married state
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const checked = e.target.checked;
    setIsChecked(checked);
    setData((prev:object)=>({ ...prev, exclude_married: checked })); // Update the Jotai atom
  };

  return (
    <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base md:text-lg rounded-xl p-4 md:p-8 pb-8 md:pb-16">
      <h2 className="text-3xl font-bold md:text-4xl text-center my-1 md:my-2">
        Age
      </h2>

      <div className=" py-10 w-full mx-auto">
        <div className="bg-[#C6C6C6] h-[4px] relative rounded-full">
          <div
            className="bg-primary h-[4px]   absolute flex gap-5 justify-between mx-auto"
            style={FilledBackground}
          ></div>

          <input
            id="minAge"
            type="range"
            min="18"
            max="85"
            value={minAge}
            onChange={handleMinAge}
            className="w-full"
          />

          <input
            id="maxAge"
            type="range"
            min="18"
            max="85"
            value={maxAge}
            onChange={handleMaxAge}
            className="w-full"
          />
        </div>
        {/* Container Age Representator */}
        <div className="flex items-center justify-center gap-4 md:gap-8 -mb-5 md:-mb-0 mt-5 md:mt-10">
          <div className=" border-[#c6c6c6ca] text-primary bg-[#001f4d] border-[1px] flex justify-between gap-4 px-4 md:px-8 py-1 md:py-2 font-bold rounded-xl">
            <span className="text-[#ababab] text-[14px]">Min.</span>
          {minAge}
          </div>
          <div className="w-4 bg-[#c6c6c6ca] h-[1px]"/>
          <div className=" border-[#c6c6c6ca] text-primary bg-[#001f4d] border-[1px] flex justify-between gap-4 px-4 md:px-8  py-1 md:py-2 font-bold rounded-xl">

            <span className="text-[#ababab] text-[14px]">Max.</span>
            {maxAge}
          </div>
        </div>
      </div>

      {/* Exclude Married Checkbox */}
      <label
        htmlFor="exclude-married"
        className="flex items-center gap-1 md:gap-2 cursor-pointer"
      >
        <input
          type="checkbox"
          id="exclude-married"
          checked={isChecked}
          onChange={handleCheckbox}
          name="exclude-married"
          className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] cursor-pointer"
        />
        Exclude Married
      </label>
    </div>
  );
};

export default Age;
