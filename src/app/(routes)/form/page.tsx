"use client";

import React, { useState } from "react";
import AgeSlider from "@/components/Form/Age";
import Race from "@/components/Form/Race";
import MinHeight from "@/components/Form/MinHeight";
import MinIncome from "@/components/Form/MinIncome";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { Data, APIResponse } from "@/lib/data";
import axios from "axios";

const Form = () => {
  const [, setResult] = useAtom(APIResponse);
  const [data] = useAtom(Data);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const response = await axios.post("/api/query", data);
      setResult(response.data);

      router.push('/results');
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
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 min-h-screen max-w-7xl w-full mx-auto flex flex-col justify-center items-center">

    <form onSubmit={handleSubmit} className="my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

     <AgeSlider />
    <Race />
   <MinHeight />
   <MinIncome />
   </div>
<br />
      <button
        type="submit"
        className="hover:bg-transparent  border-primary border-2 bg-primary text-white transition-all active:scale-95 active:bg-primary active:text-white hover:text-primary duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-l-full rounded-r-full  p-3 md:p-4 w-full font-bold"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {error && <p className="text-red-500 mt-4 ">{error}</p>}
    </form>
        </div>
  );
};

export default Form;
