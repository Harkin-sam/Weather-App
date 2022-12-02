import React, { Fragment } from "react";
import classes from "./TimeAndLocation.module.css";

function TimeAndLocation() {
  return (
    <Fragment>
      <div className={classes.TimeLocation__container}>
        <p className={classes.TimeLocation__text}>
          Thursday, 30 November 2022 | local time: 6:53 PM
        </p>
      </div>

      <div className={classes.TimeLocation__city}>
        <p className={classes.TimeLocation__cityName}>Berlin, DE</p>
      </div>
    </Fragment>
  );
}

export default TimeAndLocation;
