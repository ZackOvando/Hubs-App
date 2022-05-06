import { connect } from "react-redux";
import React from "react";
import Header from "../../universal-components/main-header/header";
import NavBar from "../../universal-components/navigation-components/side-nav-bar";
import { List } from "../../services/list";
import "./case-studies.css"
import Footer from "../../universal-components/footer/footer";

class CaseStudy extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
                <Header title={this.props.routes.header.title} list={this.props.routes.header.items} />
                <div id="case-studies-body">
                    {
                        this.props.routes.list.map((item, key) =>
                            <List titles={item.title} category={item.category} casestudy={item.casestudy}/>
                        )
                    }
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        routes: state.routes.routes[1]
    }
}
export default connect(mapStateToProps)(CaseStudy)