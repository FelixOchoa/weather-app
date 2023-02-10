import React, { useContext } from "react";
import WeatherContext from "../../context/Weather/WeatherContext";
const SwitchTemp = () => {
  const { tempUnit, setTempUnit } = useContext(WeatherContext);

  const handleTempUnit = (unit) => {
    setTempUnit(unit);
  };

  return (
    <div className="flex flex-row items-center w-full justify-between">
      <h1 className="font-bold text-xl self-start">Today's Highlights</h1>
      <div className="self-end flex flex-row gap-3">
        <button
          className={
            tempUnit === "c"
              ? "bg-gray-900 text-white rounded-full w-8 h-8 font-bold shadow-md"
              : "bg-white text-gray-900 rounded-full w-8 h-8 font-bold shadow-md"
          }
          onClick={() => handleTempUnit("c")}
        >
          °C
        </button>
        <button
          className={
            tempUnit === "f"
              ? "bg-gray-900 text-white rounded-full w-8 h-8 font-bold shadow-md"
              : "bg-white text-gray-900 rounded-full w-8 h-8 font-bold shadow-md"
          }
          onClick={() => handleTempUnit("f")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default SwitchTemp;
