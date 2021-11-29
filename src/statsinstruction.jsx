import Likert from 'react-likert-scale';
import { useState } from 'react';
import { likertChoicesTest, likertChoicesSide } from './likertScale';
import { buttonStyle } from './dimensions';
import predictionclipgreen from './predictionclipgreen.mp4';



export const Statsdisplay = () =>{

    //the likert scale
    const likertOptions =  {
      question: "",
      responses: likertChoicesTest,
      //keeps track of the last response by the participant
      onChange: val => {
          setResponse(val.value);
          setButton(nextbutton)
      },
      id: 'question',
  };
  
    const [ button, setButton ] = useState("");
    const [ response, setResponse ] = useState(0);
    const [ endText, setEndText ] = useState("Please watch the video above");
    const question = <div style={{margin: "0% 25%"}}>
      
      <p>On average, on which side do green flippers tend to send the ball?</p>
      <Likert {...likertOptions} />
    </div>
  
    const handleEnd = () => {
      setEndText(question)
    }
  
    const handleClick = () => {
      console.log(response)
    }
  
    const nextbutton = <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>
  
    return (
      <div align="center">
        <video width="400" height="400" src={predictionclipgreen} autoPlay muted onEnded = {()=>handleEnd()}/>
        <div align="center">{endText}<br></br>
        {button}</div>
      </div>
    )
  }