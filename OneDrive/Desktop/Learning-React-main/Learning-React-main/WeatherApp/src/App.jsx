import { useState } from "react";
import "./App.css";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState();
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const [weather, setWeather] = useState("");
  const data = useWeather(city);

  return (
    <>
      <div className="card place-content-center h-screen">
        <div>
          <input
            className=" h-11 mt-1 rounded-lg text-2xl"
            type="text"
            placeholder="Give the city name"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div>
          <button
            className=" text-center bg-orange-300 rounded-sm h-11 w-40 m-3"
            onClick={() => {
              setTemp(data.main.temp);
              setWind(data.wind.speed);
              setHumidity(data.main.humidity);
              setWeatherType(data.weather[0].description);
              setWeather("/src/images/" + data.weather[0].main + ".jpeg");
            }}
          >
            Search
          </button>
        </div>
        <div className=" flex justify-center items-center mt-5">
          <table className=" table-auto">
            <thead>
              <tr className="">
                <th className=" mx-5 px-5">Temperature</th>
                <th className=" mx-5 px-5">City</th>
                <th className=" mx-5 px-5">Wind</th>
                <th className=" mx-5 px-5">Humidity</th>
                <th className=" mx-5 px-5">Weather Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{temp}</td>
                <td>{city}</td>
                <td>{wind}</td>
                <td>{humidity}</td>
                <td>{weatherType}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img
          src={weather}
          alt=""
          className=" card place-content-center h-96 justify-center"
        />
      </div>
    </>
  );
}

export default App;
