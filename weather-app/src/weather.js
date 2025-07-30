import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayWeatherCondition(response) {
    alert(
      `The temperature for London is ${Math.round(
        response.data.temperature.current
      )}`
    );
  }

  let apiKey = "t07aaefccae3394of62526e7dc0c0bad";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
