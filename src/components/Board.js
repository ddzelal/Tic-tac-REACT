import React from "react";
import "./Board.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { checkWinner } from "../utils";

export default function Board({ xo, setXo }) {
  const [whoIsPlaying, setWhoIsPlaying] = useState(true);

  const clickSquare = (i, j) => {
    if (xo[i][j] === null) {
      if (whoIsPlaying === true) {
        const copyXO = [...xo];
        copyXO[i][j] = "X";
        setXo(copyXO);
        if (checkWinner(xo, "X")) {
            setXo([[null, null, null],
                    [null, null, null],
                    [null, null, null]])
            console.log('X is WINNER')
        }
      } else {
        const copyXO = [...xo];
        copyXO[i][j] = "O";
        setXo(copyXO);
        if (checkWinner(xo, "O")) {
            setXo([[null, null, null],
                    [null, null, null],
                    [null, null, null]])
            console.log('O is WINNER')
        }
      }
      setWhoIsPlaying(!whoIsPlaying);
    }
  };

  return (
    <div>
      {xo.map((row, i) => {
        return (
          <div key={uuidv4()} className="row">
            {row.map((square, j) => {
              return (
                <div
                  key={uuidv4()}
                  className="square"
                  onClick={() => clickSquare(i, j)}
                >
                  {square}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
