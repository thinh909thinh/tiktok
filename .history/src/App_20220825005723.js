import React from "react";
import { useRef } from 'react'
import { useState, useReducer, useEffect, useMemo, createContext } from "react";
import Content from './Video'
// import Video from "./Video";

// function App() {
//   const useVideoRef = useRef()
//   const handlePlay = () => {
//     useVideoRef.current.play()
//   }
//   const handlePause = () => {
//     useVideoRef.current.pause()
//   }

//   return (
//     <div>
//       <h1>React</h1>
//       <Video ref={useVideoRef}></Video>
//       <button onClick={handlePlay}>p</button>
//       <button onClick={handlePause}>pause</button>
//     </div>

//   );
// }
import{ThemeProvider,themeContex} from './themeContex'
function App() {
  return (
    <ThemeProvider>
      <div>
        <button onClick={tonggleTheme}>tonggle</button>
        <Content ></Content>
      </div>
      </ThemeProvider>
  )
}
export default App;
