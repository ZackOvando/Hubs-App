import React from 'react'
import "./mobile-blocker.css"
import image from "../../assets/underconstruction.png"
function Mobileblocker() {
    return (
        <div id="mobile-blocker-container">
            <img src={image} alt="under construction" />
            <h1>This is still a demo site. <br/>The mobile version is still under construction.</h1>
        </div>
    )
}

export default Mobileblocker