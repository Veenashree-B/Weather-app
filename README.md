🌤️ Weather Forecast Application

A React + Vite-based Weather Forecast Web App that delivers real-time, accurate weather information for any city around the world.
Built with clean architecture, modular components, and a professional UI, this project demonstrates end-to-end development skills in React, API integration, and data visualization.

📘 Overview

The Weather Forecast App provides users with live weather updates including temperature, humidity, wind speed, UV index, precipitation probability, and sunrise/sunset timings.
It integrates with the OpenWeatherMap API to fetch reliable weather data and is optimized using Vite for fast performance and seamless user experience.

This project highlights proficiency in React.js, REST API handling, environment configuration, and responsive UI design — suitable for professional presentation and portfolio inclusion.

🧠 Features

🌎 Real-time city-based weather search

🌤️ Displays:

Temperature & weather condition

Feels like temperature

Humidity & wind speed

UV Index & precipitation probability

Sunrise & sunset timings

⚠️ Error alert for invalid input

⚡ Optimized architecture (App.jsx only handles imports & structure)

📱 Responsive and professional UI

🧩 Easy debugging and modular design

🛠️ Tech Stack
Category	Technology
Frontend	React.js (Vite)
Styling	CSS
API	OpenWeatherMap API
Icons	React Icons / Lucide React
Deployment	Vercel / Netlify / GitHub Pages
⚙️ Installation and Setup

Follow these steps to run the project locally.

1️⃣ Prerequisites

Node.js (v16 or above)

npm or yarn

OpenWeatherMap API key (Get API Key)

2️⃣ Clone the Repository
https://github.com/Veenashree-B/Weather-Now.git
cd weather-forecast-app

3️⃣ Install Dependencies
npm install

4️⃣ Add Environment Variables

Create a .env file in the root directory:

VITE_API_KEY=your_openweather_api_key


⚠️ Important: Do not expose your API key publicly on GitHub.

5️⃣ Start the Application
npm run dev

Once compiled, open the local server (usually http://localhost:5173) in your browser.

6️⃣ Build for Production

To generate an optimized production build:

npm run build

Preview the build locally:

npm run preview

💡 How It Works

User enters a city name into the input field.

The app triggers a request to the OpenWeatherMap API using the provided API key.

On successful response, weather data is displayed dynamically, showing:

Current temperature and weather status

Feels like temperature

UV index, precipitation, and humidity

Wind speed and sunrise/sunset times

If the input is invalid or data isn’t found, the user receives an alert message to correct it.

🧩 App Structure
src/
│
├── components/
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── ForecastDetails.jsx
│
├── services/
│   └── weatherService.js
│
├── App.jsx
└── main.jsx


App.jsx serves as the central point that imports components and maintains structure for better performance and debugging.

Logic for fetching and rendering data is modularized into respective components and service files.

🌐 Deployment

You can deploy the app using any modern hosting platform:

Vercel
Netlify

GitHub Pages (via production build)

📸 Screenshots 
https://drive.google.com/file/d/1aTaxkWh0k9JZbyaMPut_Ix2GIC9FkHV8/view?usp=sharing

🧑‍💻 Author

Developer: Veenashree B
Role: Data Science Engineer 
Focus Areas: Cloud Integration, API Development, Data Visualization

📧 For inquiries or collaborations: [blveenashree@gmail.com]
🔗 Portfolio: [(https://github.com/Veenashree-B)]
