import React from "react";
import ContactSlider from "../contact/contact";
import "./footer.css"
const Footer = () => {
    return (
        <>
        <ContactSlider/>
        <div id="footer-container">
            <div>
                <h2>Bringing the future, today.</h2>
            </div>
            <div>
                <h2>Offices</h2>
                <p>Los Angeles</p>
                <p>NYC</p>
            </div>

            <div>
                <h2>EST. 2019</h2>
            </div>
        </div>
        </>
    )
}
export default Footer