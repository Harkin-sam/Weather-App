import "./App.css";
import React from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [query, setQuery] = useState({ q: "Lisbon" });

  const [units, setUnits] = useState("metric");

  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";

      toast.info("fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        // console.log(data);
        
        toast.success(
          `Successfully fetched weather for ${data.name},  ${data.country}`
        );

        setWeather(data);
      });
    };

    fetchWeather();

  }, [query, units]);

  const formatBackground = () => {
    if (!weather) {
      return "";
    }

    // this means if units = metric, threshold is 20 and if not threshold is 60
    const threshold = units === "metric" ? 20 : 60;

    if (weather.temp <= threshold) {
      return "bgColor1";
    }

    return "bgColor2";
  };

  const queryEnterHandler = (value) => {
    if (typeof value === "string") {
      setQuery({ q: value });
    }

    if (typeof value === "object") {
      setQuery(value);
    }
  };


  return (
    <div className={`container ${formatBackground()}`}>
      {weather === null && <div className="loader"></div>}

      {weather && (
        <Fragment>
          <TopButtons
            onAddQuery={queryEnterHandler}
          />
          <Inputs
            onAddQuery={queryEnterHandler}
            tempUnit={units}
            setUnit={setUnits}
          />

          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title=" 3-hours forecast" hoursList={weather.hourly} />
          
        </Fragment>
      )}

      <ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
