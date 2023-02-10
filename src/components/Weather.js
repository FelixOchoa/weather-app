import React from "react";
import SearchCity from "./SearchCity";
import DetailCity from "./DetailCity/index";
const Weather = () => {
  return (
    <>
      <div className="w-full bg-white rounded-3xl min-h-[700px] flex flex-row">
        <SearchCity />
        <DetailCity />
      </div>
      <div>
        <p className="mt-4 text-center text-gray-500 text-xs">
          © 2023 - Created by ❤️:
          <a
            className="text-blue-500 hover:text-blue-700 font-bold"
            href="https://github.com/FelixOchoa"
            target="_blank"
            rel="noreferrer"
          >
            @FelixOchoa
          </a>
        </p>
      </div>
    </>
  );
};

export default Weather;
