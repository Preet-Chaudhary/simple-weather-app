# 🌦️ React Weather App

A simple React application that shows real-time weather based on user-input location using the [OpenWeatherMap API](https://openweathermap.org/api). Built with **React + Axios + Tailwind CSS**.

---

## 🚀 Features

- 🔍 Search weather by city name  
- 🌡️ Displays temperature in Celsius  
- ☁️ Shows weather icon and description (e.g., "clear sky", "light rain")  
- ⚙️ Uses OpenWeatherMap's Geocoding API to fetch coordinates  
- 🎨 Styled using Tailwind CSS  

---

### 🖼️ Preview

![Weather App Preview](./preview.png) <!-- Replace with your actual screenshot -->

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app
```bash

 Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variable
Create a .env file in the root directory and add your OpenWeatherMap API key:

env
Copy
Edit
VITE_WEATHER_API_KEY=your_api_key_here
🔑 You can get your API key by signing up at https://openweathermap.org/api

4. Run the app
bash
Copy
Edit
npm run dev
Then open http://localhost:5173 in your browser.

📁 Project Structure
css
Copy
Edit
📦 weather-app/
├── public/
│   └── preview.png
├── src/
│   ├── components/
│   │   └── Weather.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
✨ Tech Stack
React – UI Library

Axios – For API Calls

Tailwind CSS – Styling

Vite – Build Tool

🔥 Example Weather Icon
This app uses OpenWeatherMap icons like:

html
Copy
Edit
<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon" />
🧠 Concepts Used
React Hooks: useState, useEffect

Async/Await for API requests

Conditional rendering

Environment variables with Vite

Component-based architecture

📜 License
This project is licensed under the MIT License.

Made with ❤️ by Preet