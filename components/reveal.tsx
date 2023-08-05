import React, {useRef, useEffect} from 'react'
import {motion, useAnimation, useIsPresent, useInView} from 'framer-motion'


const Reveal = ({children}:any) => {
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
            hidden:{translateY :75, opacity:0 },
            visible:{translateY :0, opacity:1 },
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

export default Reveal