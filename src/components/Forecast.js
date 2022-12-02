import React from "react";
import classes from "./Forecast.module.css";
function Forecast(props) {
  return (
    <div className={classes.center}>
      <div className={classes.forecast}>
        <div className={classes.forecast__wrapper}>
          <p className={classes.forecast__text}>hourly forecast</p>
        </div>
        <hr className={classes.horizontal__line} />

        <div className={classes.forecast__details}>
          <div className={classes.forecast__details__content}>
            <p className={classes.forecast__details__item}>4:30PM</p>

            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />

            <p className={classes.forecast__details__item2}>22°</p>
          </div>

          <div className={classes.forecast__details__content}>
            <p className={classes.forecast__details__item}>4:30PM</p>

            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />

            <p className={classes.forecast__details__item2}>22°</p>
          </div>

          <div className={classes.forecast__details__content}>
            <p className={classes.forecast__details__item}>4:30PM</p>

            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />

            <p className={classes.forecast__details__item2}>22°</p>
          </div>

          <div className={classes.forecast__details__content}>
            <p className={classes.forecast__details__item}>4:30PM</p>

            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />

            <p className={classes.forecast__details__item2}>22°</p>
          </div>

          <div className={classes.forecast__details__content}>
            <p className={classes.forecast__details__item}>4:30PM</p>

            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />

            <p className={classes.forecast__details__item2}>22°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
