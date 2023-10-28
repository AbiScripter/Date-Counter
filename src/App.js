import React, { useState } from "react";
import ReactDOM from "react-dom/client";

//!UPDATED Challenge

function Challenge() {
  const [counter, setCounter] = useState(0);
  const [rangeVal, setRangeVal] = useState(1);

  function haa(count) {
    if (count == 0) {
      return "Today is ";
    } else if (count > 0) {
      return `${count} days from today is`;
    } else {
      return `${count} days ago was`;
    }
  }

  const currDate = new Date();
  console.log(currDate);
  currDate.setDate(currDate.getDate() + counter);
  console.log(currDate);

  // Function to update the date when the counter increases
  const handleCountPlus = () => {
    setCounter((c) => c + rangeVal);
  };

  const handleCountMinus = () => {
    setCounter((c) => c - rangeVal);
  };

  const handleReset = () => {
    setCounter(0);
    setRangeVal(1);
  };

  return (
    <div className="container">
      <h1>Date Calculator</h1>
      <div>
        <input
          type="range"
          value={rangeVal}
          step={1}
          max={10}
          onChange={(e) => setRangeVal(Number(e.target.value))}
        />
        <span>Steps : {rangeVal}</span>
      </div>

      <div>
        <button onClick={handleCountMinus}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>

      <div>
        <span>{haa(counter)}</span>
        <span>{currDate.toDateString()}</span>
      </div>

      {rangeVal == 1 && counter == 0 ? null : (
        <div>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<Challenge />);
