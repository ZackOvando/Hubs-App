import React, { useState, useEffect, FC } from 'react';
import { motion, useViewportScroll, useMotionValue, useTransform, useElementScroll } from "framer-motion";
import test from "../../assets/square/three.jpg"

interface IProps {
  end: number,
  start: number
}
export const Box: FC<IProps> = ({start,end}: IProps) =>  {
  const [value, setValue] = useState<boolean>(false);

  const [hover, setHover] = useState<boolean>(false);
  const { scrollYProgress } = useViewportScroll()
  let maybe = scrollYProgress
  const image = {
      over:{
        scale: .95
      },
      not:{
        scale:1
      }
  }
  const text = {
      hovered:{
        opacity:1
      },
      nothovered:{
        opacity:0
      }
  }
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (scrollYProgress.get() > start && scrollYProgress.get() < end) {
        setValue(true)
      }
      else{
        setValue(false)
      }
    });
  });
  function changeBackground() {
      const mayb = hover
    setHover(!mayb)
  }
    return (
        <motion.div id="case-work-study"
        >
            <div className="boxes">
                <motion.img onMouseOver={changeBackground} onMouseOut={changeBackground}src={test} animate={value ? "over":"not"} whileHover={{filter:"grayscale(80%)"}} variants={image} transition={{ease:"easeInOut"}}/>
                <motion.h2 animate={hover ? "hovered" : "nothovered"} variants={text}>TESTING</motion.h2>
            </div>
        </motion.div>
    );
};