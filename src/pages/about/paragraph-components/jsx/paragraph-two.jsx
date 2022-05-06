import React from "react";
import { isPropertySignature } from "typescript";
import "../paragraph-components.css"
const ParagraphTwo = (props) => {
    return (
        <div className="paragraph-component paragraph-component-two">
            <div></div>
            <div>
                <p>{props.paragraph}</p>
            </div>
            <div></div>
        </div>
    )
}
export default ParagraphTwo;