"use client";

import React, { useState } from "react";
import AgeSlider from "./Age";
import Race from "./Race";
import MinHeight from "./MinHeight";
import MinIncome from "./MinIncome";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { Data, APIResponse } from "@/app/data";
import { fetchData } from "@/lib/api";

const Form = () => {
  const [,setResult] = useAtom(APIResponse);
  const router = useRouter();
  const [data] = useAtom(Data);
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
    }catch(err:any){
      console.error("Error submitting form:", err.message);
      setError("An error occurred while submitting the form.");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        className="bg-[#ffffff18] shadow-xl space-y-4 text-xl md:text-2xl rounded-xl p-4 md:p-8 w-full font-bold"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {error && <p className="text-red-500 mt-4 ">{error}</p>}
    </form>
  );
};

export default Form;
