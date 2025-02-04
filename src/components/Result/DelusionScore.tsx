"use client";
import { APIResponse } from "@/lib/data";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { H_Four, H_Six, H_Two } from "../Utils/Typography";

const DelusionScore = () => {
  const response = useAtomValue(APIResponse);
  // console.log("response:delusion ", response);

  
  const formattedResponse = (response.total_probability ?? 0) * 100;

  const [delusionScore, setDelusionScore] = useState<number>(0);

  const delusionMessages = [
    {
      percentageRange: "90-100%",
      title: "Hopeless Romantic with Realistic Standards",
      description: "You know exactly what you want, and it's within reach!"
    },
    {
      percentageRange: "75-89%",
      title: "Love is in the Air",
      description: "Your dream guy is out there, and you're on the right path!"
    },
    {
      percentageRange: "50-74%",
      title: "A Dreamer with High Hopes",
      description: "You're optimistic, but a little flexibility might help!"
    },
    {
      percentageRange: "30-49%",
      title: "Romance Explorer",
      description: "You’re on a journey to love—adjusting expectations might lead to success!"
    },
    {
      percentageRange: "10-29%",
      title: "Chasing a Fairytale",
      description: "A perfect man exists… in novels! Maybe tweak those must-haves?"
    },
    {
      percentageRange: "0-9%",
      title: "Unicorn Hunter",
      description: "Your standards are legendary! If he exists, he’s rare and magical!"
    }
  ];
  

  useEffect(() => {
    let score = 0;

    if (formattedResponse >= 90) {
      score = 0; 
    } else if (formattedResponse >= 75) {
      score = 1; 
    } else if (formattedResponse >= 50) {
      score = 2; 
    } else if (formattedResponse >= 30) {
      score = 3; 
    } else if (formattedResponse >= 10) {
      score = 4; 
    } else {
      score = 5; 
    }

    setDelusionScore(score);
  }, [formattedResponse]);

  

  return (
    <div className="rounded-3xl ">
      <H_Two className=" text-center my-2 mt-4 md:mt-8 md:my-4" text="        Delusion Score
"/>
      <div className="bg-secondary text-base md:text-lg shadow-xl space-y-4 rounded-xl p-4 md:p-8 pb-8 md:pb-16">
        <div className="flex justify-center items-center">
          
         
        </div>
        <H_Four className="text-center font-bold" text={delusionMessages[delusionScore].title}/>
        
        
        <H_Six className="text-center" text={delusionMessages[delusionScore].description}/>
      </div>
    </div>
  );
};

export default DelusionScore;
