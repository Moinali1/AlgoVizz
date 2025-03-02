import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectVisualizer=(props)=>{
    return(
        <section id="visualizersection">
            <div className="selectVis_Head">
                <p>Visualizer</p>
                <div></div>
            </div>
            <div className="selectVis">
                <div className="selectVis_Primary">Connect With Reality &nbsp;{<FaArrowRight />} &nbsp;</div>
                <Link to="/VisualizerPage"><button class="selectVis_Btn" >
                <span class="button-content">Move To Visualizer</span>
                </button></Link>
                {/* <button>Search Visualizer</button> */}
            </div>    
        </section>
    )

}

export default SelectVisualizer;