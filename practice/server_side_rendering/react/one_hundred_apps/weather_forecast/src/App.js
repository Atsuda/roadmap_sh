import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  function fetchWeatherData() {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35.6894&longitude=139.6917&daily=weathercode&timezone=Asia%2FTokyo"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const weatherList = [];
        for (let i = 0; i < data.daily.time.length; i++) {
          weatherList.push({
            date: data.daily.time[i],
            weather: data.daily.weathercode[i],
          });
        }
        console.log(weatherList);
        setWeatherList(weatherList); // APIから取得したデータをステートに保存
        setLoading(false);
      });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      loading: {loading ? "true" : "false"}
      <WeatherTable weatherList={weatherList} />
    </div>
  );
}

function WeatherTable({ weatherList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
        </tr>
      </thead>
      <tbody>
        {weatherList.map((weather) => (
          <tr key={weather.date}>
            <td>{weather.date}</td>
            <td>{weather.weather}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const WEATHER_LIST = [
  { date: "2021-01-01", weather: "Sunny" },
  { date: "2021-01-02", weather: "Cloudy" },
  { date: "2021-01-03", weather: "Rainy" },
];
export default App;
