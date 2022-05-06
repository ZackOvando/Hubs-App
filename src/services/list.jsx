import React from "react"
import { Listitem } from "./list-items/list-items"
import "./list.css"
import one from "../assets/horizontal/one.jpg"
import two from "../assets/horizontal/two.jpg"
import three from "../assets/horizontal/three.jpg"
import { isPropertySignature } from "typescript"
const list = [one, two, three]
export const List = (props) => {
    return (
        <div id="list-container">
            <h2 className="list-title">{props.titles}</h2>
            {
                list.map((item,key) =>
                    <Listitem imagelink={item} category={props.category} casestudy={props.casestudy[key].title}/>
                )
            }
        </div>
    )
}