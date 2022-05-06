import React from "react";
import "./overlay-menu.css";
import "../../universal-css/universal-css.css"
import { motion } from "framer-motion"
import { MenuItems } from "../menu-items/menu-items";
import { MenuNavigation } from "../menu-navigation/menu-navigation.jsx";
import { connect } from 'react-redux'

import { routerHub } from "../../../redux/router/router.action.js";
const tester = {
  closed: {
    x: -2200,
    transition: { ease: "easeInOut", duration: .5, delay: .5 },
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeInOut", type: "spring", duration: 1 }
  }
}
const exiticon = {
  closed: {
    transition: { ease: "easeInOut", duration: .5 },
    opacity: 0,
    x: 200
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", duration: 1 }
  }
}

class OverlayMenu extends React.Component {
  state = {
    exithover:false
  }
  hovertoggle = () => {
    const replacer = this.state.exithover
    this.setState({exithover:!replacer})
  }
  render() {
    const check = this.props.togglevalue
    console.log("in overlay menu" + this.props.togglevalue)
    return (
      <motion.div
        initial="closed"
        variants={tester}
        animate={this.props.togglevalue ? "open" : "closed"}
        id="overlay-container">
        <motion.div id="exit-icon" whileHover={{scale:1.1}} whileTap={{scale:1}} onMouseEnter={this.hovertoggle} onMouseLeave={this.hovertoggle} variants={exiticon} initial={"closed"} animate={this.props.togglevalue ? "open" : "closed"} onClick={this.props.togglefunction}>
            <motion.div id="x-icon-1" animate={this.state.exithover ? {backgroundColor:"#3fc4dc"}:{backgroundColor:"black"}}></motion.div>
            <motion.div id="x-icon-2" animate={this.state.exithover ? {backgroundColor:"#3fc4dc"}:{backgroundColor:"black"}}></motion.div>
        </motion.div>
        <MenuNavigation list={this.props.routes} togglevalue={check} togglefunction={this.props.togglefunction} functionexist={false} />
      </motion.div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    routes: state.routes.routes
  }
}
/*const mapDispatchToProps = () => {
  return {

  }
}*/
export default connect(mapStateToProps)(OverlayMenu);


const itemIDs = [
  {
    key: 0,
    name: "home",
    route: "/"
  },
  {
    key: 1,
    name: "home",
    route: "/webdev"
  },
  {
    key: 2,
    name: "home",
    route: "/graphicdesign"
  },
  {
    key: 3,
    name: "home",
    route: "/mediamanagement"
  },
  {
    key: 4,
    name: "marketing",
    route: "/marketing"
  }
]