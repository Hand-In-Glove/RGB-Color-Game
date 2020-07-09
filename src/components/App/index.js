import React, { useState } from "react";
import "./App.css";
import Grid from "../Grid";
import Display from "../Display";
import PaintIcon from "../PaintIcon";

function generateColors() {
  let rnd1 = Math.floor(Math.random() * 255);
  let rnd2 = Math.floor(Math.random() * 255);
  let rnd3 = Math.floor(Math.random() * 255);
  return `rgb(${rnd1}, ${rnd2}, ${rnd3})`;
}

function App() {
  const [colors, setColors] = useState([]);
  const [chosenColor, setChosenColor] = useState("");
  const [result, setResult] = useState("");

  function populateArray() {
    let colorsArr = [];
    for (let i = 0; i < 9; i++) {
      colorsArr.push(generateColors());
    }
    setColors(colorsArr);
    setChosenColor(colorsArr[Math.floor(Math.random() * 9)]);
  }

  return (
    <div className="App">
      <Display chosenColor={chosenColor} result={result} />
      {!colors.length ? (
        <PaintIcon />
      ) : (
        <Grid colors={colors} chosenColor={chosenColor} setResult={setResult} />
      )}
      <button
        style={{ marginTop: "0.5rem" }}
        onClick={() => {
          populateArray();
          setResult("");
        }}
      >
        Get Colors
      </button>
    </div>
  );
}

export default App;
