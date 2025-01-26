"use client";
import React, { useState } from 'react';
import AgeSlider from './Age';
import Race from './Race';
import MinHeight from './MinHeight';
import MinIncome from './MinIncome';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { Data, APIResponse } from '@/app/data';

const Form = () => {
  const router = useRouter();
  const [data] = useAtom(Data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [result, setResult] = useAtom(APIResponse);
  const raceValue = data.race 
 // For storing API response
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Start by setting loading to true and clearing any previous error
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          exclude_married
          :
           data.exclude_married,
          exclude_obese
          :
           data.exclude_obese,
          max_age
          :
           data.max_age,
          min_age
          :
           data.min_age,
          min_height
          :
           data.min_height,
          min_income
          :
           data.min_income,
          race
          :
           raceValue
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const resultData = await response.json();
      setResult(resultData); // Store the API response in global state
      console.log("API result:", resultData);

      // Navigate to results page
      router.push('/results');
    } catch (error: any) {
      console.error('Error:', error);
      setError('An error occurred while fetching data. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false after the request completes (success or error)
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
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {/* {error &&  <p className=" w-screen h-screen bg-white text-center text-red-500">{error}</p>} */}
    </form>
  );
};

export default Form;
