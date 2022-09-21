import waldoImg from "../../waldo.jpg"
import TargetingBox from "../TargetingBox/TargetingBox";
import './WaldoImg.css'
import React, { useState, useEffect } from 'react';

function WaldoImg(props) {

    const [showTargetingBox, setShowTargetingBox] = useState(false);
    const [gameover, setGameover] = useState(false)
    const [watchedArea, setWatchedArea] = useState({
        xStart: 0,
        xEnd: 0,
        yStart: 0,
        yEnd: 0,
        xPos: 0,
        yPos: 0,
    });

    useEffect(() => {
      if(props.foundTiger === true && props.foundKid === true) {
        setGameover(true)
        props.stopTimer();
        props.setShowInput(true)
        props.setShowTask(false)
        console.log("Won")   
      }      
    }, [props.foundTiger, props.foundKid])


    function submitArea(e) {
      if(gameover) return;
      
      props.firebaseData.then(res => {
        console.log(watchedArea, res.data)
        if((watchedArea.xStart < res.data.startX && watchedArea.xEnd > res.data.endX)) {
          if(watchedArea.yStart < res.data.startY && watchedArea.yEnd > res.data.endY) {
            if(e.target.dataset.id === "tiger") props.setFoundTiger(true)
          }
        } 
        if((watchedArea.xStart < res.data2.startX && watchedArea.xEnd > res.data2.endX)) {
          if(watchedArea.yStart < res.data2.startY && watchedArea.yEnd > res.data2.endY) {
            if(e.target.dataset.id === "kid") props.setFoundKid(true)
          }
        }   
        
      })
    }

    function clickOnImg(e) {
      if(gameover) return;
      if(!props.enableTargetingBox) return;
      let rect = {};
      rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      console.log({x, y})
      if(x > 799 || y > 500 || x < 0 || y < 0) return;
      setShowTargetingBox(!showTargetingBox)
      setWatchedArea({
          xStart: x-50,
          xEnd: x+50,
          yStart: y-50,
          yEnd: y+50,
          xPos: x-50,
          yPos: y-50,
        })        
    }  
    
    let isTargetingBoxVisible = (showTargetingBox && props.enableTargetingBox) ? <TargetingBox submitArea={submitArea} watchedArea={watchedArea}/> : null;

    return (
        <div onClick={clickOnImg} className="imgWrapper">
          <img alt="Waldo map" src={waldoImg}/>
          {isTargetingBoxVisible}
        </div>
    );
  }
  
  export default WaldoImg;
  