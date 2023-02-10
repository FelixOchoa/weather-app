import React, { useReducer } from "react";
import axios from "axios";

import WeatherContext from "./WeatherContext";
import WeatherReducer from "./WeatherReducer";

import { SEARCH_CITY, SET_SELECTED_CITY, SET_TEMP_UNIT } from "../types";
import { API_KEY } from "../../Config";

const WeatherState = (props) => {
  const initialState = {
    weather: null,
    selectedCity: null,
    cities: [],
    tempUnit: "c",
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const searchCity = async (city) => {
    if (city === "") {
      dispatch({
        type: SEARCH_CITY,
        payload: [],
      });
      return;
    }

    const res = await axios.get(
      `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${city}`
    );

    dispatch({
      type: SEARCH_CITY,
      payload: res.data,
    });
  };

  const setSelectedCity = async (city) => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city.name}`
    );

    dispatch({
      type: SET_SELECTED_CITY,
      payload: res.data,
    });
  };

  const setTempUnit = (unit) => {
    dispatch({
      type: SET_TEMP_UNIT,
      payload: unit,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        selectedCity: state.selectedCity,
        cities: state.city,
        tempUnit: state.tempUnit,

        searchCity,
        setSelectedCity,
        setTempUnit,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
