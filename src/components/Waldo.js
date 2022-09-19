import waldoImg from "../waldo.jpg"
import TargetingBox from "./TargetingBox";
import Input from "./Input/Input";
import './Waldo.css'
import React, { useState, useEffect } from 'react';

function Waldo(props) {

    const [boxVisible, setBoxVisible] = useState(false)
    const [gameover, setGameover] = useState(false)
    const [watchedArea, setWatchedArea] = useState({
        xStart: 0,
        xEnd: 0,
        yStart: 0,
        yEnd: 0,
        xPos: 0,
        yPos: 0,
    });

   
    function submitArea(e) {
      let waldosArea = props.waldosArea.then(res => {
        console.log(watchedArea, res)
        if((watchedArea.xStart < res.startX && watchedArea.xStart < res.endX)) {
          if(watchedArea.yStart < res.startY && watchedArea.yStart < res.endY) {
            console.log("juhuuu")
          }
        }
      })
    }


    function clickOnImg(e) {
      console.log(e.clientX, e.clientY)
      if(e.clientX > 499 || e.clientY > 340) return;
        setBoxVisible(true)
        setWatchedArea({
          xStart: e.clientX-50,
          xEnd: e.clientX+50,
          yStart: e.clientY-50,
          yEnd: e.clientY+50,
          xPos: e.clientX,
          yPos: e.clientY,
        })        
    }

    let showTargetingBox = boxVisible ?  <TargetingBox submitArea={submitArea} watchedArea={watchedArea}/> : null

    return (
      <div>
        <div onClick={clickOnImg} className="imgWrapper">
          <img alt="Waldo Image" src={waldoImg}/>
          {showTargetingBox}
        </div>
        <Input/>
      </div>
    );
  }
  
  export default Waldo;
  