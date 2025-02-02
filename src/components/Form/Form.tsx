"use client";

import React, { useState } from "react";
import AgeSlider from "./Age";
import Race from "./Race";
import MinHeight from "./MinHeight";
import MinIncome from "./MinIncome";
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
