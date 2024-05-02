"use client";

import React, { CSSProperties, useRef, useState } from "react";
import { Square } from "./Square";

type Props = {
  style?: CSSProperties;
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Board: React.FC<Props> = ({ style }) => {
  const [squares, setSquares] = useState<boolean[]>(Array(364).fill(false));
  const boardRef = useRef<HTMLDivElement>(null);

  const toggleSquare = (index: number) => {
    const newSquares = [...squares];
    newSquares[index] = !newSquares[index];
    setSquares(newSquares);
  };

  const scrollLeftHandler = () => {
    if (boardRef.current) {
      boardRef.current.scrollLeft -= 100;
    }
  };

  const scrollRightHandler = () => {
    if (boardRef.current) {
      boardRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="flex justify-center items-center" style={style}>
      <div
        className="relative w-full flex gap-1.5 p-5 items-center border-gray-300 border-2 rounded-lg"
        style={{ maxWidth: 1040 }}
      >
        <button
          className="w-5 h-20 px-3 bg-gray-100 rounded-sm flex items-center justify-center"
          onClick={scrollLeftHandler}
        >
          {"<"}
        </button>
        <div ref={boardRef} className="w-full overflow-x-auto">
          <div className="flex">
            {months.map((month) => (
              <div key={month} style={{ marginRight: 50 }}>
                {month}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap flex-col h-32">
            {squares.map((active, index) => (
              <Square
                key={index}
                active={active}
                onClick={() => toggleSquare(index)}
              />
            ))}
          </div>
        </div>
        <button
          className="w-5 h-20 px-3 bg-gray-100 rounded-sm flex items-center justify-center"
          onClick={scrollRightHandler}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
