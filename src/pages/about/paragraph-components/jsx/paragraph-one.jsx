import React from "react";
import { motion } from "framer-motion";
import "../paragraph-components.css"
const paragraphhover = {
    enter:{
        scale:.95
    },
    exit:{
        scale:1
    }
}
const ParagraphOne = (props) => {
    return (
        <motion.div initial="exit" whileHover="enter" variants={paragraphhover} className="paragraph-component paragraph-component-one">
            <div></div>
            <div className="paragraph-component-title">
                <h2>{props.title}</h2>
                <h2>{"{01}"}</h2>
            </div>
            <div className="paragraph-component-paragraph">
                <p>{props.paragraph}</p>
            </div>
            <div></div>
        </motion.div>
    )
}
export default ParagraphOne;

/*

*/