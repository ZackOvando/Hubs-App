import React from "react"
import "./tester.css"
import {motion} from 'framer-motion/dist/es/index'
const tester={
    closed:{
        width:0
    },
    open:{
        width:"10rem"
    }
}
class Tester extends React.Component{
    state ={
        onhovertoggle:false
    }

    onHoverToggle = () => {
        const change = this.state.onhovertoggle
        this.setState({ onhovertoggle: !change })
    }
    render(){
        return (
            <>
            <motion.div onMouseEnter={this.onHoverToggle} onMouseLeave={this.onHoverToggle} id="tester-one" >

                <motion.div variants={tester} animate={this.state.onhovertoggle ? "open":"closed"} id="testerline"/> <p>header</p>

            </motion.div>
            </>
        )
    }
}
export default Tester;