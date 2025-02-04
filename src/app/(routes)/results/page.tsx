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
    if(typeof window !== "undefined"|| typeof window !== null ){
      localStorage.removeItem("output");
      localStorage.removeItem("user input");
    }

    setLoading(false)
  };
  return (
    <div className="px-4 gap-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 min-h-screen  md:flex-row  max-w-7xl w-full mx-auto my-10 md:my-20  flex flex-col justify-center items-center">
     
    <div>
    <DelusionScore />
  <br />
 <IdealMan />
  <br />
    <Probability />
  <br />
  <Link
    href="/"
    className="block text-center hover:bg-transparent  border-primary border-2 bg-primary text-white transition-all active:scale-95 active:bg-primary active:text-white hover:text-primary duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-l-full rounded-r-full  p-3 md:p-4 w-full font-bold"        onClick={resetData}
    aria-disabled={loading}
  >
    New Search{" "}
  </Link>
    </div>
 </div>
  );
};

export default Results;
