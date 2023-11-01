import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function TimeCoponent({ mSec }) {
  return (
    // mm:ss:ms の形式で表示する
    <div>
      {Math.floor(mSec / 60000)}:
      {Math.floor((mSec % 60000) / 1000)
        .toString()
        .padStart(2, "0")}
      :
      {Math.floor((mSec % 1000) / 10)
        .toString()
        .padStart(2, "0")}
    </div>
  );
}

function Timer() {
  const [mSec, setMSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setMSec((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  return (
    <div>
      <TimeCoponent mSec={mSec} />
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          setMSec(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
