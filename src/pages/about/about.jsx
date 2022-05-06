import React, { useState, useEffect } from 'react';
import Header from "../../universal-components/main-header/header";
import { connect } from "react-redux";
import "./about.css"
import ParagraphOne from "./paragraph-components/jsx/paragraph-one";
import ParagraphTwo from "./paragraph-components/jsx/paragraph-two";
const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Header title={props.routes.header.title} list={props.routes.header.items} />
            <ParagraphTwo paragraph="Full-service digital agency empowering enterprise companies. We focus on enabling digital competence through strategy and technology. We help our partners execute their digital transformation through strategic consulting and product development. I like Cheese" />
            <ParagraphTwo paragraph="Full-service digital agency empowering enterprise companies. We focus on enabling digital competence through strategy and technology. We help our partners execute their digital transformation through strategic consulting and product development. I like Cheese"/>
            <h2 className="about-subtitle">Our Services</h2>
            <ParagraphOne title="Paragraph One" paragraph="At the core of what we offer as a digital agency is an effective approach to creating a fulfilling and remarkable digital experience for our brands. In a more connected and accessible world, organizations must engage with customers across multiple platforms. With our strategic alignment and implementation capabilities, G & Co. helps brands take creative thinking and ideation into a tangible, memorable reality." />
            <ParagraphOne title="Paragraph One" paragraph="At the core of what we offer as a digital agency is an effective approach to creating a fulfilling and remarkable digital experience for our brands. In a more connected and accessible world, organizations must engage with customers across multiple platforms. With our strategic alignment and implementation capabilities, G & Co. helps brands take creative thinking and ideation into a tangible, memorable reality." />
            <div style={{marginTop:"10rem"}}></div>
            <h2 className="about-subtitle">About The Hub Central</h2>
            <ParagraphOne title="Paragraph One" paragraph="At the core of what we offer as a digital agency is an effective approach to creating a fulfilling and remarkable digital experience for our brands. In a more connected and accessible world, organizations must engage with customers across multiple platforms. With our strategic alignment and implementation capabilities, G & Co. helps brands take creative thinking and ideation into a tangible, memorable reality." />
            <ParagraphOne title="Paragraph One" paragraph="At the core of what we offer as a digital agency is an effective approach to creating a fulfilling and remarkable digital experience for our brands. In a more connected and accessible world, organizations must engage with customers across multiple platforms. With our strategic alignment and implementation capabilities, G & Co. helps brands take creative thinking and ideation into a tangible, memorable reality." />
        </>
    )
}
const mapStateToProps = state => {
    return {
        routes: state.routes.routes[2]
    }
}
/*
<div id="about-body">
                
            </div>
*/
export default connect(mapStateToProps)(About)