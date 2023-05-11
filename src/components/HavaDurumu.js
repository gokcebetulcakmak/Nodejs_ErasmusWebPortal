import React, { useState, useEffect } from "react";
import { usePosition } from 'use-position';
import axios from "axios";

const WeatherApp = () => {
  const [weather, setWeather] = useState();
  const {latitude, longitude, } = usePosition();


  const getWeatherData = async (lat, lon) => {
    const key ="YOUR_API_KEY";
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Veri alınırken hata oluştu.");
    }
  };
  useEffect(()=>{
    latitude&&longitude&& getWeatherData(latitude,longitude);
  },[latitude, longitude])
  console.log(latitude,longitude,weather);

  if(!weather){
    return <p>Konum bilgisi alınamadı.</p>
  }
  return (
    <div className="app">
      <div className="header">
        <h1>Hava Durumu</h1>   
      </div>
      <div className="content">
        <div className="city">{weather.name}</div>
        <div className="temp">{Math.round(weather.main.temp)} °C </div>
        <div className="desc">{weather.weather.map(data=>data.description).join(",")}</div>
      </div>
    </div>
  );
};

export default WeatherApp;
