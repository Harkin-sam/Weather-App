const API_KEY = "413a96de31465b552d3854310f612b2c";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);

  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  console.log(url);

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: cloudDetails, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    speed,
    cloudDetails,
    icon,
  };
};



const formatForecastWeather = (data)=>{

}

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  const { lat, lon } = formattedCurrentWeather;


  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely, alerts",
    units: searchParams.units,
  }).then((data) => formattedCurrentWeather(data));

  return formattedForecastWeather;
};

export default getFormattedWeatherData;
