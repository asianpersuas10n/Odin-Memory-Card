import React, { useState } from "react";

function Randomizer(props) {
  const arr = [
    { data: "Germany", id: 1 },
    { data: "France", id: 2 },
    { data: "U.K.", id: 3 },
    { data: "Spain", id: 4 },
    { data: "Poland", id: 5 },
    { data: "Italy", id: 6 },
    { data: "Hungary", id: 7 },
    { data: "Austria", id: 8 },
    { data: "Denmark", id: 9 },
    { data: "Netherlands", id: 10 },
    { data: "Norway", id: 11 },
    { data: "Sweden", id: 12 },
    { data: "Finland", id: 13 },
    { data: "Belgium", id: 14 },
    { data: "Portugal", id: 15 },
    { data: "Ukraine", id: 16 }
  ];
  const [newArr, setNewArr] = useState([...arr]);
  const [alreadyClicked, setAlreadyClicked] = useState([]);

  const checker = (id) => {
    const clicked = alreadyClicked;

    if (clicked.find((elem) => elem === id)) {
      setAlreadyClicked([]);
      props.setScore(0);
      return;
    }

    setAlreadyClicked((current) => [...current, id]);
    props.setScore(props.score + 1);
    highScorechecker();
  };

  const highScorechecker = () => {
    const tempScore = props.score;
    const tempHighScore = props.highScore;

    if (tempScore >= tempHighScore) {
      props.setHighScore(props.score + 1);
    }
  };

  const newSet = (id) => {
    checker(id);
    setNewArr([]);

    let tempArr = [];
    let rand;

    while (tempArr.length !== 16) {
      rand = Math.floor(Math.random() * 16);
      if (!tempArr.find((e) => e.data === arr[rand].data)) {
        tempArr.push(arr[rand]);
      }
    }
    setNewArr(tempArr);
  };

  return (
    <div id="cardContainer">
      {newArr.map((x) => (
        <div className="cards" key={x.id} onClick={() => newSet(x.id)}>
          {x.data}
        </div>
      ))}
    </div>
  );
}

export default Randomizer;
