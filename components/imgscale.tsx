import React, {useRef, useEffect} from 'react'
import {motion, useAnimation, useIsPresent, useInView} from 'framer-motion'


const Imgscale = ({children}:any) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true});
    const controls = useAnimation()

    useEffect(() => {
        if(isInView){
            controls.start("visible")
        }
    }, [isInView])
    
  return (
    <div ref={ref} style={{overflow:'hidden'}}>
        <motion.div
        variants={{
            hidden:{ scale:"1.2", height:"150%" },
            visible:{ scale:"1", height:"100%" },
        }}
        initial="hidden"
        animate={controls}
        transition={{duration:1, delay:0.25, ease:"easeInOut" }}
        >
{children}
        </motion.div>
    </div>
  )
}

export default Imgscale