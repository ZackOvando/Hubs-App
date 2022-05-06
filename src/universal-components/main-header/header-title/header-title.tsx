import React, { FC } from 'react'
import { motion, Variants, useViewportScroll, useTransform,useMotionValue } from "framer-motion";
interface IProps {
    title: string
}
export const HeaderTitle: FC<IProps> = ({ title }: IProps) => {
    const { scrollY } = useViewportScroll();
    const x = scrollY
    const xRange = [-200, -100, 100, 300]
    const opacityRange = [0, 1, 1, 0]
    const opacity = useTransform(scrollY, xRange, opacityRange)
    return (
        <motion.h1
      animate={{ x: 130 }}
      style={{ opacity, x }}
        >{title}</motion.h1>
    )
}
