import React, { useState } from 'react';

const popularCities = [
  'Bengaluru', 'Delhi', 'Mumbai', 'Chennai', 'Hyderabad',
  'New York', 'London', 'Tokyo', 'Sydney', 'Paris'
];

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleInput = (e) => {
    const val = e.target.value;
    setInput(val);

    if (val.length > 1) {
      const suggestions = popularCities.filter((city) =>
        city.toLowerCase().startsWith(val.toLowerCase())
      );
      setFiltered(suggestions);
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (city) => {
    setInput(city);
    setFiltered([]);
    onSearch(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a city name!');
      return;
    }
    onSearch(input);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter city name..."
        />
        <button type="submit">Search</button>
      </form>
      {filtered.length > 0 && (
        <ul className="suggestions">
          {filtered.map((city, i) => (
            <li key={i} onClick={() => handleSelect(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
