"use client";

// Search.tsx
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setWeatherData,
  setWeatherDataByDay,
  setCityNotFound,
  setInputValue,
  clearInputValue,
} from "@/redux/slices/weatherSlice";
import { ok } from "assert";

const Search = () => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const weatherData = useSelector((state: any) => state.weather.weatherData);
  const weatherDataByDay = useSelector(
    (state: any) => state.weather.weatherDataByDay
  );
  const inputValue = useSelector((state: any) => state.weather.inputValue);
  const cityNotFound = useSelector((state: any) => state.weather.cityNotFound);
  const dispatch = useDispatch();

  const fetchWeatherData = async () => {
    dispatch(setCityNotFound(true));
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`
      );
      if (!response.data.location) {
        dispatch(setCityNotFound(true));
      } else {
        dispatch(setCityNotFound(false));
        dispatch(setWeatherData(response.data));
        dispatch(clearInputValue());
      }
      console.log("skjhbakhsghdivhjhiuajk", response);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  console.log(cityNotFound);

  // Fetches weather data by days
  const fetchWeatherDataByDays = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputValue}&days=7`
      );
      dispatch(setWeatherDataByDay(response.data));
      console.log("Fetched weather data:", response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const handleFetchWeatherData = () => {
    fetchWeatherData();
    fetchWeatherDataByDays();
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search your city..."
          className="bg-slate-800 text-white py-1 px-14 rounded-md w-full m-1"
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
