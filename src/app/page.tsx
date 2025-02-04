"use client";

import { useState } from "react";
import { H_Five, H_One } from "@/components/Utils/Typography";
import Image from "next/image";
import AgeSlider from "@/components/Form/Age";
import Race from "@/components/Form/Race";
import MinHeight from "@/components/Form/MinHeight";
import MinIncome from "@/components/Form/MinIncome";
import { useAtom } from "jotai";
import { Data, APIResponse } from "@/lib/data";
import axios from "axios";
import DelusionScore from "@/components/Result/DelusionScore";
import IdealMan from "@/components/Result/IdealMan";
import Probability from "@/components/Result/Probability";
import Link from "next/link";
export default function Home() {
  const [, setResult] = useAtom(APIResponse);
  const [data] = useAtom(Data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [ViewResult, setViewResult] = useState(false);
  const resetData = () => {
    setLoading(true);
    if (typeof window !== "undefined" || typeof window !== null) {
      localStorage.removeItem("output");
      localStorage.removeItem("user input");
    }
    setViewResult(false);

    setLoading(false);
  };
  // form handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const response = await axios.post("/api/query", data);
      setResult(response.data);
      setViewResult(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error submitting form:", err.message);
        setError("An error occurred while submitting the form.");
      } else {
        console.error("An unknown error occurred:", err);
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32  xl:px-64 max-w-7xl w-full mx-auto min-h-screen flex justify-center items-center flex-col pb-10">
      {/* <div className="w-full max-w-7xl"> */}
      <div className="mb-12 md:mb-24 md:flex items-center justify-center text-center md:text-left  my-[40px] md:my-[70px]  gap-10 mx-auto ">
        <div className="  sm:px-32 md:px-0">
          <H_One
            className=" text-shadow "
            text="Female  Delusion
  Calculator"
          />
          <H_Five
            className="text-xl font-semibold 	md:text-2xl  mb-2"
            text="
  What are the chances to find the man of my dreams?
  "
          />
          <p className="text-base	md:text-lg leading-0 -my-2">
            Live search using surveys conducted by{" "}
            <Link href="/stats" className="text-primary font-bold">
              US Census Bureau and NCHS
            </Link>
          </p>
          <br />
          <Link
            href="/form"
            className="text-sm md:text-base w-[90%] sm:w-[80vh] mx-auto  block text-center md:w-[300px] hover:bg-transparent border-primary border-2 bg-primary text-white transition-all active:scale-95 active:bg-primary active:text-white hover:text-primary duration-300 shadow-xl p-4   md:-ml-2  md:-mt-2 rounded-l-full rounded-r-full font-bold"
          >
            Calculate Your Delusion Score
          </Link>
        </div>
        <br />
        <br />
        <div className="  md:w-[100%] max-w-[350px] w-[300px] h-[400px]  md:block hidden shrink-0">
          <Image
            src="/assets/image_homepage (1).png"
            className="w-full h-[400px] shrink-0"
            width={600}
            height={600}
            priority
            alt="home_screen"
          />
        </div>

      </div>
      {/* form section */}
      <div>
        <form onSubmit={handleSubmit} className="my-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <AgeSlider />
            <Race />
            <MinHeight />
            <MinIncome />
          </div>
          <br />
          <button
            type="submit"
            className="hover:bg-transparent  mb-5 md:mb-10   border-primary border-2 bg-primary text-white transition-all active:scale-95 active:bg-primary active:text-white hover:text-primary duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-l-full rounded-r-full  p-3 md:p-4 w-full font-bold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="text-red-500 mt-4 ">{error}</p>}
        </form>
      </div>

      {/* result section */}
      {ViewResult && (
        <div>
          <DelusionScore />
          <br />
          <IdealMan />
          <br />
          <Probability />
          <br />
          <button
            type="button"
            onClick={resetData}
            className="block mb-5 md:mb-10 text-center hover:bg-transparent  border-primary border-2 bg-primary text-white transition-all active:scale-95 active:bg-primary active:text-white hover:text-primary duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-l-full rounded-r-full  p-3 md:p-4 w-full font-bold"
            aria-disabled={loading}
          >
            New Search{" "}
          </button>
        </div>
      )}
      <br />
    </div>
  );
}
