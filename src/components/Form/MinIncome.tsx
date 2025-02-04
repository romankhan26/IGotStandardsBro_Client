"use client";

import { Data } from "@/lib/data";
import { useAtom } from "jotai";
import { useState } from "react";
import { H_Two } from "../Utils/Typography";

const MinIncome = () => {
   const [data,setData] = useAtom(Data);
   const [MinIncome, setMinIncome] = useState(data.min_income.toString() || "5000");
// console.log(typeof data.min_income,"minincometype" )
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
    <div className="shadow-xl space-y-4 bg-secondary rounded-3xl p-4 md:p-8 pb-8 md:pb-16 h-[400px] max-w-[800px]">
       <div className="flex items-center justify-between  flex-col gap-2"> 
         <H_Two className=" text-center my-1 md:my-2" text="
        Min. Income
         "/>

      <div className="  text-center w-[80%] flex justify-center items-center  border-[#676767] text-primary bg-accent border-[1px]  gap-4 px-4 md:px-8 py-2 md:py-2 -mb-5 md:-mb-2  mt-5 md:mt-2 font-bold rounded-xl">
         $ {readableIncomeValue}
          </div>
          </div> 

      <div className=" pt-10 w-full mx-auto">

      <div className="bg-secondary-light-gray h-[4px] relative rounded-full">
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
