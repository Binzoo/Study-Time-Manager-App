import { useEffect, useState } from "react";

function useWeather(cityName) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=89f44d331f3d3de2927010788220b956&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [cityName]);
  return data;
}

export default useWeather;
