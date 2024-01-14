import React, { useState } from "react";
import Square from "./Square";

export type playa = "X" | "O";

const Board = () => {
  const [square, setSquares] = useState<playa[]>(Array(9).fill(null));
  const [isXPlaya, SetXIsPlaya] = useState(true);
  const winner = (square: playa[]) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c])
        return square[a];
    }
  };
  const handleClick = (i: number) => {
    const newSquare = square.slice();
    if (square[i] || winner(square)) return;
    if (isXPlaya) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }
    setSquares(newSquare);
    SetXIsPlaya(!isXPlaya);
    console.log(square);
  };
  const win = winner(square);
  let status;
  if (win) {
    status = win + "is the winner";
  } else {
    status = "next player" + (isXPlaya ? "X" : "O");
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {status}
      <div className="grid grid-cols-3 ">
        {square.map((su, i) => {
          return (
            <Square key={i} value={su} handleClick={() => handleClick(i)} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
