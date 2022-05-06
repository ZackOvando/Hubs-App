import React, { useState } from 'react'
import "./ComingSoon.css"
import { motion } from "framer-motion"
import logo from "../../assets/logo/logo.png"

function ComingSoon() {
    const [hover, setHover] = useState(false)
    const [footer, setFooter] = useState(false)
    const [item, setItem] = useState(0)
    const list = ["CREATE.", "GROW.", "EVOLVE."]
    const colorlist = ["black", "#3fc4dc", "#0e4685", "#2e3171"]
    const hoverToggler = (index) => {
        if (!hover) {
            document.body.style.backgroundColor = colorlist[index + 1];
        }
        else {
            document.body.style.backgroundColor = colorlist[0];
        }
        setHover(!hover)
        setItem(index)
    }
    return (
        <div className={!hover ? "coming__soon__container" : "coming__soon__container hovered"}>
            <div id="coming__soon__content">
                <div id="coming__soon__header">
                    <p>The Hub Central Consulting</p>
                    <img src={logo} id="logo" className={true ? "show" : "hide"} />
                </div>
                <div id="coming__soon__title">
                    {
                        list.map((index, key) =>
                            <motion.div id="lol" className={hover && key == item ? "nothoveredItem" : (!hover ? "hoveredItem" : " hoveredItem gone")} key={key} onMouseOver={() => hoverToggler(key)} onMouseOut={() => hoverToggler(key)}>
                                <h1>{index}</h1>
                            </motion.div>
                        )
                    }
                </div>
                <div id="coming__soon__footer">
                            <a href={item.link} style={{color:'white'}} className='coming__soon_item disabled'>Revamp Coming Soon</a>
                    {
                        contact.map(item =>
                            <a href={item.link} style={{color:'white'}} className='coming__soon_item'>{item.title}</a>
                        )
                    }
                </div>
            </div>
            <div id="coming__soon__logo">

            </div>
        </div>
    )
}

const contact = [
    {
        title:"info@thehubcentral.org",
        link:"mailto:info@thehubcentral.org?subject=Let's talk!"
    }, 
    {
        title:"+1 (213) 290 3385",
        link:"tel:+1-213-290-3385"
    },]

export default ComingSoon