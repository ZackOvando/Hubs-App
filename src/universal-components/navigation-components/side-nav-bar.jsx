import React, { useState, useEffect } from 'react';
import MenuIcon from "./menu-icon/menu-icon.jsx";
import "./side-nav-bar.css"
import { motion } from "framer-motion"
import OverlayMenu from "./overlay-menu/overlay-menu.jsx";
const tester = {
    closed: {
        x: 100
    },
    open: {
        x: 0
    }
}
const text = {
    closed: {
        opacity: 0
    },
    open: {
        opacity: 1
    }
}
const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const [hovertoggle, setHoverToggle] = useState(false)
    const togglehandler = () => {
        setToggle(!toggle)
    }
    const hoverToggleHandler = () => {
        setHoverToggle(!hovertoggle)
    }
    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            console.log(event)
        });
    }, []);
    return (
        <>
            <div
                onMouseEnter={hoverToggleHandler}
                id="nav-bar-container-under">
                    <motion.h3 variants={text} animate={!hovertoggle ? "open":"closed"}>hover for menu</motion.h3>
            </div>
            <motion.div
                onMouseLeave={hoverToggleHandler}
                variants={tester}
                initial="closed"
                animate={hovertoggle ? "open" : "closed"}
                id="nav-bar-container">
                <MenuIcon togglefunction={togglehandler} />
            </motion.div>
            <OverlayMenu togglefunction={togglehandler} togglevalue={toggle} />
        </>
    )
}
export default NavBar;