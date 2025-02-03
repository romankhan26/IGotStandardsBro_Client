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
    <form onSubmit={handleSubmit} className="mb-10">
     <div className="md:grid grid-cols-2 gap-4  space-y-6">
     <AgeSlider />
     <Race />
     </div>
     <br />
   <div className="md:grid grid-cols-2 gap-4 space-y-6">
   <MinHeight />
   <MinIncome />
   </div>
   <br />
      <button
        type="submit"
        className="hover:bg-transparent border-primary-soft-pink hover:border-2 bg-primary-soft-pink text-white transition-all active:scale-95 active:bg-primary-soft-pink active:text-white hover:text-primary-soft-pink duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-xl p-4 md:p-8 w-full font-bold"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {error && <p className="text-red-500 mt-4 ">{error}</p>}
    </form>
  );
};

export default Form;
