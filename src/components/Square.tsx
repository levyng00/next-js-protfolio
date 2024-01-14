import React from "react";
import { playa } from "./Board";

type Square = {
  value: playa;
  handleClick: () => void;
};

const Square = ({ value, handleClick }: Square) => {
  return (
    <div
      className="bg-slate-600 w-12 h-12 flex items-center justify-center border-2 border-white"
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default Square;
