import React from "react";
import './css/Main.css'
import Nav from './Nav.js';
import MainPrimary from "./MainPrimary";
import MainRecommendation from "./MainRecommendation";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import SortVisualizer from "./SortVisualizer.js";
import SelectVisualizer from "./SelectVisualizer.js";


const Main=()=>{
return(
    <div>
        <Nav />
        <MainPrimary />
        <MainRecommendation />
        <HowItWorks />
        <SelectVisualizer/>
        {/* <SortVisualizer /> */}
        <Footer />
    </div>
)
}

export default Main;