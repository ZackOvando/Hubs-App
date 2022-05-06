import React, { useState, useEffect } from "react";
import "./list-items.css"
import { motion, useMotionValue } from "framer-motion"
export const Listitem = (props) => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        };
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    const viewtoggle = {
        on: {
            opacity: 1,
            y: 0
        },
        off: {
            opacity: 0,
            y: -20
        }
    }
    const [bool, setBool] = useState()
    const hoverToggler = () => {
        setBool(!bool)
    }
    return (
        <>
            <div onMouseOver={hoverToggler} onMouseOut={hoverToggler} className="list-item-container">
                <div className="list-title-container">
                    <p>{props.category}</p>
                    <h2>{props.casestudy}</h2>
                </div>
                <motion.a variants={viewtoggle} initial="off" animate={bool ? "on" : "off"} transition={{ ease: "easeInOut", duration: .3 }}>view</motion.a>
            </div>
            <motion.img
                className={bool ? "cursor normal" : "nope normal"}
                src={props.imagelink}
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
            />
        </>
    )
}