import React from "react";
import "./home-body.css"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Example } from "./test.tsx";
import "./test.css"
import { Word } from "./word";
import { Box } from "./boxes";
import PortfolioNavigation from "./portfolio-navigation/portfolio-navigation";
import reducer from "../../redux/swapper/swapper.reducer";
import { List } from "../../services/list";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../universal-components/universal-css/universal-css.css"
const check = ["one", "two", "three"]
const HomeBody = (props) => {
    return (
        <>
            <motion.div id="home-body-outer">
                <div id="home-body-inner-over">
                    <Word />
                    <Box start={.35} end={.40} />
                </div>
                <PortfolioNavigation />
                <List titles={props.routes.title} category={props.routes.category} casestudy={props.routes.casestudy} />
                <Link to="/case-studies" className="main-button">All Case Studies</Link>
            </motion.div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        routes: state.routes.routes[0].list[0]
    }
}
export default connect(mapStateToProps)(HomeBody)

/*


        <motion.div id="home-body-outer">
            <div id="home-body-inner-over">
                <Word>One</Word>
                <Box/>
            </div>
            <div id="home-body-inner-under">
                <Example margintop="20rem" />
                <Example margintop="0rem" />
                <Example margintop="8rem" />
            </div>

        </motion.div> 


*/