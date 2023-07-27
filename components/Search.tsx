"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=prague&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  console.log(weatherData);
  return <div>Search</div>;
};

export default Search;
