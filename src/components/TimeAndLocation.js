import React, { Fragment } from "react";
import classes from "./TimeAndLocation.module.css";

import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({weather: {dt, timezone, name,  country }}) {
  return (
    <Fragment>
      <div className={classes.TimeLocation__container}>
        <p className={classes.TimeLocation__text}>
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className={classes.TimeLocation__city}>
        <p className={classes.TimeLocation__cityName}>{`${name}, ${country}`}</p>
      </div>
    </Fragment>
  );
}

export default TimeAndLocation;
