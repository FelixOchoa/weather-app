import React, { useContext, useState } from "react";
import WeatherContext from "../context/Weather/WeatherContext";
import day from "../images/day.jpg";
import lupa from "../images/lupa.png";
import moment from "moment";

const SearchCity = () => {
  const { cities, searchCity, selectedCity, setSelectedCity, tempUnit } =
    useContext(WeatherContext);

  const [onText, setOnText] = useState(false);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setOnText(false);
  };

  return (
    <div className="w-[344px] flex flex-col px-8 py-10">
      <div className="flex flex-row relative items-center gap-3 bg-gray-50 rounded-lg shadow-sm">
        <img
          src={lupa}
          className="w-auto h-5 object-contain"
          alt="magnifiying glass"
        />
        <input
          type="text"
          className="w-full outline-none rounded-lg placeholder:text-gray-900 bg-gray-50 text-sm py-2"
          placeholder="Search for places ..."
          onChange={(e) => {
            searchCity(e.target.value);
          }}
          onClickCapture={() => setOnText(true)}
        />
      </div>
      {cities && cities.length > 0 && onText && (
        <div className="bg-gray-50 z-auto absolute w-auto rounded-b-3xl p-4 cursor-pointer shadow-md top-[130px]">
          {cities.map((city) => (
            <div
              key={city.id}
              className="py-[2px] flex flex-row justify-between items-center hover:bg-gray-200 hover:rounded-3xl hover:px-1 hover:transition-all hover:duration-200"
              onClick={() => handleSelectCity(city)}
            >
              <div className="flex flex-row items-center">
                <p className="text-xs">{city.name}</p>
                <p className="text-gray-500 ml-2 text-[10px]">
                  - {city.region}
                </p>
                <p className="text-gray-500 text-[10px] ml-2">
                  {" "}
                  - {city.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedCity && (
        <div className="mt-10 flex flex-col items-start">
          <img
            src={selectedCity.current.condition.icon}
            className="w-auto h-[130px] self-center"
            alt="weather icon"
          />
          {tempUnit === "c" ? (
            <p className="text-[85px] font-thin m-0 flex flex-row items-center">
              {selectedCity.current.temp_c}{" "}
              <span className="text-3xl font-extralight"> °C </span>
            </p>
          ) : (
            <p className="text-[85px] font-thin m-0 flex flex-row items-center">
              {selectedCity.current.temp_f}{" "}
              <span className="text-3xl font-extralight"> °F </span>
            </p>
          )}
          <p className="text-[20px] font-medium">
            {moment(selectedCity.location.localtime).format("dddd, ")}
            <span className="text-gray-400">
              {moment(selectedCity.location.localtime).format("h:mm:ss a")}
            </span>
          </p>

          <p className="text-sm">
            Condition: {selectedCity.current.condition.text}
          </p>

          <div className="mt-8 border-t-2 w-full">
            <div className="flex flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">Wind Now</p>
              <p className="text-gray-500 text-sm">
                {selectedCity.current.wind_mph} mph
              </p>
            </div>
          </div>
          <div className="mt-8 border-t-2 w-full">
            <div className="flex flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">Humidity</p>
              <p className="text-gray-500 text-sm">
                {selectedCity.current.humidity} %
              </p>
            </div>
          </div>
          <div className="mt-10 w-full relative drop-shadow-lg">
            <img
              src={day}
              className="rounded-2xl h-[120px] w-full object-cover"
              alt="day"
            />
            <p className="absolute font-bold text-sm text-white top-[50px] text-center w-[200px] left-[10px] drop-shadow-lg">
              {selectedCity.location.name}, {selectedCity.location.region},{" "}
              {selectedCity.location.country}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCity;
