import React, { useState } from "react";

const Game = () => {
  const [gameMatrix, setGameMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState("x");
  const makeMove = ({ target }) => {
    const col = target.getAttribute("data-col");
    const row = target.getAttribute("data-row");
    setGameMatrix((curr) => {
      const temp = curr;
      temp[row][col] = turn;
      return temp;
    });
    setTurn((c) => (c === "x" ? "o" : "x"));
  };
  return (
    <ul className="game-grid">
      {gameMatrix.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <li
            className="cell border hover:bg-neutral-100 duration-200 ease-out active:bg-neutral-200 text-8xl font-semibold uppercase"
            data-row={rowIndex}
            data-col={colIndex}
            onClick={makeMove}
          >
            {cell}
          </li>
        ))
      )}
    </ul>
  );
};

export default Game;
