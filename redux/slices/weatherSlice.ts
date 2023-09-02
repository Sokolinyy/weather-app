import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState: any = {
  weatherData: null,
  weatherDataByDay: null,
  inputValue: "",
  сityNotFound: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.weatherData = action.payload;
    },
    setWeatherDataByDay: (state, action: PayloadAction<any>) => {
      state.weatherDataByDay = action.payload;
    },
    setCityNotFound: (state, action: PayloadAction<any>) => {
      state.cityNotFound = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    clearWeatherData: (state) => {
      state.weatherData = null;
    },
    clearInputValue: (state) => {
      state.inputValue = "";
    },
  },
});

export const {
  setWeatherData,
  setWeatherDataByDay,
  setCityNotFound,
  setInputValue,
  clearWeatherData,
  clearInputValue,
} = weatherSlice.actions;

export default weatherSlice.reducer;
