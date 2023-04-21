import React, { useState } from "react";
import ErrorAlert from "../../errors/ErrorAlert/ErrorAlert";

const Game = () => {
  const [gameMatrix, setGameMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState("x");
  const [error, setError] = useState(null);
  const makeMove = ({ target }) => {
    try {
      const col = target.getAttribute("data-col");
      const row = target.getAttribute("data-row");
      if (gameMatrix[row][col]) {
        throw new Error("This cell is already occupied");
      }
      setGameMatrix((curr) => {
        const temp = curr;
        temp[row][col] = turn;
        return temp;
      });
      setTurn((c) => (c === "x" ? "o" : "x"));
    } catch (err) {
      setError(err);
    }
  };

  const clearBoard = () => {
    setGameMatrix([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  };
  return (
    <>
      <ErrorAlert error={error} setError={setError} />
      <ul className="game-grid">
        {gameMatrix.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <li
              className="cell border hover:bg-neutral-100 duration-200 ease-out active:bg-neutral-200 text-8xl font-semibold uppercase"
              data-row={rowIndex}
              data-col={colIndex}
              onClick={makeMove}
              role="button"
            >
              {cell}
            </li>
          ))
        )}
      </ul>
      <div className="flex justify-center mt-3">
        <button
          className="px-3 py-2 bg-neutral-800 text-white w-24 rounded"
          onClick={clearBoard}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Game;
