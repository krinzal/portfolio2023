import React, {useRef, useEffect} from 'react'
import {motion, useAnimation, useIsPresent, useInView} from 'framer-motion'


const Imgreveal = ({children}:any) => {
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
            hidden:{clipPath: `inset(100% 100% 0% 0%)`  },
            visible:{ clipPath:'inset(0%)' },
        }}
        initial="hidden"
        animate={controls}
        transition={{duration:0.5, delay:0.25}}
        >
{children}
        </motion.div>
    </div>
  )
}

export default Imgreveal