"use client";
import { APIResponse,Data } from "@/lib/data";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProbabilityHexGrid() {
  const [totalDots] = useState(1000); // Default grid size
  const probability = useAtomValue(APIResponse); // Default probability %
  const data = useAtomValue(Data); // Default probability %
  const [highlightedIndexes, setHighlightedIndexes] = useState<number[]>([]); // Empty initially

  // Ensure probability is defined
  const totalProbability = probability?.total_probability ?? 0;
const probabilitytoShow = (probability.total_probability *100).toFixed(1)
  // Calculate how many dots to highlight based on the total probability
  const highlightedCount = Math.round((totalProbability * totalDots));

  // Generate random indexes for highlighted dots
  const getHighlightedIndexes = () => {
    const indexes = new Set<number>();
    while (indexes.size < highlightedCount) {
      indexes.add(Math.floor(Math.random() * totalDots)); // Random index within totalDots
    }
    return Array.from(indexes);
  };

  useEffect(() => {
    setHighlightedIndexes(getHighlightedIndexes());
  }, [totalProbability, totalDots]);

  // Set the number of rows and columns
  const rows = 25;
  const columns = 40;

  // Calculate the total number of circles and adjust positions
  const circleGap = 20; // Adjust this for more or less space between circles
  const radius = 8;

  const getCirclePositions = () => {
    let positions = [];
    
    for (let i = 0; i < totalDots; i++) {
      const row = Math.floor(i / columns); // Determine row
      const col = i % columns; // Determine column

      // For even rows, offset by circleGap (staggered effect)
      const adjustedCol = row % 2 === 0 ? col : col + 0.5; // Half-step shift for even rows
      
      const cx = adjustedCol * circleGap;
      const cy = row * circleGap;

      positions.push({ cx, cy, r: radius });
    }

    return positions;
  };

  const circlePositions = getCirclePositions();
  
  // Calculate grid size based on rows and columns
  const gridWidth = columns * circleGap;
  const gridHeight = rows * circleGap;
  const viewBoxX = -(gridWidth / 8); // Shift left by half of grid width
  const viewBoxY = -(gridHeight / 50); // Shift up by half of grid height
  
  return (
    <>
      <h2 className="text-3xl font-bold md:text-4xl text-center my-2 md:my-4">
        Probability
      </h2>
      <div className="bg-[#ffffff18] text-base  md:text-lg shadow-xl space-y-4 rounded-xl p-4 md:p-8 pb-8 md:pb-16">
        <svg
          viewBox={` ${viewBoxX} ${viewBoxY} ${Math.max(gridWidth, 1000)} ${Math.max(gridHeight, 300)}`} // Dynamically set viewBox
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          {circlePositions.map((position, index) => (
            <circle
              key={index}
              fill={highlightedIndexes.includes(index) ? "#ffffff" : "#ffffff18"} 
              cx={position.cx}
              cy={position.cy}
              r={position.r}
            />
          ))}
        </svg>
        <p>According to <Link className="font-bold text-primary" href="/stats">statistical data</Link> , the probability a guy of the U.S. male population ages <span className="font-bold">{data.min_age}</span> to <span className="font-bold">{data.max_age}</span> meets your standards is</p>
        <h2 className="text-3xl font-bold md:text-4xl text-center text-primary my-2 md:my-4">
       { probabilitytoShow}%
      </h2>
      </div>
    </>
  );
}
