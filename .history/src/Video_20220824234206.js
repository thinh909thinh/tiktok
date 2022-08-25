import { forwardRef } from 'react'
import video1 from './video/video-1.mp4'
function Video(porps,ref) {

      }
    return (

        <>
            <video 
            ref={ref}
            src={video1}
                width={280}>

            </video>

        </>
    )
}
export default forwardRef(Video )