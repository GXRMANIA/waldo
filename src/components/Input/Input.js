import React, { useState, useEffect } from 'react';
import start from "../../firebase";
import { Link } from 'react-router-dom';
import './Input.css'

function Input(props) {

  const [username, setUsername] = useState("");

  function onInputChange(e) {
    setUsername(e.target.value)
  }

  function submit() {
    start.then(res => {
      res.addUser(username, props.time);
      let scoreboard = res.getScoreboard();
      scoreboard.then(sb => {
        props.setScoreboard(sb)
      })
    })
  }

  return (
    <div className="input">
      <p>Your time: <code>{props.time}</code> seconds</p>
      <p>Enter your name to be in the leaderboard!</p>
      <input onChange={onInputChange} type="text" placeholder="Your Name..."/>
      <Link to="/scoreboard">
        <button onClick={submit}>Submit</button>
      </Link>
    </div>
  );
}

export default Input;
