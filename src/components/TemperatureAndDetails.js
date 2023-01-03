import React, { Fragment } from "react";
// import classes from "./TemperatureAndDetails.module.css";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconsUrlCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    cloudDetails,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <Fragment>
      <div className='Temperature__wrapper'>
        <p>{cloudDetails}</p>
      </div>

      <div className='details__wrapper'>
        <img src={iconsUrlCode(icon)} alt="loading" />

        <p>{`${temp.toFixed()}°`}</p>

        <div className='details__humidity'>
          <div className='details__humidity_text'>
            <UilTemperature size={18} className='details__icons' />
            Real fell:
            <span className='details__icons_text'>{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className='details__humidity_text'>
            <UilTear size={18} className='details__icons' />
            Humidity:
            <span className='details__icons_text'>{`${humidity.toFixed()}%`}</span>
          </div>

          <div className='details__humidity_text'>
            <UilWind size={18} className='details__icons' />
            Wind:
            <span className='details__icons_text'> {`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>

      <div className='another__details'>
        <UilSun />
        <p className='another__details_p'>
          Rise: <span>{formatToLocalTime(sunrise,timezone, 'hh:mm a')}</span>
        </p>
        <p className='margin_class'>|</p>

        <UilSunset />
        <p className='another__details_p'>
          Set: <span>{formatToLocalTime(sunset,timezone, 'hh:mm a')}</span>
        </p>
        <p className='margin_class'>|</p>

        <UilArrowUp />
        <p className='another__details_p'>
          High: <span>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className='margin_class'>|</p>

        <UilArrowDown />
        <p className='another__details_p'>
          Low: <span>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </Fragment>
  );
}

export default TemperatureAndDetails;
