import "./App.css";
import React, { useState, useEffect } from "react";

const getCurrentTime = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

function Title({ currentTime }) {
  return (
    <>
      {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
    </>
  );
}

function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    document.title = `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`;
    const timerId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timerId);
  });
  return (
    <div className="App">
      <Title currentTime={currentTime} />
    </div>
  );
}

export default App;
