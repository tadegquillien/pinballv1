
import {useState} from 'react';
import {textStyle, buttonStyle} from './dimensions';
import { Data } from './Data';
import { condition } from './randomized parameters';

const ProlificId = (props) => {
    console.log(condition);
    const [id, setId] = useState("");
    const handleId = (e)=>{
      setId(e.target.value)
    };
    const handleClick = () => {
      Data.prolificId.push(id);
      props.setCurrentPhase('consentform');

    }
    return (
      <div style={textStyle}>Welcome to the study!<br></br>
      <br></br>
        Before we start, please enter your Prolific ID:<br></br>
        <br></br>
        <input style={{width: "400px", height: "50px", fontSize: "25px"}}
          onChange={(e) => handleId(e)}
          ></input>
          <br></br>
          <button style={buttonStyle} onClick={() => handleClick()}>submit</button>
      </div>
    )

  }

  export default ProlificId;