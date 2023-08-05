import React, { useState, useEffect } from 'react';

const Timer = ({ id, timer, timerButtonHandler, timerButton, done }) => {
  const [elapsedTime, setElapsedTime] = useState(timer);
  const [timerRunning, setTimerRunning] = useState(timerButton);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerRunning]);

  const handleTimerClick = () => {
    if (!timerRunning) {
      setElapsedTime(timer);
      setTimerRunning(true);
      timerButtonHandler(id, elapsedTime);
    } else {
      setTimerRunning(false);
      timerButtonHandler(id, elapsedTime);
    }
  };

  let classTimerButton = !timerButton ? 'icon icon-play' : 'icon icon-pause';

  return (
    <span onClick={handleTimerClick}>
      <button className={classTimerButton}></button>
      {Math.floor(elapsedTime / 60)}:{String(elapsedTime % 60).padStart(2, '0')}
    </span>
  );
};

export default Timer;
