
import { useState } from 'react';
import Likert from 'react-likert-scale';
import { likertChoicesTest, likertChoicesCheck } from './likertScale';
import { buttonStyle } from './dimensions';
import { videolist, attentionChecks, condition } from './randomized parameters';


import { Data } from './Data';
import redflipper from './redflipper.png';
import greenflipper from './greenflipper.png';
import "./videodisplay.css";




export const Videodisplay = (props) => {

  
  //select the current video
  //on trials 3 and 7, display an attention check
  //on all other trials, display a videoclip with a causal question
  const currentvideo = props.currentTrial < 2 ? videolist[props.currentTrial] :
    props.currentTrial == 2 ? attentionChecks[0] :
    props.currentTrial < 6 ? videolist[props.currentTrial - 1] :
    props.currentTrial == 6 ? attentionChecks[1] : 
    videolist[props.currentTrial - 2];
  
  const video = currentvideo.clip;
  //this variable indexes whether the current video is a test video or an attention check
  const videotype = currentvideo.type;
  const direction = videotype === "test" ? currentvideo.A_orientation : null;
  

  //initialize the variables
  //the participant's likert scale response
  const [response, setResponse] = useState('unclicked');
  //this variable determines whether the question is ready to be displayed
  const [status, setStatus] = useState("waiting");
  //this variable determines whether the button is ready to be displayed
  const [buttonStatus, setButtonStatus] = useState("hidden");
  //can the participant replay the video?
  const [ giveControl, setGiveControl ] = useState(false);
  //was there a problem loading the video?
  const [ errorStatus, setErrorStatus ] = useState(false);


  //the likert scale for the causal question
  const likertOptions = {
    question: "",
    responses: likertChoicesTest,
    //keeps track of the last response by the participant
    onChange: val => {
      setResponse(val.value);
      setButtonStatus("display");
      
      console.log(condition);

    },
    id: 'question',
  };

  //the likert scale for the attention check
  const likertAttnCheck = {
    question: "",
    responses: likertChoicesCheck,
    //keeps track of the last response by the participant
    onChange: val => {
      setResponse(val.value);
      setButtonStatus("display");
      
      console.log(condition);

    },
    id: 'attncheck',
  };

  const handleClick = () => {
    //record the participant's response, as well
    //as the details of the videoclip
    let message = videotype === "test" ?
    {
      "response": response,
      "trial": props.currentTrial,
      "A_orientation": currentvideo.A_orientation,
      "C_orientation": currentvideo.C_orientation,
      "Pa": currentvideo.Pa,
      "Pc": currentvideo.Pc,
      "checkId": "NA"
    } : 
    {
      "response": response,
      "trial": props.currentTrial,
      "A_orientation": "NA",
      "C_orientation": "NA",
      "Pa": "NA",
      "Pc": "NA",
      "checkId": currentvideo.check_id
    }

    Data.responses.push(message);
    //hide the question and the 'next' button
    setStatus("waiting");
    setButtonStatus("hidden");
    setGiveControl(false);
    setErrorStatus(false);
    console.log(Data);
    props.setCurrentTrial((i) => i + 1);
    //if we have reached the end of the video list, 
    //go to the next phase
    if (props.currentTrial > (videolist.length + attentionChecks.length - 2)) {
      props.setCurrentPhase("demographics");
    }

  }

  //handle what happens when the video fails to load
  const handleError = () => {
    setResponse("unclicked");
    setErrorStatus(true);
  }

//if the video fails to load, a special button allows the participant to move on
//anyway
const errorButton = errorStatus ? 
<button onClick={()=>handleClick()}>It seems there was a problem loading the video. Please click here to move on to the next trial.</button> :
"";

  //the 'NEXT' button is displayed once the player has clicked on the likert scale
  const nextbutton = buttonStatus === "display" ?
    <button style={buttonStyle} onClick={() => handleClick()}>Next</button> :
    "";

  
  //the causal question
  const question = status === "ready" ? <div style={{ margin: "0% 25%" }}>
    <p>Please tell us how much you agree with the following statement:</p>
    <p>The player won the game because the top flipper sent the ball to the {direction}</p>
    <Likert {...likertOptions} />
    {nextbutton}
  </div> : "Please watch the video above carefully";

  //the attention check question
  const checkquestion = status === "ready" ? <div style={{ margin: "0% 25%" }}>
  <p>Did the ball fall on the left side or the right side of the screen?</p>
  <Likert {...likertAttnCheck} />
  {nextbutton}
</div> : "Please watch the video above carefully";

  //display the question once the video has ended
  const endText = videotype === "test" ? question : checkquestion;

  //this function displays the text once the video ends
  const handleEnd = () => {
    
    setStatus("ready");
    var control = videotype === "test" ? true : false;
    
    setGiveControl(control);
  }

  //the width of the side picture
  const img_width = "20%"

  return (
    <div align="center">
      <div className="container">
        {/* A side panel reminding participants of the flipper's preferred orientations */}
        <div className="child" id="reminder">
          <p>(Flippers'<br></br>
             preferred<br></br>
              orientations) :</p>
          <img src={greenflipper} width={img_width} /><br></br>
          <img src={redflipper} width={img_width} /><br></br>

        </div>




        <div className="child">
          {errorButton}
          {/* the video */}
          <video width="400" height="400"
            src={video} autoPlay muted
            controls={giveControl} 
            onEnded={() => handleEnd()}
            onError={()=>handleError()} 
            />
        </div>


        <div className="child"></div>


      </div>
      {/* the question */}
      <div align="center">{endText}<br></br>
      </div>
    </div>
  )
}