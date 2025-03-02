import React from "react";
import SortVisualizer from "./SortVisualizer";
import { Link } from "react-router-dom";
import './css/VisualizerPage.css';


const VisualizerPage=()=>{
    return(
        <div>
        <nav className="VP-nav">
        <Link to="/">
            <div className="VP-home">Home</div>
        </Link>
            <div className="VP-logo">
            <img src={require("./images/logo.png")} alt=""/>
            <p>&nbsp;AlgoVizz</p>
        </div>
        </nav>
        <SortVisualizer />
        </div>
    )
}

export default VisualizerPage;