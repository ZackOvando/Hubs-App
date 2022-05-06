import React from 'react';
import "./App.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CaseStudy from './pages/case-studies/case-studies';
import About from './pages/about/about';
import NavBar from './universal-components/navigation-components/side-nav-bar';
import Footer from './universal-components/footer/footer';
import { PortfolioItem, ColorPalette, Logo } from './pages/portfolio-items/portfolio-items';
import Home from './pages/home/home';
import Mobileblocker from './pages/mobile-blocker/mobile-blocker';
function App() {
  const list = ["#FF5733", "#FFF333", "#FF5733", "#FFF333"]
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Mobileblocker />
        <div id="desktop-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<PortfolioItem><Logo /><ColorPalette colors={list} /></PortfolioItem>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
/*
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import React from 'react';
import NavBar from './universal-components/navigation-components/side-nav-bar';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/counter/counter.action"
function App(props) {
  return (
    <>
      <div>

      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}
/*
<NavBar />
      <Home />
export default connect(mapStateToProps, mapDispatchToProps)(App)
*/