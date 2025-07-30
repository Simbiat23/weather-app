import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeatherCondition(response) {
    setDescription(response.data.condition.description);
    setTemperature(response.data.temperature.current);
    setIcon(response.data.condition.icon_url);
    setWind(response.data.wind.speed);
    setHumidity(response.data.temperature.humidity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "t07aaefccae3394of62526e7dc0c0bad";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {temperature && (
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      )}
    </div>
  );
}
