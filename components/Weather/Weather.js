import { useState, useEffect } from "react";
import axios from "axios";

/*
weather[0].description
https://source.unsplash.com/featured/?{KEYWORD}
https://source.unsplash.com/1600x900/?nature,water
*/

function Weather() {
  const [weather, setWeather] = useState("");
  const [units, setUnits] = useState("C");
  const [keywords, setKeywords] = useState([]);
  const [bg, setBg] = useState("");

  function titleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase();
    });
  }

  useEffect(() => {
    // Get weather data
    const url = "https://api.openweathermap.org/data/2.5/weather?q=";
    const cityName = process.env.CITY.split(" ").join("+");

    axios
      .get(`${url}${cityName}&appid=${process.env.OPEN_WEATHER}&units=metric`)
      .then(function (response) {
        // console.log(response.data)
        setWeather(response.data);

        // Set keywords
        setKeywords(response.data.weather[0].description.split(" "));
      })
      .then(() => {
        // Set BG Image
        const keys = keywords.join(",");
        setBg(`https://source.unsplash.com/1600x900/?weather,${keys}`);
      });

    // Set weather units
    if (process.env.WEATHER_UNITS === "metric") setUnits("C");
    else if (process.env.WEATHER_UNITS === "imperial") setUnits("F");
  }, []);

  return (
    <div className="bg-gray-900 bg-opacity-50 hover:bg-opacity-75 rounded-xl px-4 py-8 text-center relative">
      {weather !== undefined && weather.weather !== undefined && (
        <>
          <div
            className="inline-block text-white text-xl relative"
            style={{ top: "0.3rem"}}
          >
            {titleCase(weather.weather[0].description)}
          </div>

          <div className="m-5 leading-none text-white text-4xl font-extrabold block ">
            {parseInt(weather.main.temp)}° {units}
          </div>

          <div className="ml-6 mb-0 mt-4 block text-white text-xl">
           In beautiful
          </div>
          <div className="ml-6 mb-4 block text-white text-xl">
            {process.env.CITY}
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
