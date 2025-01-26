"use client";
import "./Slider.css";
import { useState } from "react";
import { Data } from "@/app/data";
import { useAtom } from "jotai";

const Age = () => {
  const [data, setData] = useAtom(Data);
// console.log(data)
  // State for age ranges
  const [minAge, setMinAge] = useState(20);
  const [maxAge, setMaxAge] = useState(40);

  const rangeDistance = 85 - 18  ;
  const AgeGap = 5;

  // Calculate filled background positions
  const fromPosition = Math.ceil((((minAge - 18) / rangeDistance) * 100));
  const toPosition = Math.ceil(((85 - maxAge) / rangeDistance) * 100);
  // console.log(fromPosition, toPosition)
  const FilledBackground = {
    left: fromPosition + "%",
    right: toPosition + "%",
  };

  // Update min age handler
  const handleMinAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxAge && maxAge - value >= AgeGap) {
   try {
      setMinAge(value);
      setData({ ...data, min_age: value });
    } catch (error) {
      console.log("Failed to update minAge:",error)
    }
  }
  };

  // Update max age handler
  const handleMaxAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minAge && value - minAge >= AgeGap) {
        try {
        setMaxAge(value);
        setData({ ...data, max_age: value }); // Update the Jotai atom
      } catch (error) {
        console.log("Failed to update maxAge:",error)
      }
    }
  };

  // Exclude married state
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    setData({ ...data, exclude_married: checked }); // Update the Jotai atom
  };

  return (
    <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base md:text-lg rounded-xl p-4 md:p-8 pb-8 md:pb-16">
      <h2 className="text-3xl font-bold md:text-4xl text-center my-1 md:my-2">
        Age
      </h2>

      <div className="relative py-10 w-full mx-auto">
        <div className="bg-[#C6C6C6] h-[4px] relative rounded-full">
          <div className="bg-primary h-[4px] absolute flex justify-between mx-auto" style={FilledBackground}>
              <div className="border bg-primary px-2 md:-mt-12 -mt-10 font-mono tracking-wider  mx-0 w-6 md:w-8 h-6 md:h-8 rounded-bl-[50%] rounded-t-[50%] rotate-45 shrink-0 relative ">
                <span className="md:text-sm font-bold md:-ml-1 md:pt-1 text-center text-[12px] rotate-[-45deg] absolute">
                  {minAge}
                </span>
              </div>
              <div className="border bg-primary px-2 md:-mt-12 -mt-10 font-mono tracking-wider  mx-0 w-6 md:w-8 h-6 md:h-8 rounded-bl-[50%] rounded-t-[50%] rotate-45 shrink-0 relative ">
                <span className="md:text-sm font-bold md:-ml-1 md:pt-1 text-center text-[12px] rotate-[-45deg] absolute">
                  {maxAge}
                </span>
              </div>
          </div>
        
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
