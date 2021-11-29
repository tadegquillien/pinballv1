import { useState } from 'react'
import { textStyle, buttonStyle } from './dimensions'
import pinballclipInstructions from './pinballclipInstructions.mp4';
import pinballcliploss from './pinballcliploss.mp4';
import redflipper from './redflipper.png';
import greenflipper from './greenflipper.png';
import orangeflipper_right from './orangeflipper_right.png';
import orangeflipper_left from './orangeflipper_left.png';
import { Data } from './Data';
import "./instructions.css";


export const Instructions = (props) => {

    const [ currentPage, setCurrentPage ] = useState(0);

    const PageOne =  ()=>{
        const handleClick = () =>{
            setCurrentPage((i)=>i+1)
        }
        return(
            <div style = {textStyle}>
                <p>In this study, we will show you short video clips of a pinball-like game.</p>
                <p>The game is a very simple game of pure chance.</p>
                <p>Unlike in real pinball, where the player has control over the flippers, here the flippers move randomly on their own.</p>
            <p>We will show you different video clips of the game and ask you what you think.</p>
            <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>
            </div>
            
        )
    }
        

    const PageTwo = ()=> {

        const [ button, setButton ] = useState(<p></p>)
        const [ afterText, setAfterText ] = useState(<p></p>)
        const [ errorStatus, setErrorStatus ] = useState(false);

        const nextButton = <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>
        const handleClick = () => {
            setCurrentPage((i)=>i+1)
        }

        const text = <p>Here, the ball ended up in a blue bucket, so the player won the game.</p>
        const handleEnd = ()=>{
            setButton(nextButton)
            setAfterText(text)
        }

        const handleError = () => {

            setErrorStatus(true);
        }

        const errorButton = errorStatus ? 
        <button onClick={()=>handleClick()}>It seems there was a problem loading the video. Please click here to move on to the next trial.</button> :
        "";
        
        return(
            <div style = {textStyle}>
                
                <p>The video below gives an example.<br></br>
                There are three flippers. They switch back and forth randomly, between two possible orientations.<br></br>
                Each flipper moves back and forth for a few seconds, then it stops moving.<br></br>
                When all flippers have stopped moving, a ball is released.<br></br>
                The player wins the game if the ball ends up in one of the blue buckets.
                </p>
                {errorButton}
                <video width="400" height="400" 
                src={pinballclipInstructions} 
                onError={()=>handleError()}
                autoPlay muted onEnded = {()=> handleEnd()}/>
                {afterText}
                {button}
                
            </div>
            
        )
    }

    const PageThree = () => {
        const [ button, setButton ] = useState(<p></p>)
        const [ errorStatus, setErrorStatus ] = useState(false);

        const nextButton = <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>
        const handleEnd = ()=>{
            setButton(nextButton)
        }
        const handleClick = () => {
            setCurrentPage((i)=>i+1)
        }

        const handleError = () => {

            setErrorStatus(true);
        }

        const errorButton = errorStatus ? 
        <button onClick={()=>handleClick()}>It seems there was a problem loading the video. Please click here to move on to the next trial.</button> :
        "";

        return (
            <div style={textStyle}>
                <p>If the ball falls off the screen, the player loses the game:</p>
                {errorButton}
                <video width="400" height="400"
                src={pinballcliploss} 
                autoPlay muted onEnded = {()=> handleEnd()}
                onError={()=>handleError()}/>
                {button}
            </div>
            
        )
    }

    const PageFour = () => {
        
        const handleClick = () => {
            setCurrentPage((i)=>i+1)
        }

        return(
            <div  style={textStyle}>
                <p>Flippers can come in different colors.</p>
                <p>Red flippers have a tendency to point to the right:</p>
                <img  src={redflipper}></img> 
                <p>Green flippers have a tendency to point to the left:</p>
                <img src={greenflipper}></img>
                <p>Orange flippers are equally likely to point to the left or to the right:</p>
                <img src={orangeflipper_left}/><br></br>
                <img style={{float: 'right'}} src={orangeflipper_right}/><br></br>
                <p>(You don't need to remember these right now; next to each video, there will a small picture reminding you of the
                    flippers' preferred orientations.)</p>
                <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>
            </div>
        )
    }

    const PageFive = () => {
        const handleClick = () => {
            setCurrentPage((i)=>i+1)
        }
        return(
            <div style={textStyle}>
                <p>In this study, we will show you 10 different videoclips. <b>Please pay careful attention to what happens in each of them.</b></p>
                <p>After each videoclip, we will ask you a simple question about what you saw.</p>

                <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>

            </div>
        )

    }

    const PageSix = () => {
        const handleClick = () => {
            setCurrentPage((i)=>i+1)
        }
        return(
            <div style={textStyle}>
                <p>In some of the videoclips, the player wins the game. For these clips, we will ask you how much you agree that <b>it is what happened with the top flipper that <i>caused</i> the player to win.</b></p>
                <p>So, for the videos where the top flipper sends the ball to the right and the ball ends up in a blue bucket, 
                    we will ask you how much you agree that the top flipper sending the ball to the right caused the player to win.</p>
                <p>For the videos where the top flipper sends the ball to the left and the ball ends up in a blue bucket, 
                    we will ask you how much you agree that the top flipper sending the ball to the left caused the player to win.</p>
                <p>In some of the videoclips, the player loses the game. For these clips, we will simply ask if you remember <b>whether the ball fell from the left or the right side of the screen</b>.</p>
                
                <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>

            </div>
        )

    }

    const PageSeven = () => {
        //keep track the participants' answers
    
    const [ goal, setGoal ] = useState("NA");
    const [ flipper, setFlipper ] = useState("NA");

    //update the participants' answer

    const handleFlipper = (e) => {
        setFlipper(e.target.value);
    };

    const handleGoal = (e) => {
        setGoal(e.target.value);
    };

    //when the participant submits the form, record the data 
    //and start the training phase
    const handleClick = ()=>{
        Data.comprehension.push({
            "questionFlipper": flipper,
            "questionGoal": goal
        })
        console.log(Data);
        props.setCurrentPhase("main");
    }
        
        return(
            <div style={textStyle}>
                <p>Before we start, please answer the following questions:</p>

                <form>
        <label for="goalQuestion">When does the player win the game?</label>
        <br></br>
        <br></br>
        <select name="goalQuestion"
        onChange={(e)=>handleGoal(e)}>

                <option name="NA" value="NA"></option>
                <option name="falls" value="falls">If the ball falls off the screen</option>
                <option name="left" value="left">If the ball falls in the left blue bucket</option>
                <option name="right" value="right">If the ball falls in the right blue bucket</option>
                <option name="both" value="both">If the ball falls in any blue bucket</option>
        </select>
        <br></br>
        <br></br>

        <label for="flipperQuestion">What does the color of a flipper tell us?</label>
        <br></br>
        <br></br>
        <select name="flipperQuestion"
        onChange={(e)=>handleFlipper(e)}>
            <option name="NA" value="NA"> </option>
            <option name="nothing" value="nothing">Nothing, the colors just make the game prettier</option>
            <option name="pointdirection" value="pointdirection">The tendency of the flipper to point to the right or to the left</option>
            <option name="speed" value="speed">The speed at which the flipper switches position</option>
            <option name="times" value ="times">The number of times the flipper changed position</option>
        </select>
        </form><br></br>
        <br></br>
        <button style={buttonStyle} onClick={()=>handleClick()}>Click here to start the task</button>

            </div>
        )
    }


    
        
    const pages = [<PageOne />, <PageTwo />, <PageThree />, <PageFour />, <PageFive />, <PageSix />, <PageSeven />]
    return (
        <div>
           {pages[currentPage]}

        </div>
    )
}