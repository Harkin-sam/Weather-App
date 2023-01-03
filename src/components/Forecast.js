import React from "react";
// import classes from "./Forecast.module.css";
import { iconsUrlCode } from "../services/weatherService";



function Forecast({ title, hoursList }) {
  return (
    <div className='center'>
      <div className='forecast'>
        <div className='forecast__wrapper'>
          <p className='forecast__text'>{title}</p>
        </div>
        <hr className='horizontal__line' />

        <div className='forecast__details'>
          {hoursList.map((hour) => {
            return (
              <div  key ={Math.random()}className='forecast__details__content'>
                <p className='forecast__details__item'>{hour.title}</p>

                <img
                  src={iconsUrlCode(hour.icon)}
                  alt=""
                />

                <p className='forecast__details__item2'>{`${hour.temp.toFixed()}°`}</p>

                <p className='forecast__details__item'>{hour.cloudState}</p>
              </div>
            );
          })}

          
        </div>
      </div>
    </div>
  );
}

export default Forecast;
