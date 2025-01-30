'use client'
import { Data } from "@/lib/data";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

const IdealMan = () => {
  const data= useAtomValue(Data);
  const [heightInFeet, setHeightInFeet] = useState<string>("");
  const [formattedIncome, setFormattedIncome] = useState<string>("");

  const convertToFeetAndInches = (cm: number) => {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return { feet, inches: remainingInches };
  };

  useEffect(() => {
    if (data) {
      // Handle height
      if (data.min_height > 0) {
        const { feet, inches } = convertToFeetAndInches(data.min_height);
        setHeightInFeet(`${feet}'${inches !== 0 ? `${inches}"` : ""}`);
      } else {
        setHeightInFeet(""); 
      }

      // Handle income
      if (data.min_income > 0) {
        const formattedIncomeValue = data.min_income.toLocaleString();
        setFormattedIncome(formattedIncomeValue);
      } else {
        setFormattedIncome(""); // Reset when there's no income
      }
    }
  }, [data]); // Re-run when data changes

  // List of possible races, adding a fallback for invalid race index
  const race = ["Any color or shade", "White", "Black", "Asian"];
  const raceText = data?.race !== undefined && data.race >= 0 && data.race < race.length
    ? race[data.race]
    : "Any race"; // Fallback to "Any race" if the index is invalid

  return (
    <div>
      <h2 className="text-3xl font-bold md:text-4xl text-center mb-2 md:mb-4">
        My ideal man
      </h2>
      <div className="bg-[#ffffff18] text-base md:text-lg shadow-xl space-y-4 rounded-xl p-4 md:p-8 pb-8 md:pb-16">
        <ul className="list-disc items-start mx-4">
          <li>{data?.exclude_married ? "Not married" : "Any marital status"}</li>
          <li>{raceText}</li>
          <li>
            {data?.min_height === 0
              ? "Any height"
              : `At least ${heightInFeet} tall`}
          </li>
          <li>{data?.exclude_obese ? "Not obese" : "Any weight"}</li>
          <li>
            {data?.min_income === 0
              ? "Any Income"
              : `Earning at least $${formattedIncome} per year`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdealMan;
