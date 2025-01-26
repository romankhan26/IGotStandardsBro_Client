"use client";
import "./Slider.css";
import { Data } from "@/app/data";
import { useAtom } from "jotai";
import { useState } from "react";

const MinIncome = () => {
  const [data, setData] = useAtom(Data);
  const [MinIncome, setMinIncome] = useState("5000");

  const toPosition = (Number(MinIncome) / 500000) * 100; // Progress as a percentage
  const FilledBackground = {
    left: 0,
    width: `${toPosition}%`, // Make sure the width fills the range properly
  };

  const handleMinIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setMinIncome(value.toString());
    setData({ ...data, min_income: value });
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
      <h2 className="text-3xl font-bold md:text-4xl text-center my-1 md:my-2">
        Min. Income
      </h2>
      <div className="bg-[#C6C6C6] h-[4px] relative rounded-full">
        <div
          className="bg-primary absolute h-[4px] rounded-full"
          style={FilledBackground}
        >
          <span className="">{readableIncomeValue}</span>
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
      {/* <div className="flex items-center gap-2">
        <label htmlFor="minIncome">Min. Income:</label>
        <span>{MinIncome}</span>
  </div> */}
    </div>
  );
};

export default MinIncome;
