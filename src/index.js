import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProlificId from './prolificId';
import { Videodisplay } from './videodisplay'
import reportWebVitals from './reportWebVitals';
import { Statsdisplay } from './statsinstruction';
import ConsentForm from './ConsentForm';
import { Instructions } from './instructions';
import Demographics from './Demographics';
import Ending from './Ending';

const Root = () => {
  const [ currentPhase, setCurrentPhase ] = useState("prolificId");
  const [ currentTrial, setCurrentTrial ] = useState(0);

  return(
    currentPhase === "prolificId" ? <ProlificId setCurrentPhase = {setCurrentPhase}/> :
    currentPhase === "consentform" ? <ConsentForm setCurrentPhase={setCurrentPhase}/> :
    currentPhase ===  "instructions" ? <Instructions currentPhase={currentPhase}
     setCurrentPhase={setCurrentPhase} /> :
   currentPhase === "main" ?
    <Videodisplay currentTrial={currentTrial} setCurrentTrial={setCurrentTrial}
    setCurrentPhase={setCurrentPhase} /> :
    currentPhase === "demographics" ? <Demographics setCurrentPhase = {setCurrentPhase}/> :
    currentPhase === "ending" ? <Ending /> : currentPhase
  )
  
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
