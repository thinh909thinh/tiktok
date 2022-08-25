// import { forwardRef ,useImperativeHandle ,useRef} from 'react'
// import video1 from './video/video-1.mp4'
// function Video(porps,ref) {
//     const refs= useRef()
//     useImperativeHandle (ref,()=>({
//         play() {
//             refs.current.play()
//         },
//         pause() {
//             refs.current.pause()
//         }

//     }))
//     return (

//         <>
//             <video 
//             ref={refs}
//             src={video1}
//             width={280}>
            

//             </video>

//         </>
//     )
// }
// export default forwardRef(Video )
import Para from './Para'
function Content(){
return(
    <div>
        <Para />
    </div>
)
}
export default Content