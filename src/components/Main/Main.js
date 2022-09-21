import WaldoImg from "../WaldoImg/WaldoImg";
import Input from "../Input/Input"
import Task from "../Task/Task"
import Controls from "../Controls/Controls"
import start from "../../firebase";
import React, { useState } from 'react';
import './Main.css'

function Main(props) {

    const [startTime, setStartTime] = useState(0);
    const [showControls, setShowControls] = useState(true)
    const [showInput, setShowInput] = useState(false)
    const [showTask, setShowTask] = useState(false)
    const [enableTargetingBox, setEnableTargetingBox] = useState(false)
    const [foundTiger, setFoundTiger] = useState(false)
    const [foundKid, setFoundKid] = useState(false)
    const [time, setTime] = useState(0);

    function setTimer() {
      setStartTime(Date.now());
    }

    function stopTimer() {
      setTime((Date.now() - startTime)/1000)
    }

    let isControlsVisible = showControls ? <Controls setEnableTargetingBox={setEnableTargetingBox} setShowTask={setShowTask} setShowControls={setShowControls} setTimer={setTimer}/> : null
    let isInputVisible = showInput ? <Input time={time} setScoreboard={props.setScoreboard}/> : null;
    let isTaskVisible = showTask ? <Task foundKid={foundKid} foundTiger={foundTiger}/> : null;

    return (
      <div className="main">
          {isInputVisible}
          {isControlsVisible}
          {isTaskVisible}
          <WaldoImg foundKid={foundKid} foundTiger={foundTiger} setFoundKid={setFoundKid} setFoundTiger={setFoundTiger} enableTargetingBox={enableTargetingBox} setShowTask={setShowTask} setShowInput={setShowInput} firebaseData={start} stopTimer={stopTimer} time={time}/>
      </div>
    );
  }
  
  export default Main;
  