'use client'
import { Data } from "@/lib/data";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import {race} from "@/lib/data"
import { H_Two } from "../Utils/Typography";

const IdealMan = () => {
  const data= useAtomValue(Data);
  // console.log('data: ideal man', data);
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
      if (data.min_height > 0) {
        const { feet, inches } = convertToFeetAndInches(data.min_height);
        setHeightInFeet(`${feet}'${inches !== 0 ? `${inches}"` : ""}`);
      } else {
        setHeightInFeet(""); 
      }

      if (data.min_income > 0) {
        const formattedIncomeValue = data.min_income.toLocaleString();
        setFormattedIncome(formattedIncomeValue);
      } else {
        setFormattedIncome("");
      }
    }
  }, [data]);

  const raceText = data?.race !== undefined && race[data.race]
      return (
    <div className="rounded-3xl ">
           <H_Two className=" text-center my-2 mt-4 md:mt-8 md:my-4" text="My Ideal Man"/>
     
      <div className="bg-secondary text-base md:text-lg shadow-xl space-y-4 rounded-xl p-4 md:p-8 pb-8 md:pb-16">
        <ul className="list-disc items-start mx-4">
          <li>{!(data?.exclude_married) ? "Any marital status" :"Not married"}</li>
          <li>{raceText}</li>
          <li>
            {data?.min_height === 0
              ? <span className="text-[#ffffff66]">Any height</span>
              : `At least ${heightInFeet} tall`}
          </li>
          <li>{data?.exclude_obese ? "Not obese" : "Any weight"}</li>
          <li>
            {data?.min_income === 0
              ?"Any income"
              : `Earning at least $${formattedIncome} per year`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdealMan;
