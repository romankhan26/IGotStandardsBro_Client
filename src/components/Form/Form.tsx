"use client";

import React, { useState } from "react";
import AgeSlider from "./Age";
import Race from "./Race";
import MinHeight from "./MinHeight";
import MinIncome from "./MinIncome";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { Data, APIResponse } from "@/lib/data";
import { fetchData } from "@/lib/api";

const Form = () => {
  const [,setResult] = useAtom(APIResponse);
  const [data] = useAtom(Data);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
    const response = await fetchData(data);
    // console.log(response)
    setResult(response);
    const queryParams = new URLSearchParams({
      minAge: data.min_age.toString(),
      maxAge: data.max_age.toString(),
      excludeMarried: data.exclude_married.toString(),
      race: data.race.toString(),
      minHeight: data.min_height.toString(),
      excludeObese: data.exclude_obese.toString(),
      minIncome: data.min_income.toString(),
    }).toString();

   
      setLoading(true);
      setError("");

      router.push(`/results?${queryParams}`);
    }catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error submitting form:", err.message);
        setError("An error occurred while submitting the form.");
      } else {
        console.error("An unknown error occurred:", err);
        setError("An unknown error occurred.");
      }
      return;
      } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:px-12">
      <AgeSlider />
      <br />
      <Race />
      <br />
      <MinHeight />
      <br />
      <MinIncome />
      <br />
      <button
        type="submit"
        className="bg-secondary hover:bg-primary hover:text-black transition-all active:scale-95 active:bg-[#45b5ffca] duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-xl p-4 md:p-8 w-full font-bold"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {error && <p className="text-red-500 mt-4 ">{error}</p>}
    </form>
  );
};

export default Form;
