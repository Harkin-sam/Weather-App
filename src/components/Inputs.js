import React, { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import {
  UilSearch,
  UilLocationPoint,
  UilMicrophone,
} from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs(props) {
  const inputRef = useRef();
  const {transcript, resetTranscript} = useSpeechRecognition();
  const [listening, setListening] = useState(false)

  const micClasses = listening === true? "mic listening": "mic"

  const inputChangeHandler = (e) => {
    if (inputRef.current.value.trim() !== "") {
      props.onAddQuery(inputRef.current.value);
    }
  };

  const locationClickHandler = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user Location");

      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("location fetched");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        console.log(lat, lon);
        props.onAddQuery({ lat, lon });
      });
    }
  };

  const unitChangeHandler = (e) => {
    e.preventDefault();
    const selectedUnit = e.currentTarget.name;

    if (props.tempUnit !== selectedUnit) {
      props.setUnit(selectedUnit);
    }
  };


  const startSpeechHandler = (e) =>{
    e.preventDefault();
    SpeechRecognition.startListening({continuous: true})
    setListening(true)

    console.log('listening Starts')

    console.log(transcript)
    
  }

  const stopSpeechHandler = () => {
    SpeechRecognition.stopListening();
    console.log('listening stops')
    setListening(false)
  }

  return (
    <div className="Input__wrapper">
      <div className="Input__section">
        <button type="button" className={micClasses} onMouseDown={startSpeechHandler} onMouseUp={stopSpeechHandler} onMouseLeave={stopSpeechHandler}>
          <UilMicrophone size={19} />
        </button>

        <input ref={inputRef} type="text" placeholder="Search for city..." />

        <UilSearch
          onClick={inputChangeHandler}
          size={25}
          className="Input__icons"
        />

        <UilLocationPoint
          onClick={locationClickHandler}
          size={25}
          className="Input__icons"
        />
      </div>

      <div className="degrees">
        <button name="metric" className="metrics" onClick={unitChangeHandler}>
          °C
        </button>

        <p>|</p>

        <button name="imperial" className="metrics" onClick={unitChangeHandler}>
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
