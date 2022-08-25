import React from "react";
import { useContext } from "react";
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
import {themeContex} from './themeContex'

function App() {
  const context=useContext(themeContex)
  return (
      <div>
        <button onClick={context.tonggleTheme} >tonggle</button>
        <Content ></Content>
      </div>
  )
}
export default App;
