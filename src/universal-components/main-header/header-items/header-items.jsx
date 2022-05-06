import React, {useState} from "react"
import "./header-items.css"
import {motion} from "framer-motion"
const HeaderItem = (props) => {
    const [hover, setHover] = useState(false)
    const hoverToggler = () => {
        setHover(!hover)
    }
    const headerline = {
        on:{
            width:"100%"
        },
        off:{
            width:0
        }
    }
    return (
        <div onMouseEnter={hoverToggler} onMouseLeave={hoverToggler} className="header-items-container">
            <h3>{props.content}</h3>
            <motion.div variants={headerline} className="header-item-line" initial="off" animate={hover ? "on":"off"} transition={{ease:"easeInOut"}}/>
        </div>
    )
}
export default HeaderItem;