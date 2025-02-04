"use client";
import "./Slider.css";
import { useState } from "react";
import { Data } from "@/lib/data";
import {  useAtom } from "jotai";
import { H_Two } from "../Utils/Typography";

const Age = () => {
  const  [data,setData] = useAtom(Data);
  const [minAge, setMinAge] = useState(data.min_age ||20);
  const [maxAge, setMaxAge] = useState(data.max_age || 40);
  // console.log(minAge)
  const [isChecked, setIsChecked] = useState(data.exclude_married || false);
  const rangeDistance = 85 - 18 + 1;
  const AgeGap = 5;
  const fromPosition = Math.ceil(((minAge - 18) / rangeDistance) * 100);
  const toPosition = Math.ceil(((85 - maxAge) / rangeDistance) * 100);
  
  const  FilledBackground= {
    left: fromPosition + "%",
    right: toPosition + "%",
  };

  const handleMinAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxAge && maxAge - value >= AgeGap) {
    
        setMinAge(value);
        setData((prev:object)=>({ ...prev, min_age: value }));
        
      }
    };

  const handleMaxAge = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = Number(e.target.value);
    if (value > minAge && value - minAge >= AgeGap) {
      setMaxAge(value);    
      setData((prev:object)=>({ ...prev, max_age: value }));
    } 
    };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    setData((prev:object)=>({ ...prev, exclude_married: checked }));

  };

  return (
    <div className="shadow-xl space-y-4  bg-secondary rounded-3xl p-4 md:p-8 pb-8 md:pb-16 h-[400px] w-full md:max-w-[800px]">
      <H_Two className=" my-1 md:my-2" text="
        Age
      "/>

      <div className=" py-10 w-full mx-auto">
        <div className="bg-secondary-light-gray h-[4px] relative rounded-full">
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
            className="w-full z-10"
          />

          <input
            id="maxAge"
            type="range"
            min="18"
            max="85"
            value={maxAge}
            onChange={handleMaxAge}
            className="w-full z-0"
          />
        </div>
        {/* Container Age Representator */}
        <div className="flex items-center justify-center gap-1 md:gap-2   -mb-5 md:-mb-0 mt-5 md:mt-10">
          <div className=" border-[#676767] text-primary bg-accent
           border-[1px] flex justify-between gap-4 px-4 md:px-8 py-1 md:py-2 font-bold rounded-xl">
            <span className=" text-[14px]">Min.</span>
          {minAge}
          </div>
          <div className="w-4 bg-[#333333] h-[1px]"/>
          <div className=" border-[#333333] text-primary bg-accent
           border-[1px] flex justify-between gap-4 px-4 md:px-8  py-1 md:py-2 font-bold rounded-xl">

            <span className=" text-[14px]">Max.</span>
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