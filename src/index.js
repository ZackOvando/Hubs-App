import React from 'react';
import componentDidMount from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./redux/store"
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CaseStudy from './pages/case-studies/case-studies';
import About from './pages/about/about';
import NavBar from './universal-components/navigation-components/side-nav-bar';
import Footer from './universal-components/footer/footer';
import Contact from './pages/contact/contact';
import { PortfolioItem, ColorPalette, Logo } from './pages/portfolio-items/portfolio-items';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Home from './pages/home/home';
const rootElement = document.getElementById("root");
const list = ["#FF5733", "#FFF333", "#FF5733", "#FFF333"]
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
/*


    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<PortfolioItem><Logo/><ColorPalette colors={list}/></PortfolioItem>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

*/
// If you want to start measuring performance in your app, pass a function <Contact/>
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
