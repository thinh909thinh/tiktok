import { forwardRef } from 'react'
import video1 from './video/video-1.mp4'
function Video(porps,ref) {
    const   handlePlay=()=>{
        useVideoRef.current.play()
      }
      const   handlePause=()=>{
        useVideoRef.current.pause()
      }
    return (

        <>
            <video 
            ref={ref}
            src={video1}
                width={280}>

            </video>
            <button>p</button>
            <button>po</button>
        </>
    )
}
export default forwardRef(Video )