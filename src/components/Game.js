import React from "react";
import Randomizer from "./randomizer/Randomizer";

function Game(props) {
  return (
    <div className="game">
      <Randomizer
        setScore={props.setScore}
        score={props.score}
        highScore={props.highScore}
        setHighScore={props.setHighScore}
      />
    </div>
  );
}

export default Game;
