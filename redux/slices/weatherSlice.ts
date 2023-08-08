import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState: any = {
  weatherData: null,
  inputValue: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.weatherData = action.payload;
    },
    setInputValue: (state, action: PayloadAction<any>) => {
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
  setInputValue,
  clearWeatherData,
  clearInputValue,
} = weatherSlice.actions;

export default weatherSlice.reducer;
