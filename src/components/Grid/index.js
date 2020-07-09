import React from "react";
import Square from "../Square";
import css from "./Grid.module.css";

function Grid({ colors, chosenColor, setResult }) {
  console.log("color at grid level: " + chosenColor);
  return (
    <div className={css.gridContainer}>
      {colors.map((item, i) => {
        return (
          <Square
            color={item}
            chosenColor={chosenColor}
            setResult={setResult}
          />
        );
      })}
    </div>
  );
}

export default Grid;
