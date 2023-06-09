import React from "react";
import {Link} from "react-router-dom";

const RecomCard=(props)=>{
    return (
            <div className="card">
                <img src={props.imgsrc}/>
                <div className="cardct">
                    <h1 className="info">{props.algorithm}</h1>
                    <p>{props.shortdescription}</p>
                </div>
            </div>
    )
    
}

export default RecomCard;