import React, { useState, useEffect, FC } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
interface IProps {
  margintop: number
}
export const Example: FC<IProps> = ({margintop}: IProps) => {
  const { scrollYProgress } = useViewportScroll();
  return (
      <motion.div
        className="container"
      >
        <motion.div
          className="item"
          style={{
            scaleY: (scrollYProgress),
            marginTop:margintop
          }}
        />
      </motion.div>
  );
};