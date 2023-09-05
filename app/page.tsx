"use client";

import WeatherByDay from "@/components/WeatherByDay";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setWeatherData,
  setWeatherDataByDay,
  setCityNotFound,
  setInputValue,
  clearInputValue,
} from "@/redux/slices/weatherSlice";

const WeatherDisplay = () => {
  const weatherData = useSelector((state: any) => state.weather.weatherData);
  const cityNotFound = useSelector((state: any) => state.weather.cityNotFound);

  return (
    <>
      {!cityNotFound ? (
        <>
          <section>
            {weatherData ? (
              <div className="flex text-white-100 w-auto m-1  md:w-10/12 md:m-auto justify-center items-center md:mb-1 font-bold bg-slate-700 rounded-lg p-4 justify-evenly bg-opacity-50">
                <p>{weatherData.location.name}</p>
                <div className="flex-row justify-center items-center">
                  <img
                    className="flex m-auto w-16 max-h-16"
                    src={weatherData.current.condition.icon}
                    alt="weather-icon"
                  />
                  <p className="flex justify-center">
                    {weatherData.current.condition.text}
                  </p>
                </div>
                <div>
                  <p>Temperature: {weatherData.current.temp_c}°C</p>
                  <p>Feels like: {weatherData.current.feelslike_c}°C</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <WeatherByDay />
        </>
      ) : (
        <div className="flex items-center justify-center">
          <h2 className="text-2xl mt-5 flex justify-center items-center bg-red-600 bg-opacity-80 w-60 h-12 m-auto rounded-xl">
            City not found
          </h2>
        </div>
      )}
    </>
  );
};

export default WeatherDisplay;
