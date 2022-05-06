import React, { useState, useEffect } from 'react';
import { motion, Variants, useViewportScroll } from "framer-motion";
import { WordItem } from './word-item';

export const Word = () => {
  const [value, setValue] = useState<boolean>(false);
  const { scrollYProgress } = useViewportScroll()
  const list = ["The", "Creative", "Studio"]

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (scrollYProgress.get() > 0.15) {
        setValue(true)
      }
    });
  });
  return (
    <motion.div
      id="box"
    >
        {
          list.map((i,index) => (
            <WordItem index={index} content={i} key={index} value={value}/>
          ))
        }
    </motion.div>
  )
}
/*å

    <motion.h1
      id="big-text"
      initial="offscreen"
      animate={value ? "onscreen":"offscreen"}
      variants={test}
    >ONE</motion.h1>
      
*/