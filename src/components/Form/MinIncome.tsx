"use client";
import "./Slider.css";
import { Data } from "@/lib/data";
import { useSetAtom } from "jotai";
import { useState } from "react";

const MinIncome = () => {
  const  setData = useSetAtom(Data);
  const [MinIncome, setMinIncome] = useState("5000");

  const toPosition = (Number(MinIncome) / 500000) * 100; 
  const FilledBackground = {
    left: 0,
    width: `${toPosition}%`, 
  };

  const handleMinIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setMinIncome(value.toString());
    setData((prev:object)=>({ ...prev, min_income: value }));
  };
  const readableIncomeValue =
    MinIncome === "0"
      ? "Any"
      : MinIncome.split("")
          .reverse()
          .join("")
          .replace("000", "k")
          .split("")
          .reverse()
          .join("");
  return (
    <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base md:text-lg rounded-xl p-4 md:p-8 pb-8 md:pb-16">
      <div className="flex items-center justify-between  flex-col md:flex-row">  <h2 className="text-3xl font-bold md:text-4xl text-center my-1 md:my-2">
        Min. Income
      
      </h2>

      <div className="  text-center md:w-[20%] md:max-w-[30%] w-[50%]   border-[#c6c6c6ca] text-primary bg-[#001f4d] border-[1px] flex justify-between gap-4 px-4 md:px-8 py-2 md:py-2 -mb-5 md:-mb-0  mt-5 md:mt-0 font-bold rounded-xl">
         $ {readableIncomeValue}
          </div>
          </div> 

      <div className=" pt-10 w-full mx-auto">

      <div className="bg-[#C6C6C6] h-[4px] relative rounded-full">
        <div
          className="bg-primary absolute h-[4px] rounded-full"
          style={FilledBackground}
        >
        </div>
        <input
          id="minHeight"
          type="range"
          min={0}
          step={5000}
          max={500000}
          value={MinIncome}
          onChange={handleMinIncome}
          className="w-full"
        />
      </div>
      </div>
      {/* <div className="flex items-center gap-2">
        <label htmlFor="minIncome">Min. Income:</label>
        <span>{MinIncome}</span>
  </div> */}
    </div>
  );
};

export default MinIncome;
