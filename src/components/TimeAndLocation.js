import React, { Fragment } from "react";


import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({weather: {dt, timezone, name,  country }}) {
  return (
    <Fragment>
      <div className='TimeLocation__container'>
        <p className='TimeLocation__text'>
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className='TimeLocation__city'>
        <p className='TimeLocation__cityName'>{`${name}, ${country}`}</p>
      </div>
    </Fragment>
  );
}

export default TimeAndLocation;
