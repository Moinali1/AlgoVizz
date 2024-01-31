import React from "react";
import './css/Main.css'
import Nav from './Nav.js';
import MainPrimary from "./MainPrimary";
import MainRecommendation from "./MainRecommendation";
import HowItWorks from "./HowItWorks";
import Visualizer from "./Visualizer";
import Footer from "./Footer";

const Main=()=>{
return(
    <div>
        <Nav />
        <MainPrimary />
        <MainRecommendation />
        <HowItWorks />
        {/* <Visualizer /> */}
        <Footer />
    </div>
)
}

export default Main;