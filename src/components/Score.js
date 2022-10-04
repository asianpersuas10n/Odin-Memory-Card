import React from "react";

function Score(props) {
  return (
    <div className="score">
      <div>Score: {props.score}</div>
      <div>High Score: {props.highScore}</div>
    </div>
  );
}

export default Score;
