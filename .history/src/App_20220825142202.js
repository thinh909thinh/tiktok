import React from "react";
import { useContext } from "react";
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
       <h1>hello</h1>
      </div>
  )
}
export default App;
