import React from "react"
import HeaderItem from "./header-items/header-items";
import { HeaderTitle } from "./header-title/header-title";
import "./header.css"
class Header extends React.Component{
    render(){
        return (
            <div className="header-one-outer-container" style={{width:window.innerWidth, height:window.innerHeight}}>
                <div className="header-one-inner-container">
                    <HeaderTitle title={this.props.title}/>
                    <div>
                        {
                        this.props.list.map( index => 
                            <HeaderItem content={index}/>
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
//<Letteranimation/>