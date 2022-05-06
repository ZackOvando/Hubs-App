import React from "react"
import HomeBody from "../home-body/home-body";
import Header from "../../universal-components/main-header/header";
import { connect } from "react-redux"
import "./home.css"
class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <Header title={this.props.routes.title} list={this.props.routes.items} />
                <HomeBody />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        routes: state.routes.routes[0].header
    }
}
export default connect(mapStateToProps)(Home)