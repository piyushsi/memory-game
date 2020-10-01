import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

const initialData = [
  { id: 0, text: "A" },
  { id: 1, text: "B" },
  { id: 2, text: "C" },
  { id: 3, text: "D" },
  { id: 4, text: "E" },
  { id: 5, text: "F" },
  { id: 6, text: "G" },
  { id: 7, text: "H" },
  { id: 0, text: "A" },
  { id: 1, text: "B" },
  { id: 2, text: "C" },
  { id: 3, text: "D" },
  { id: 4, text: "E" },
  { id: 5, text: "F" },
  { id: 6, text: "G" },
  { id: 7, text: "H" },
];

function App() {
  const [data, setData] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [current, setCurrent] = useState(null);
  const [clickIndex, setClickIndex] = useState(null);
  const [matchId, setMatchId] = useState([]);
  const [move, setMove] = useState(0);

  const handleClick = (i, id) => {
    setMove(move + 1);
    setClickIndex(i);
    setActiveId(id);
    if (activeId == id && clickIndex != i) {
      matchId.push(i);
      matchId.push(clickIndex);
      setMatchId(matchId);
    } else if (activeId == id && clickIndex == i) {
      setClickIndex(null);
      setActiveId(null);
    }
  };
  useEffect(() => {
    setData(shuffle(initialData));
  }, []);
  return (
    <div className="parent">
      <div className="App">
        {data &&
          data.map((a, i) => {
            return (
              <div className="small" onClick={() => handleClick(i, a.id)}>
                {clickIndex == i || matchId.includes(i) ? a.text : ""}
              </div>
            );
          })}
        <br />
        No. of Moves : {Math.floor(move / 2)}
      </div>
    </div>
  );
}

export default App;
