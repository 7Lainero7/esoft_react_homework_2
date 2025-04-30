import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const minutes = time.getMinutes();
  const isDivisibleBy5 = minutes % 5 === 0;

  return (
    <div>
      <p>Текущее время: {formatTime(time)}</p>
      <p>Текущая дата: {formatDate(time)}</p>
      {isDivisibleBy5 && <p>Время делится на 5</p>}
    </div>
  );
}

export default Clock;