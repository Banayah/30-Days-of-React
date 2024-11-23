import React, { useState } from "react";
import "./App.css";

function App() {
  // Im initializing the state of the count variable using useState hook starting at 0
  const [countNumber, setCountNumber] = useState(0);

  const handleClick = () => {
    // alert("Button Clicked");
    setCountNumber(countNumber + 1);
  };
  const handleClickDown = () => {
    // alert("Button Clicked");
    setCountNumber(countNumber - 1);
  };

  const handleReset = () => {
    setCountNumber(0);
  };

  return (
    <div className="App">
      <main className="App-main">
        <h1> This is a counter app</h1>
        <button className="App-button" onClick={handleClick}>
          Click to Count Up
        </button>
        <button className="App-button" onClick={handleClickDown}>
          Click to Count Down
        </button>
        <button className="App-button" onClick={handleReset}>
          Reset
        </button>
        <h1>Count : {countNumber}</h1>
      </main>
    </div>
  );
}

export default App;
