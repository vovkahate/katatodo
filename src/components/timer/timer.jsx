import React, { useState, useEffect } from 'react';

const Timer = ({ id, timerButton, seconds, handleTimerButton }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  let classTimerButton = !timerButton ? 'icon icon-play' : 'icon icon-pause';

  return (
    <span onClick={() => handleTimerButton(id)}>
      <button className={classTimerButton}></button>
      {formatTime(seconds)}
    </span>
  );
};

export default Timer;
