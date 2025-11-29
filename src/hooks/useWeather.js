import { useState } from 'react';
import { getWeather } from '../utils/fetchWeather';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError('City not found. Try another spelling or nearby place.');
      alert('Invalid city name! Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return [weather, fetchWeather, loading, error];
}
