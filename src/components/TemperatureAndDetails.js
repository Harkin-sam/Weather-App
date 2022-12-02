import React, { Fragment } from "react";
import classes from "./TemperatureAndDetails.module.css";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <Fragment>
      <div className={classes.Temperature__wrapper}>
        <p>Cloudy or whatever</p>
      </div>

      <div className={classes.details__wrapper}>
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />

        <p>34°</p>

        <div className={classes.details__humidity}>
          <div className={classes.details__humidity_text}>
            <UilTemperature size={18} className={classes.details__icons} />
            Real fell:
            <span className={classes.details__icons_text}>32°</span>
          </div>

          <div className={classes.details__humidity_text}>
            <UilTear size={18} className={classes.details__icons} />
            Humidity:
            <span className={classes.details__icons_text}>65%</span>
          </div>

          <div className={classes.details__humidity_text}>
            <UilWind size={18} className={classes.details__icons} />
            Wind:
            <span className={classes.details__icons_text}>11km/h</span>
          </div>
          
        </div>
      </div>

      <div className={classes.another__details}>
            <UilSun />
            <p className={classes.another__details_p}>Rise: <span>06:45 AM</span></p> 
            <p className={classes.margin_class}>|</p>

            <UilSunset />
            <p className={classes.another__details_p}>Set: <span>07:35 PM</span></p> 
            <p className={classes.margin_class}>|</p>

            <UilArrowUp/>
            <p className={classes.another__details_p}>High: <span>45°</span></p> 
            <p className={classes.margin_class}>|</p>

            <UilArrowDown />
            <p className={classes.another__details_p}>Low: <span>40°</span></p> 
        </div>
    </Fragment>
  );
}

export default TemperatureAndDetails;
