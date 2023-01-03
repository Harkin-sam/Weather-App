import React, {useRef} from "react";
// import classes from "./Input.module.css";

import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs(props) {

  const inputRef = useRef()


 const inputChangeHandler = (e) => {

  if (inputRef.current.value.trim() !== ''){
    props.onAddQuery(inputRef.current.value)
  }
      
  }


  const locationClickHandler = () => {
    if(navigator.geolocation){

      toast.info('Fetching user Location');
      
      navigator.geolocation.getCurrentPosition((position)=>{
        toast.success('location fetched')
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        console.log(lat, lon)
        props.onAddQuery({lat, lon});

      })
    }
  }

  const unitChangeHandler = (e) => {
      e.preventDefault();
      const selectedUnit = e.currentTarget.name;

      if (props.tempUnit !== selectedUnit){
        props.setUnit(selectedUnit)
      }
  }



  return (
    <div className='Input__wrapper'>

      <div className='Input__section'>
        <input ref = {inputRef}
        type="text" placeholder="Search for city..." />

        <UilSearch onClick={inputChangeHandler} size={25} className='Input__icons' />

        <UilLocationPoint onClick={locationClickHandler} size={25} className='Input__icons' />
      </div>

      <div className='degrees'>
         <button name="metric" className='metrics' onClick ={unitChangeHandler}>°C</button>

         <p>|</p>

         <button name="imperial"  className='metrics' onClick ={unitChangeHandler}>°F</button>
      </div>
    </div>
  );
}

export default Inputs;
