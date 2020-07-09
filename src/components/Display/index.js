import React from "react";
import css from "./Display.module.css";

function Display({ chosenColor, result }) {
  return (
    <div className={css.displayHeader}>
      <h1>The Amazing RGB Color Game!!</h1>
      <h2>Pick the color that matches: {chosenColor}</h2>
      <h2>{result}</h2>
    </div>
  );
}

export default Display;
