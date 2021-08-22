import React, { useState, useCallback } from "react";
import "./App.css";
import CreateGrid from "./createGrid";

function squareColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function makePattern() {
  let flattened = [];
  let blnk = [];
  for (var i = 0; i < 5; i++) {
    const appnd = [];
    for (var j = 0; j < 3; j++) {
      if (Math.random() < 0.5) {
        appnd.push(1);
      } else {
        appnd.push(0);
      }
    }
    appnd.push(appnd[1], appnd[0]);
    blnk.push(appnd);
    flattened = blnk.flat();
  }
  return flattened;
}

function App() {
  const [flattened, setFlattened] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const handler = () => {
    const pattern = makePattern();
    const newColor = squareColor();
    setFlattened(pattern);
    setColor(newColor);
  };
  return (
    <div className="container">
      <div className="title">Github Image Maker!</div>
      <div className="grid">
        <div className="gridspace">
          <CreateGrid flattened={flattened} color={color} />
        </div>
      </div>
      <div className="button">
        <button className="newImage" onClick={handler}>
          New Image!
        </button>
      </div>
      <div className="footer">Thank you for visiting!</div>
    </div>
  );
}

export default App;
