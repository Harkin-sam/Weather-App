import { DateTime } from "luxon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = "531c19483c8d7f0e9eff95f9e682f836";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=key

//https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=key

//https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=key

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
    timezone,
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
    timezone,
    country,
    sunrise,
    sunset,
    weather,
    speed,
    cloudDetails,
    icon,
  };
};

// gotta be paid

// const formatDailyForecast = (data) => {
//   let {
//     city: { timezone },
//     list,
//   } = data;

//   const forecastList = list.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.main.temp,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { forecastList };
// };

const format3HoursForecast = (data) => {
  let {
    city: { timezone },
    list,
  } = data;

  const hourly = list.slice(0, 6).map((h) => {
    return {
      title: formatToLocalTime(h.dt, timezone, "hh: mm a"),
      temp: h.main.temp,
      icon: h.weather[0].icon,
      cloudState: h.weather[0].description,
    };
  });

  return { hourly };
};



const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => {
    console.log(data);

    if (data.cod === "404") {
      toast.error(`${data.message}`);
    }

    return formatCurrentWeather(data);
  });

  const { lat, lon } = formattedCurrentWeather;

  // using the lon & lat to fetch the daily API, you gotta pay for this api
  // const formattedForecastWeather = await getWeatherData("forecast/daily", {
  //   lat,
  //   lon,
  //   cnt: 7,
  //   units: searchParams.units,
  // }).then((data) => {
  //   console.log(data)
  //   return formatDailyForecast(data);
  // });

  // 3-hours forecast
  const formatted3hourly = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((data) => {
    console.log(data);

    return format3HoursForecast(data);
  });

  return { ...formattedCurrentWeather, ...formatted3hourly };
};

// install Luxon in Terminal and the format in this function ns the Luxon standard format syntax

// DateTime is imported from Luxon, we used fromSeconds because dt is in seconds

export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  const timeZones = [
    { id: "GMT", sec: 0 },
    { id: "Atlantic/Cape_Verde", sec: -1 * 3600 },
    { id: "Brazil/DeNoronha", sec: -2 * 3600 },
    { id: "America/Rosario", sec: -3 * 3600 },
    { id: "Canada/Newfoundland", sec: -3 * 3600 - 1800 },
    { id: "Canada/Atlantic", sec: -4 * 3600 },
    { id: "America/Caracas", sec: -4 * 3600 - 1800 },
    { id: "EST", sec: -5 * 3600 },
    { id: "CST", sec: -6 * 3600 },
    { id: "MST", sec: -7 * 3600 },
    { id: "PST", sec: -8 * 3600 },
    { id: "AST", sec: -9 * 3600 },
    { id: "Pacific/Marquesas", sec: -9 * 3600 - 1800 },
    { id: "HST", sec: -10 * 3600 },
    { id: "Pacific/Midway", sec: -11 * 3600 },
    { id: "Etc/GMT+12", sec: -12 * 3600 },
    { id: "CET", sec: +1 * 3600 },
    { id: "EET", sec: +2 * 3600 },
    { id: "EAT", sec: +3 * 3600 },
    { id: "Asia/Riyadh87", sec: +3 * 3600 + 424 },
    { id: "Asia/Tehran", sec: +3 * 3600 + 1800 },
    { id: "Asia/Dubai", sec: +4 * 3600 },
    { id: "Asia/Kabul", sec: +4 * 3600 + 1800 },
    { id: "Asia/Karachi", sec: +5 * 3600 },
    { id: "Asia/Calcutta", sec: +5 * 3600 + 1800 },
    { id: "Asia/Kathmandu", sec: +5 * 3600 + 2700 },
    { id: "Asia/Dacca", sec: +6 * 3600 },
    { id: "Asia/Rangoon", sec: +6 * 3600 + 1800 },
    { id: "Asia/Bangkok", sec: +7 * 3600 },
    { id: "JT", sec: +7 * 3600 + 1800 },
    { id: "Asia/Hong_Kong", sec: +8 * 3600 },
    { id: "Australia/Eucla", sec: +8 * 3600 + 2700 },
    { id: "JST", sec: +9 * 3600 },
    { id: "Australia/Adelaide", sec: +9 * 3600 + 1800 },
    { id: "AET", sec: +10 * 3600 },
    { id: "Australia/LHI", sec: +10 * 3600 + 1800 },
    { id: "Pacific/Efate", sec: +11 * 3600 },
    { id: "Pacific/Norfolk", sec: +11 * 3600 + 1800 },
    { id: "Pacific/Apia", sec: +13 * 3600 },
    { id: "Pacific/Auckland", sec: +12 * 3600 },
    { id: "Pacific/Chatham", sec: +12 * 3600 + 2700 },
    { id: "Pacific/Kiritimati", sec: +14 * 3600 },
  ];

  const label = timeZones.filter((i) => i.sec === zone);
  console.log(label);

  return DateTime.fromSeconds(secs).setZone(label[0].id).toFormat(format);
};



// function for url icons
export const iconsUrlCode = (code) =>
  `icons/${code}.svg`;


  //GeoDB API for Auto complete


export default getFormattedWeatherData;

