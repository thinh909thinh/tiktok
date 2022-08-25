import { forwardRef } from 'react'
import video1 from './video/video-1.mp4'
function Video(porps) {


console.log(porps.ref)



    return (

        <>
            <video 
            ref={porps.ref}
            src={video1}
                width={280}>

            </video>
            <button>p</button>
            <button>po</button>
        </>
    )
}
export default forwardRef(Video )