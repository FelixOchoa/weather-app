import React, { useContext } from "react";
import WeatherContext from "../../context/Weather/WeatherContext";
import Card from "./Card";

const Highlights = () => {
  const { selectedCity, tempUnit } = useContext(WeatherContext);

  return (
    <>
      {selectedCity && (
        <div className="grid grid-cols-3 gap-4 mt-10 place-items-center ">
          <Card
            title="Wind Status"
            data={selectedCity?.current.wind_mph}
            type="mph"
            icon="wind"
          />
          <Card
            title="Humidity"
            data={selectedCity?.current.humidity}
            type="%"
            icon="humidity"
          />
          <Card
            title="Visibility"
            data={selectedCity?.current.vis_miles}
            type="miles"
            icon="visibility"
          />
          <Card
            title="Air Pressure"
            data={selectedCity?.current.pressure_mb}
            type="mb"
            icon="pressure"
          />
          <Card
            title="Feels Like"
            data={
              tempUnit === "c"
                ? selectedCity?.current.feelslike_c
                : selectedCity?.current.feelslike_f
            }
            type={tempUnit === "c" ? "°C" : "°F"}
            icon="temperature"
          />
        </div>
      )}
      {!selectedCity && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-gray-400">No Data</h1>
          <h2 className="text-lg font-medium text-gray-400">
            Please select a city
          </h2>
        </div>
      )}
    </>
  );
};

export default Highlights;
