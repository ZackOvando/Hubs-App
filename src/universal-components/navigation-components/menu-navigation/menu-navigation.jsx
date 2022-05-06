import React from "react";
import { motion } from "framer-motion"
import Change from "../menu-items/menu-items";
import "./menu-navigation.css"
const variants = {
    open: {
        transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


export const MenuNavigation = (props) => {
    return (
        <>
            <motion.ul
                variants={variants}
                className="nav-list">

                {
                    props.list.map(i => (
                        <Change togglevalue={props.togglevalue} key={i.key} i={i.key} name={i.routeName} route={i.route} togglefunction={props.togglefunction} styling={props.styling} functionexist={props.functionexist}/>
                    )) 
                }
            </motion.ul>
        </>
    )
}