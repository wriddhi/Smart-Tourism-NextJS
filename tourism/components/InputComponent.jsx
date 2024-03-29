import React, { useState, useEffect, useContext } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { BsFillMicFill, BsFillMicMuteFill, BsXLg } from 'react-icons/bs'
import { BiPlay } from 'react-icons/bi'
import inputstyles from '../styles/Input.module.css'

import AppContext from "./AppContext";

const Input = () => {

  const context = useContext(AppContext)

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.error('Browser doesnt support speech recognition')
  }

  // state to control how input box is managed
  const [query, setQuery] = useState(() => '');

  // state to add animations to mic btn when true
  const [isActive, setActive] = useState(false);

  // Check which keys are being pressed while input box is active
  const checkKey = (e) => {
    // if user presses enter, we change state of global query
    if(e.key == 'Enter'){
      context.updateSearch(query)
      setQuery(query='')
    }
  }

  // Reflect the changes inside the input box
  const handleChange = (e) => {
    setQuery(query = e.target.value)
  }

  useEffect(() => {
    setQuery(query = transcript)
    resetTranscript
  }, [transcript])
  

  const clearSearch = () => {
    setQuery(query='')
  }

  return (
    <>
      <section className={inputstyles.speechContainer}>
        <section className={inputstyles.searchContainer}>
          <input type="text" id="input" className={inputstyles.inputBox} placeholder="Press on the mic to voice type . . ." value={query} onChange={handleChange} onKeyUp={checkKey}></input>
          <span className={inputstyles.searchBarBtnsContainer}>
            <div className={`${inputstyles.searchBarBtn} ${inputstyles.cancelBtn}`} onClick={(event) => {resetTranscript; clearSearch(event)}}>
              <BsXLg/>
            </div>
          </span>
        </section>
        <button className={`${inputstyles.micContainer} ${listening? inputstyles.blink: ''}`} onClick={listening? SpeechRecognition.stopListening: SpeechRecognition.startListening}>
          <BsFillMicFill/>
        </button>
      </section>
    </>
  );
}

export default Input;