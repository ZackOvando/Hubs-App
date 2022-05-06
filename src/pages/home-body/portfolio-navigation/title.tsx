import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
const Title = () => {
    const popup = {
        open: {
          x: 0,
          opacity:1,
          transition:{
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
    const [value, setValue] = useState<boolean>(false);
    const { scrollYProgress } = useViewportScroll();
    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            if (scrollYProgress.get() > 0.5) {
                setValue(true)
            }
        });
    });
    return (
        <motion.h2
            id="portfolio-title"
            variants={popup}
            initial="closed" animate={value ? "open":"closed"}
            >Our Services</motion.h2>
    );
};
export default Title;