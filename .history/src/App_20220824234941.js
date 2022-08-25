import React from "react";
import { useRef } from 'react'
// import { useState, useReducer, useEffect ,useMemo } from "react";
import Video from "./Video";

function App() {
  const useVideoRef = useRef()
  const handlePlay = () => {
    useVideoRef.play()
  }
  const handlePause = () => {
    useVideoRef.pause()
  }

  return (
    <div>
      <h1>React</h1>
      <Video ref={useVideoRef}></Video>
      <button onClick={handlePlay}>p</button>
      <button onClick={handlePause}>pause</button>
    </div>

  );
}


export default App;
