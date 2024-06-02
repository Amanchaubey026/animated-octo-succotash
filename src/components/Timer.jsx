import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(25 * 3600); 

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) clearInterval(timer);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  return (
    <div>
      <h2> {formatTime(seconds)}</h2>
    </div>
  );
};

export default Timer;
