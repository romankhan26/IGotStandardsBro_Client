"use client";
import { APIResponse } from "@/lib/data";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";

const DelusionScore = () => {
  const response = useAtomValue(APIResponse);
  // console.log("response:delusion ", response);

  
  const formattedResponse = (response.total_probability ?? 0) * 100;

  const [delusionScore, setDelusionScore] = useState<number>(0);

  const messages = [
    "Are you sure you are a woman?",
    "Easy to please",
    "Down to Earth",
    "Aspiring Cat Lady",
    "Cat Enthusiast",
    "You Don't Belong on this planet",
  ];

  const images = ["/assets/score_item1.svg", "/assets/score_item2.svg"];

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

  
  const delusionImage = new Array(delusionScore).fill(images[0]);
  const fadeImage = new Array(5 - delusionScore).fill(images[1]);
  const imageArray = [...delusionImage, ...fadeImage];

  return (
    <div>
      <h2 className="text-3xl font-bold md:text-4xl text-center my-2 mt-4 md:mt-8 md:my-4">
        Delusion Score
      </h2>
      <div className="bg-secondary text-base md:text-lg shadow-xl space-y-4 rounded-xl p-4 md:p-8 pb-8 md:pb-16">
        <div className="flex justify-center items-center">
          {imageArray.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt="score"
              width={50}
              height={50}
              className="w-[44px] h-[44px] md:w-[124px] md:h-[124px]"
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold md:text-4xl text-center leading-tight text-primary">
          {delusionScore}/5
        </h2>
        <h3 className="text-center text-primary leading-tight text-2xl md:text-3xl">
          {messages[delusionScore]}
        </h3>
      </div>
    </div>
  );
};

export default DelusionScore;
