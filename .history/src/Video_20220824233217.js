import React from "react";
import video1 from './video/video-1.mp4'
function Video(porps) {






    return (

        <>
            <video 
            ref={porps.useVideoRef}
            src={video1}
                width={280}>

            </video>
            <button>p</button>
            <button>po</button>
        </>
    )
}
export default Video 