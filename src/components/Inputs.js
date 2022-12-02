import React from "react";
import classes from "./Input.module.css";

import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className={classes.Input__wrapper}>

      <div className={classes.Input__section}>
        <input type="text" placeholder="Search for city..." />
        <UilSearch size={25} className={classes.Input__icons} />
        <UilLocationPoint size={25} className={classes.Input__icons} />
      </div>

      <div className={classes.degrees}>
         <button name="metric" className={classes.metrics}>°C</button>
         <p>|</p>
         <button name="imperial"  className={classes.metrics}>°F</button>
      </div>
    </div>
  );
}

export default Inputs;
