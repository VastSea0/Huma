import React, { useEffect, useState } from 'react';

const Clock = ({ username, clockSize }) => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      setTime(currentTime);
      const currentHour = currentTime.getHours();
      if (currentHour >= 6 && currentHour < 12) {
        setGreeting('Günaydın');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Tünaydın');
      } else {
        setGreeting('İyi akşamlar');
      }
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h1 style={{ fontSize: `${clockSize}px` }}>
        {time.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </h1>
      <p>{greeting}, {username}</p>
    </div>
  );
};

export default Clock;
