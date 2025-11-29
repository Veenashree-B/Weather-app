import React from 'react';

export default function WeatherCard({ city, weather }) {
  const {
    temperature,
    description,
    icon,
    uvIndex,
    sunrise,
    sunset,
    precipitation,
    feelsLike,
  } = weather;

  let tip = '';
  if (temperature > 35) tip = '🥵 Stay hydrated and avoid peak sun hours.';
  else if (temperature > 25) tip = '💪 Ideal for a morning or evening run!';
  else if (temperature > 15) tip = '🏋️ Great day for a workout session!';
  else tip = '❄️ Bundle up before heading outdoors!';

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{city}</h2>
        <span className="icon">{icon}</span>
      </div>

      <div className="main-temp">
        <p className="temp">{temperature}°C</p>
        <p className="desc">{description}</p>
      </div>

      <div className="extra-grid">
        <div className="info-item">
          <span>Feels Like</span>
          <strong>{feelsLike}°C</strong>
        </div>
        <div className="info-item">
          <span>UV Index</span>
          <strong>{uvIndex}</strong>
        </div>
        <div className="info-item">
          <span>Precipitation</span>
          <strong>{precipitation}%</strong>
        </div>
        <div className="info-item">
          <span>Sunrise</span>
          <strong>{sunrise}</strong>
        </div>
        <div className="info-item">
          <span>Sunset</span>
          <strong>{sunset}</strong>
        </div>
      </div>

      <p className="tip">{tip}</p>
    </div>
  );
}
