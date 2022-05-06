import React from "react";
import "./menu-icon.css";
import { motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux';


class MenuIcon extends React.Component{
  render(){
    return (
        <div onClick={this.props.togglefunction} id="menu-icon">
            
            <div id="inner-menu-icon-container">
                <div id="menu-line-one"></div>
                <div id="menu-line-two"></div>
            </div>

        </div>
      )
  }
}
export default MenuIcon;