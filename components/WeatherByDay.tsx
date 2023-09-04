"use client";

import { useSelector } from "react-redux";

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    totalprecip_mm: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const WeatherByDay = () => {
  const weatherDataByDay = useSelector(
    (state: any) => state.weather.weatherDataByDay
  );

  const forecastDays = weatherDataByDay
    ? weatherDataByDay.forecast.forecastday
    : null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-us", { month: "short" });
    const day = date.getDate();
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "short" });
    return `${day}-${month}-${dayOfWeek}`;
  };

  return (
    <section className="flex-row sm:w-auto lg:flex justify-between items-center w-full lg:w-10/12 m-auto rounded-lg justify-evenly bg-opacity-50 ">
      {forecastDays ? (
        forecastDays.map((day: ForecastDay, index: number) => (
          <div
            key={index}
            className="ml-1 w-11/12 w-auto sm:w-auto md:w-10/12 md:m-auto md:mb-1 md: lg:w-10/12 lg:m-1 flex lg:flex-col h-20 lg:h-40 mt-2 mr-1 m-auto p-4 bg-slate-700 rounded-lg w-1/4 bg-opacity-70 flex-row justify-center items-center text-left"
          >
            <p>{formatDate(day.date)}</p>
            <img
              src={day.day.condition.icon}
              alt="weather-icon"
              className="m-auto"
            />
            <div className="flex-col">
              <p className="mb-1">Day {day.day.maxtemp_c}° </p>
              <p className="text-gray-300">Night {day.day.mintemp_c}°</p>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default WeatherByDay;
