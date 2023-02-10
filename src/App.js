import React from "react";
import WeatherState from "./context/Weather/WeatherState";
import Weather from "./components/Weather";
const App = () => {
  return (
    <WeatherState>
      <div className="p-12 bg-gray-400/50 min-h-screen max-w-full">
        <Weather />
      </div>
    </WeatherState>
  );
};

export default App;
