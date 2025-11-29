export async function getWeather(city) {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );
  const geoData = await geoRes.json();
  if (!geoData.results || geoData.results.length === 0) {
    throw new Error('City not found');
  }

  const { latitude, longitude } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=uv_index_max,sunrise,sunset,precipitation_probability_mean,apparent_temperature_max&timezone=auto`
  );
  const weatherData = await weatherRes.json();

  const current = weatherData.current_weather;
  const daily = weatherData.daily;

  const sunrise = new Date(daily.sunrise[0]).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const sunset = new Date(daily.sunset[0]).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const weatherDescriptions = {
    0: { text: 'Clear Sky', icon: '☀️' },
    1: { text: 'Mostly Clear', icon: '🌤️' },
    2: { text: 'Partly Cloudy', icon: '⛅' },
    3: { text: 'Overcast', icon: '☁️' },
    45: { text: 'Foggy', icon: '🌫️' },
    48: { text: 'Rime Fog', icon: '🌁' },
    51: { text: 'Light Drizzle', icon: '🌦️' },
    61: { text: 'Light Rain', icon: '🌧️' },
    71: { text: 'Light Snow', icon: '❄️' },
    95: { text: 'Thunderstorm', icon: '⛈️' },
  };

  const weather = weatherDescriptions[current.weathercode] || {
    text: 'Unknown',
    icon: '❓',
  };

  return {
    temperature: current.temperature,
    description: weather.text,
    icon: weather.icon,
    uvIndex: daily.uv_index_max[0],
    sunrise,
    sunset,
    precipitation: daily.precipitation_probability_mean[0],
    feelsLike: daily.apparent_temperature_max[0],
  };
}
