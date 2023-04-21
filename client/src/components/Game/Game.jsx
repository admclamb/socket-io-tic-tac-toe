import React, { useEffect, useState } from "react";
import ErrorAlert from "../../errors/ErrorAlert/ErrorAlert";
import { getWinner } from "../../utils/getWinner";
const Game = () => {
  const [gameMatrix, setGameMatrix] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState(null);
  const [error, setError] = useState(null);
  const makeMove = ({ target }) => {
    try {
      setError(null);
      const col = target.getAttribute("data-col");
      const row = target.getAttribute("data-row");
      if (winner) {
        throw new Error("The game is already over");
      }
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

  useEffect(() => {
    console.log(gameMatrix);
    const gameWinner = getWinner(gameMatrix);
    console.log(gameWinner);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  }, [JSON.stringify(gameMatrix)]);

  const clearBoard = () => {
    setGameMatrix([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
    setError(null);
    setTurn("x");
  };
  console.log(winner !== null);
  return (
    <>
      <ErrorAlert error={error} setError={setError} />
      <div className="mb-3">
        {winner && (
          <p className="text-center text-xl">
            Game Winner: <span className="font-bold">{winner}</span>
          </p>
        )}
      </div>
      <ul
        className="game-grid disabled:cursor-not-allowed"
        disabled={`${winner !== null}`}
      >
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
