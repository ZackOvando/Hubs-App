import React, { useState } from "react"
import "./portfolio-items.css"
import car from "../../assets/portfolio/client1/header.jpg"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import toyota from "../../assets/portfolio/client1/toyota.svg"
const hoverable = {
    on: {
        width: "100%"
    },
    off: {
        width: "100%"
    }
}
const ColorPalette = (props) => {
    return (
        <div className="portfolio-item-content-container">
            <h2 className="portfolio-item-content-title">Color Palette</h2>
            <div className="portfolio-item-content-divider" />
            <div className="color-palette">
                {
                    props.colors.map(index =>
                        <div className="color-palette-outer">
                            <div className="color-palette-inner" style={{ backgroundColor: index }}></div>
                            <h3>{index}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const Logo = (props) => {
    return (
        <div className="portfolio-item-content-container">
            <h2 className="portfolio-item-content-title">Main Logo</h2>
            <div className="portfolio-item-content-divider" />
            <div className="portfolio-logo">
                <img src={toyota} />
            </div>
        </div>
    )
}

const PortfolioItem = (props) => {

    const [hover, setHover] = useState(true);

    const hovertoggle = () => {
        setHover(!hover)
    }
    return (
        <>
            <div className="portfolio-item-header" style={{ backgroundImage: `url(${car})`, height: window.innerHeight, width: window.innerWidth }}>
                <motion.div className="portfolio-item-title" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                    <p>Title of Service</p>
                    <h2>Toyota</h2>
                    <FontAwesomeIcon icon={faArrowDown} size="3x" />
                </motion.div>
            </div>
            <div className="portfolio-item-sub-header">
                <div className="portfolio-item-row">
                    <div className="portfolio-item-work-list">
                        <h2>Work Done</h2>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                    </div>

                    <div className="portfolio-item-work-client">
                        <h2>Client</h2>
                        <h3>Toyota</h3>
                    </div>

                    <div className="portfolio-item-work-breakdown">
                        <h2>About</h2>
                        <p>Chicolle it’s a brand new cosmetic in the market place. It’s about to say the world how beautiful you are! We speak here about healthcare and self-care! People who work at Chicolle totally support natural beauty. We think everybody is special. We want to help people to take care of their skin. Chicolle is fighting against those who believe that skin imperfections need to be hidden. We believe that you should take care of yourself and Chicolle will try to help you with this.</p>
                    </div>
                </div>

            </div>
            <div className="portfolio-item-content">
                {props.children}
            </div>
            <div></div>
        </>
    )
}
export { PortfolioItem, ColorPalette, Logo };