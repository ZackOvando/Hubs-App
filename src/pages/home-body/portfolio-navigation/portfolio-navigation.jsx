import React, { useState } from "react";
import { MenuNavigation } from "../../../universal-components/navigation-components/menu-navigation/menu-navigation";
import "./portfolio-navigation.css"
import { motion } from "framer-motion";
import { connect } from "react-redux"
import { swapBoolean } from "../../../redux/swapper/swapper.action"
import one from "../../../assets/long/one.jpg"
import two from "../../../assets/long/two.jpg"
import three from "../../../assets/long/three.jpg"
import four from "../../../assets/long/four.jpg"
import sone from "../../../assets/square/one.jpg"
import stwo from "../../../assets/square/two.jpg"
import sthree from "../../../assets/square/three.jpg"
import sfour from "../../../assets/square/four.jpg"
import hone from "../../../assets/horizontal/one.jpg"
import htwo from "../../../assets/horizontal/two.jpg"
import hthree from "../../../assets/horizontal/three.jpg"
import hfour from "../../../assets/horizontal/four.jpg"
import Title from "./title.tsx";
const hovertext = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1
    }
}
const images = {
    on: {
        opacity: 1,
        scale: 1.5,
        transition: {
            ease: "easeInOut",
            duration: .5
        }
    },
    off: {
        scale: 2,
        opacity: 0,
        rotate: 30,
        transition: {
            ease: "easeInOut",
            duration: .5
        }
    }
}
const listtest = [one, two, three, four]
const listtwo = [sone, stwo, sthree, sfour]
const listthree = [hone, htwo, hthree, hfour]
// THE THING IS THE PROBLEM
const PortfolioNavigation = (props) => {
    const [list, setList] = useState(props.portfolioList)
    return (
        <>
            <Title/>
            <div id="portfolio-container" >
                <div className="first">
                    <div className="first-img">
                        {
                            listtest.map((item, index) =>
                                <motion.img animate={props.portfolioList[props.currentIndex].bool && props.currentIndex === index ? "on" : "off"} variants={images} src={item} />
                            )
                        }
                    </div>
                    <motion.ul style={{ justifySelf: "center" }} animate={props.portfolioList[props.currentIndex].bool ? "show" : "hide"} variants={hovertext}>
                        {
                            props.portfolioList[props.currentIndex].content.map((item, index) =>
                                <li>{props.portfolioList[props.currentIndex].content[index]}</li>
                            )
                        }
                    </motion.ul>
                </div>
                <div className="middle-portfolio">
                    <MenuNavigation list={list} styling={"portfolio-list"} functionexist={true} />
                    <div className="middle-img">
                        {
                            listthree.map((item, index) =>
                                <motion.img animate={props.portfolioList[props.currentIndex].bool && props.currentIndex === index ? "on" : "off"} variants={images} src={item} />
                            )
                        }
                    </div>
                </div>
                <div className="second-img">
                    {
                        listtwo.map((item, index) =>
                            <motion.img animate={props.portfolioList[props.currentIndex].bool && props.currentIndex === index ? "on" : "off"} variants={images} src={item} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        portfolioList: state.swapper.portfoliolist,
        currentIndex: state.swapper.current,
        previousIndex: state.swapper.previous
    }
}

const mapDispatchToProps = dispatch => {
    return {
        swapRedexBool: () => dispatch(swapBoolean()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioNavigation);