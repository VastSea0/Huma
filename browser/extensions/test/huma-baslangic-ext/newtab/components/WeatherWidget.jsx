import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // pass
        },
        (err) => {
          setError("Konum alınamadı.");
        }
      );
    } else {
      setError("Tarayıcı konum servisini desteklemiyor.");
    }
  }, []);

  useEffect(() => {
    if (location) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`
          );
          const data = await response.json();
          setWeather(data);
        } catch (err) {
          setError("Hava durumu verileri alınamadı.");
        }
      };

      fetchWeather();
    } 
  }, [location]);

  if (error) {
    return <div className="widget weather"><p>{error}</p></div>;
  }

  if (!weather) {
    return <div className="widget weather"><p>Yükleniyor...</p></div>;
  }

  return (
    <div className="widget weather">
      <h2>Mevcut Konum</h2>
      <p>{`${weather.current.temp}°C`}</p>
      <div className="forecast">
        <p>Bugün: {`${weather.daily[0].temp.min}°C / ${weather.daily[0].temp.max}°C`}</p>
        <p>Yarın: {`${weather.daily[1].temp.min}°C / ${weather.daily[1].temp.max}°C`}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;