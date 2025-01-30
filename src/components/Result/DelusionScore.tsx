'use client'
import { APIResponse } from "@/lib/data";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";
const DelusionScore = () => {
const response = useAtomValue(APIResponse) 
 const [delusionScore, setDelusionScore] = useState<number>(0);
 const messages = ["Are you sure you are a woman?","Easy to please", "Down to Earth","Aspiring Cat Lady", "Cat Enthusiast", "You Don't Belong on this planet"]
  const images= ["/assets/score_item1.svg ", "/assets/score_item2.svg "]
  const FormattedResponse =response.total_probability*100 
const delusionImage = images[0].repeat(delusionScore).split(" ")
delusionImage.pop()
const fadeImage = images[1].repeat(5 - delusionScore).split(" ")
 fadeImage.pop()
 const ImageArray = delusionImage.concat(fadeImage)
  useEffect(() => {
    if(FormattedResponse <=20){
        setDelusionScore(1)
      } else  if(FormattedResponse <=40){
    
        setDelusionScore(2)
      } else if(FormattedResponse <=60){
        setDelusionScore(3)
      } else if(FormattedResponse <=80){
        setDelusionScore(4)
      } else if (FormattedResponse <=100){
        setDelusionScore(5)
      } else{
        setDelusionScore(0)
      }
    
}, [response])

  return (
    <div>
    <h2 className="text-3xl font-bold md:text-4xl text-center my-2 mt-4 md:mt-8 md:my-4">
     Delusion Score
    </h2>
    <div className="bg-[#ffffff18] text-base md:text-lg shadow-xl space-y-4 rounded-xl p-4 md:p-8 pb-8 md:pb-16">
   <div className="flex justify-center  items-center">
    {
        ImageArray.map((image, index) => (
            <Image src={image} key={index} alt="score" width={50} height={50} className="w-[44px] h-[44px] md:w-[124px] md:h-[124px] " />
        ))}
    
   </div>
   <h2 className="text-3xl font-bold md:text-4xl text-center  leading-tight text-primary">
   {delusionScore}/5</h2>
   <h3 className="text-center text-primary leading-tight	text-2xl md:text-3xl">{messages[delusionScore]}</h3>
    </div></div>
  )
}

export default DelusionScore