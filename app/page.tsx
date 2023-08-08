"use client";

// pages/otherPage.js
import React from "react";
import { useSelector } from "react-redux";
import { setWeatherData, setInputValue } from "@/redux/slices/weatherSlice";

const WeatherDisplay = () => {
  const weatherData = useSelector((state: any) => state.weather.weatherData);
  const inputValue = useSelector((state: any) => state.weather.inputValue);

  const kelvinToCelsius = (kelvin: number) => {
    return kelvin - 273.15;
  };

  return (
    <>
      {weatherData && (
        <div>
          <h1>Weather for {weatherData.name}</h1>
          {/* Display weather data here */}
          <p>
            Temperature:{" "}
            {weatherData
              ? kelvinToCelsius(weatherData.main.temp).toFixed(2)
              : "Loading..."}
            °C
          </p>
          {/* Add more weather details as needed */}
        </div>
      )}
    </>
  );
};

export default WeatherDisplay;
