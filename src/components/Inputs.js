import React, { useRef, useState } from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  UilSearch,
  UilLocationPoint,
  UilMicrophone,
} from "@iconscout/react-unicons";

// To polyfill react-speech- recognition
// open a speechly account to get an app id
// run - npm install --save @speechly/speech-recognition-polyfill
// and import the necessary

const appId = "";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

function Inputs(props) {
  const inputRef = useRef();
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [listening, setListening] = useState(false);

  const micClasses = listening === true ? "mic listening" : "mic";

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

  const startSpeechHandler = (e) => {
    if (!browserSupportsSpeechRecognition) {
      return toast.error("Browser doesnt support speech recognition");
    }

    SpeechRecognition.startListening({ continuous: true });
    setListening(true);

    console.log("listening Starts");

    document.querySelector(".Input__section input").value = transcript;

    resetTranscript();
    // console.log(transcript)
  };

  const stopSpeechHandler = () => {
    SpeechRecognition.stopListening();
    console.log("listening stops");
    setListening(false);
  };

  return (
    <div className="Input__wrapper">
      <div className="Input__section">
        <input ref={inputRef} type="text" placeholder="Search City..." />

       
          <button
            type="button"
            className={micClasses}
            onTouchStart={startSpeechHandler}
            onMouseDown={startSpeechHandler}
            onMouseUp={stopSpeechHandler}
            onTouchEnd={stopSpeechHandler}
          >
            <UilMicrophone size={19} />
          </button>

          <UilSearch
            onClick={inputChangeHandler}
            size={30}
            className="Input__icons"
          />

          <UilLocationPoint
            onClick={locationClickHandler}
            size={30}
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
