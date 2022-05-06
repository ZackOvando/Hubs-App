import React, { useState, set } from "react"
import { motion } from "framer-motion";
import "./menu-items.css"

import { connect } from 'react-redux'
import { swapBoolean } from "../../../redux/swapper/swapper.action";
// import { Link } from 'react-router-dom';
// import { Nav } from "react-bootstrap"

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
};
const tester = {
  closed: {
    width: 0,
    transition: {
      duration: .7
    }
  },
  open: {
    width: "5rem",
    transition: {
      duration: .7
    }
  }
}
const tester2 = {
  closed: {
    width: 0,
    transition: {
      duration: .7
    }
  },
  open: {
    width: "100%",
    transition: {
      duration: .7
    }
  }
}
const Change = (props) => {
  const [hover, setHover] = useState(false);
  const onHoverToggle = () => {
    const change = hover
    setHover(!change)
  }
  if (!props.functionexist) {
    return (

      <Link className={hover ? "menu-item color-change" : "menu-item"} to={props.route}>
        <motion.div onMouseEnter={onHoverToggle} onMouseLeave={onHoverToggle} className="menu-item-div" onClick={props.togglefunction}>
          <motion.p animate={hover ? { color: "#3fc4dc" } : { color: "black" }} className="item-numbers">01</motion.p>
          <motion.div variants={tester} animate={hover ? "open" : "closed"} className="menu-item-bar"></motion.div>
          <div class="space"></div>
          <motion.li
            className="menu-item"
            variants={variants}
            animate={hover ? { color: "#3fc4dc" } : { color: "black" }}
          >
            <Link className={hover ? "menu-item color-change" : "menu-item"} to={props.route}>{props.name}</Link>
          </motion.li>
        </motion.div>
      </Link>
    )
  }
  else {
    return (
      <motion.div onMouseEnter={() => props.swapRedexBool()} onMouseLeave={() => props.swapRedexBool()} className="menu-item-div-2" onClick={props.togglefunction}>
        <motion.p animate={props.portfoliolist[props.i].bool ? { color: "#3fc4dc" } : { color: "white" }} className="item-numbers-2">0{props.i}</motion.p>
        <div />
        <div id="MAYBE">
          <motion.li
            className="portfolio-list"
            variants={variants}
            animate={props.portfoliolist[props.i].bool ? { color: "#3fc4dc" } : { color: "white" }}
          >
            {props.portfoliolist[props.i].name}
          </motion.li>
          <motion.div variants={tester2} initial={"closed"} animate={props.portfoliolist[props.i].bool ? "open" : "closed"} class="menu-item-bar-2"></motion.div>
        </div>
      </motion.div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    portfoliolist: state.swapper.portfoliolist
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    swapRedexBool: () => dispatch(swapBoolean(ownProps)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Change)
  /*
<Nav.Item>
<Nav.Link className="nav-link" as={Link} to={props.route}>{props.name}</Nav.Link>
</Nav.Item>
*/