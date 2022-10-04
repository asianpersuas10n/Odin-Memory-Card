import "./styles.css";
import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    const tempScore = score;
    const tempBool = bool;

    if (tempScore === 16) {
      setBool(true);
    } else if (tempBool === true && tempScore < 16) {
      setBool(false);
    }
  }, [score, bool]);

  return (
    <div className="app">
      <Score score={score} highScore={highScore} />
      {bool && <div className="win">Thats all Sixteen!!!</div>}
      <Game
        setScore={setScore}
        score={score}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
