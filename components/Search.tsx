"use client";

// Search.tsx
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setWeatherData,
  setInputValue,
  clearInputValue,
  clearWeatherData,
} from "@/redux/slices/weatherSlice";

const Search = () => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const weatherData = useSelector((state: any) => state.weather.weatherData);
  const inputValue = useSelector((state: any) => state.weather.inputValue);
  const dispatch = useDispatch();

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
      );
      dispatch(setWeatherData(response.data));
      dispatch(clearInputValue());
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const handleFetchWeatherData = () => {
    fetchWeatherData();
  };

  console.log(weatherData);
  console.log(inputValue);

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search your city..."
          className="bg-slate-800 text-white py-1 px-16 rounded-md"
          onChange={changeInput}
          value={inputValue}
        />
        <div>
          <MagnifyingGlassIcon
            className="absolute top-1 right-2 cursor-pointer"
            width={25}
            onClick={handleFetchWeatherData}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
