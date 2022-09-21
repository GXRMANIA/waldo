import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import start from "./firebase";
import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main scoreboard={scoreboard} setScoreboard={setScoreboard} />} />
        <Route path="/scoreboard" element={<Scoreboard scoreboard={scoreboard}/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
