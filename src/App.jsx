import React from 'react';
import WeatherSuggestions from './components/WeatherSuggestions';

export default function App() {
  return (
    <div className="app">
      <h1 className="title"> Weather Tracker</h1>
      <WeatherSuggestions />
    </div>
  );
}
