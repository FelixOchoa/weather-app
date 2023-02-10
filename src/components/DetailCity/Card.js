import React from "react";
import wind from "../../images/wind.png";
import humidity from "../../images/humidity.png";
import visibility from "../../images/visibility.png";
import pressure from "../../images/pressure.png";
import temperature from "../../images/temperature.png";

const RenderImage = ({ icon }) => {
  switch (icon) {
    case "wind":
      return <img src={wind} className="w-auto h-32" alt="wind" />;
    case "humidity":
      return <img src={humidity} className="w-auto h-32" alt="humidity" />;
    case "visibility":
      return <img src={visibility} className="w-auto h-32" alt="visibility" />;
    case "pressure":
      return <img src={pressure} className="w-auto h-32" alt="pressure" />;
    case "temperature":
      return (
        <img src={temperature} className="w-auto h-32" alt="temperature" />
      );
    default:
      return <img src={wind} className="w-auto h-32" alt="wind" />;
  }
};

const Card = ({ title, data, type, icon }) => {
  console.log(data);
  return (
    <div className="w-[260px] bg-white rounded-3xl p-4 h-[220px] flex flex-col items-center">
      <h2 className="text-gray-400 font-medium self-start">{title}</h2>
      <RenderImage icon={icon} />
      <div className="flex flex-row gap-1 mt-3 font-semibold text-xl">
        <h3>{data}</h3>
        <h4>{type}</h4>
      </div>
    </div>
  );
};

export default Card;
