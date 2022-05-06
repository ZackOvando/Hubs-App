import React, { useState, useEffect } from 'react';
import ParagraphTwo from "../about/paragraph-components/jsx/paragraph-two";
import "./contact.css"
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div id="main-contact-page">
            <div id="form-container">
                <h1>Reach out. Lets transform the world together.</h1>
                <form className="forms">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="company" placeholder="Company" />
                    <input type="text" name="message" placeholder="Message" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <ParagraphTwo paragraph="Full-service digital agency empowering enterprise companies. We focus on enabling digital competence through strategy and technology. We help our partners execute their digital transformation through strategic consulting and product development. I like Cheese" />
            <ParagraphTwo paragraph="Full-service digital agency empowering enterprise companies. We focus on enabling digital competence through strategy and technology. We help our partners execute their digital transformation through strategic consulting and product development. I like Cheese" />
        </div>
    )
}
export default Contact;