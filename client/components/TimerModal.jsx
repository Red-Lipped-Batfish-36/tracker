import React from 'react';
import React, { useState, useEffect } from 'react';

const TimerModal = (props) => {
  const {
    currentProjectName,
    currentCategoryName,
    startTimer,
    endTimer,
  } = props;
  const [minutes, setMinuts] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (startTimer == !0) {
      setIsActive(true);
      interval = setInterval(() => {
        if (seconds < 61) {
          setSeconds((seconds) => {
            seconds + 1;
          });
        } else {
          setMinutes((minutes) => {
            minutes + 1;
          });
          setSeconds(0);
        }
      }, 1000);
    } else if (startTimer === 0 && seconds !== 0) {
      clearInterval(interval);
      setMinutes(0);
      setSeconds(0);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  return (
    <div id="timer">
      <h2>You are working on</h2>
      <h2 id="intrack">
        {currentCategoryName} {currentProjectName} for
      </h2>
      <div id="clock">
        {minutes}m {seconds}s
      </div>
    </div>
  );
};

export default TimerModal;
