import React, { FC } from 'react'
import { motion, Variants, useViewportScroll } from "framer-motion";


interface IProps {
    content: string,
    value: boolean,
    index: number
  }
export const WordItem: FC<IProps> = ({content,value,index}: IProps) => {
  const lol = {
    open: {
      x: 0,
      opacity:1,
      transition:{
          delay:((index + .01)/8),
          duration:.5,
          ease:"easeInOut",
          type:"spring"
      }
    },
    closed: {
      x: -100,
      opacity:0
    }
  };
  return (  
    <motion.h2 variants={lol} custom={index} initial="closed" animate={value ? "open":"closed"}>{content}</motion.h2>
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