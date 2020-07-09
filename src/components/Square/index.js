import React from "react";
import css from "./Square.module.css";

function Square({ color, chosenColor, setResult }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={css.sq}
      onClick={() => {
        console.log(color, chosenColor);
        if (chosenColor == color) {
          setResult("Winner, you nailed it!");
        } else {
          setResult("Wrong, look again");
        }
      }}
    ></div>
  );
}

export default Square;
