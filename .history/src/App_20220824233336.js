import React from "react";
import {useRef} from 'react'
// import { useState, useReducer, useEffect ,useMemo } from "react";
import Video from "./Video";

function App() {
const useVideoRef= useRef()
console.log(useVideoRef)
  return (
   <div>
    <h1>React</h1>
    <Video ref={useVideoRef}></Video>
   </div>

  );
}


export default App;
