import React from "react";

export function CreateGrid({ color, flattened }) {
  const squares = [];

  for (let i = 0; i < flattened.length; i++) {
    if (flattened[i] === 0) {
      squares.push(
        <div className="test" key={i} style={{ backgroundColor: color }}></div>
      );
    } else {
      squares.push(
        <div
          className="test"
          key={i}
          style={{ backgroundColor: "white" }}
        ></div>
      );
    }
  }
  return squares;
}

export default CreateGrid;
