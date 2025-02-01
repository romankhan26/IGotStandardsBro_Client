"use client";
import { APIResponse, Data } from "@/lib/data";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { useState, useEffect } from "react";
import { race } from "@/lib/data";

export default function Probability() {
  const [totalDots] = useState(1000);
  const probability = useAtomValue(APIResponse);
  const data = useAtomValue(Data);
  const [highlightedIndexes, setHighlightedIndexes] = useState<number[]>([]);
  const totalProbability = probability?.total_probability ?? 0;
  const probabilitytoShow =
    probability.total_probability * 100 == 0
      ? (probability.total_probability * 100).toFixed(2)
      : probability.total_probability === 0
      ? probability.total_probability.toFixed(4)
      : (probability.total_probability * 100).toFixed(2);
   const highlightedCount = Math.round(totalProbability * totalDots);
   const raceProbability = probability.total_probability_in_race === 0 ?probability.total_probability_in_race?.toFixed(4): probability.total_probability_in_race?.toFixed(2)
console.log(raceProbability)
  useEffect(() => {
    const getHighlightedIndexes = () => {
      const indexes = new Set<number>();
      while (indexes.size < highlightedCount) {
        indexes.add(Math.floor(Math.random() * totalDots));
      }
      return Array.from(indexes);
    };
  
    setHighlightedIndexes(getHighlightedIndexes());
  }, [totalProbability, totalDots,highlightedCount]);

  const rows = 25;
  const columns = 40;

  const circleGap = 20;
  const radius = 8;

  const getCirclePositions = () => {
    const positions = [];

    for (let i = 0; i < totalDots; i++) {
      const row = Math.floor(i / columns);
      const col = i % columns;

      const adjustedCol = row % 2 === 0 ? col : col + 0.5;

      const cx = adjustedCol * circleGap;
      const cy = row * circleGap;

      positions.push({ cx, cy, r: radius });
    }

    return positions;
  };

  const circlePositions = getCirclePositions();

  const gridWidth = columns * circleGap;
  const gridHeight = rows * circleGap;
  const viewBoxX = -(gridWidth / 8);
  const viewBoxY = -(gridHeight / 50);

  return (
    <>
      <h2 className="text-3xl font-bold md:text-4xl mt-4 md:mt-8 text-center my-2 md:my-4">
        Probability
      </h2>
      <div className="bg-secondary text-base text-center md:text-lg shadow-xl space-y-4 rounded-xl p-4 md:p-8 pb-8 md:pb-16">
        <svg
          viewBox={` ${viewBoxX} ${viewBoxY} ${Math.max(
            gridWidth,
            1000
          )} ${Math.max(gridHeight, 300)}`}
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          {circlePositions.map((position, index) => (
            <circle
              key={index}
              fill={
                highlightedIndexes.includes(index) ? "#ffffff" : "#ffffff18"
              }
              cx={position.cx}
              cy={position.cy}
              r={position.r}
            />
          ))}
        </svg>
        <p>
          According to{" "}
          <Link className="font-bold text-primary" href="/stats">
            statistical data
          </Link>{" "}
          , the probability a guy of the U.S. male population ages{" "}
          <span className="font-bold">{data.min_age}</span> to{" "}
          <span className="font-bold">{data.max_age}</span> meets your standards
          is
        </p>
        <h2 className="text-3xl font-bold md:text-4xl  text-primary my-2 md:my-4">
          {probabilitytoShow}%
        </h2>
        {data.race != 0 && (
          <p>
            that is{" "}
            <span className="text-primary">
              {raceProbability}%
            </span>{" "}
            of all{" "}
            <span className="font-bold lowercase">{race[data.race]}</span> men
            in that age range
          </p>
        )}
      </div>
    </>
  );
}
