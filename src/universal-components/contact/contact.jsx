import React, {useState} from "react";
import "./contact.css"
import {motion} from "framer-motion"
import HeaderItem from "../main-header/header-items/header-items";
const firsttext = {
    on:{
        x:window.innerWidth
    },
    off:{
        x:0,
        transition:{
            type:"spring",
            ease:"easeInOut"
        }
    }
}
const line = {
    on:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            ease:"easeInOut"
        }
    },
    off:{
        opacity:0,
        y:800
    }
}
const ContactSlider = () => {
    const [hover, setHover] = useState(false)
    const test = () => {
        setHover(!hover)
    }
    return (
        <div onMouseEnter={test} onMouseLeave={test} className="contact-container">
            <motion.h2 variants={firsttext} initial="off" animate={hover ? "on":"off"} transition={{ease:"easeInOut", duration:.5}}>Contact Us</motion.h2>
            <motion.div id="contact-line"
            variants={line} initial="off" 
            animate={hover ? "on":"off"}
            transition={{ease:"easeInOut", duration:.5}}>
                <HeaderItem content="Project Form"/>
                <HeaderItem content="info@thehubcentral.org"/>
            </motion.div>
        </div>
    )
}
export default ContactSlider;