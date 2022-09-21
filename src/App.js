import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import start from "./firebase";
import './App.css'
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {


  const [scoreboard, setScoreboard] = useState([]);
  useEffect(() => {
    start.then(res => {
      let sb = res.getScoreboard();
      sb.then(res => {
        setScoreboard(res)
      })
    })
  }, [])


  return (
    <div className="app">
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main scoreboard={scoreboard} setScoreboard={setScoreboard} />} />
          <Route path="/scoreboard" element={<Scoreboard scoreboard={scoreboard}/>} />
          </Routes>
      </HashRouter>
    </div>

  );
}

export default App;
