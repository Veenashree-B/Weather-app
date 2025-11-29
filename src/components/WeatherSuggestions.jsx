import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import { useWeather } from '../hooks/useWeather';

export default function WeatherSuggestions() {
  const [city, setCity] = useState('');
  const [weather, fetchWeather, loading, error] = useWeather();

  const handleSearch = async (cityName) => {
    if (!cityName.trim()) {
      alert('Please enter a valid city name!');
      return;
    }
    setCity(cityName);
    fetchWeather(cityName);
  };

  return (
    <div className="weather-container">
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="loading">Fetching weather...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard city={city} weather={weather} />}
    </div>
  );
}
