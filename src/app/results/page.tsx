"use client";
import DelusionScore from "@/components/Result/DelusionScore";
import IdealMan from "@/components/Result/IdealMan";
import Probability from "@/components/Result/Probability";
import Link from "next/link";
import { useState } from "react";

const Results = () => {
  const [loading, setLoading] = useState(false);
  const resetData = () => {
    setLoading(true)
    localStorage.removeItem("output");
    localStorage.removeItem("user input");
    setLoading(false)
  };
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-44 xl:px-72 max-w-7xl w-full mx-auto my-10 md:my-20  ">
      <IdealMan />
      <Probability />
      <DelusionScore />
      <Link
        href="/"
        className="bg-[#ffffff18] hover:bg-primary hover:text-black transition-all active:scale-95 active:bg-[#45b5ffca] duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-xl p-4 md:p-8 w-full font-bold"
        onClick={resetData}
        aria-disabled={loading}
      >
        New Search{" "}
      </Link>
    </div>
  );
};

export default Results;
