"use client";
import { Data } from "@/lib/data";
import { useSetAtom } from "jotai";
import {race} from "@/lib/data"
import { H_Two } from "../Utils/Typography";
const Race = () => {
  const setData = useSetAtom(Data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = race.indexOf(e.target.value);
    // console.log(value)
    setData((prev:object)=>({ ...prev, race: value }));
  };
  return (
    <div className="shadow-xl space-y-4 bg-secondary rounded-3xl p-4 md:p-8 pb-8 md:pb-16 h-[300px] md:h-[400px] w-full max-w-[800px]">
     <H_Two className="text-3xl font-bold md:text-4xl text-center mt-1 md:mt-2" text="
        Race
     "/>
     <br />
     <br />
      <div className="flex items-start justify-start space-y-2 flex-col">
        {race.map((item, index) => (
          <label
            htmlFor={index.toString()}
            key={index}
            className=" flex gap-2 items-center cursor-pointer"
          >
            <input
              type="radio"
              id={index.toString()}
              onChange={handleChange}
              name="race"
              defaultChecked={index === 0}
              value={item}
              className="w-4 md:w-6 h-4 md:h-6 cursor-pointer"
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Race;
