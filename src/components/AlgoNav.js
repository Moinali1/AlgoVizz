import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FunctionContext from "./FunctionContext";

const AlgoNav=()=>{
    const {setBubbleClicked,setSelectionClicked,setInsertionClicked,setQuickClicked,setMergeClicked}=useContext(FunctionContext);
    return (
        <nav id="navbar" className="nav-fixed-code">
        <div className="logo">
            <img src={require('./images/logo3.png')} alt=""/>
            <p>AlgoVizz</p>
        </div>
        <div id="options" className="code-nav-options">
            <ul>
                <li className="Homebtn"><Link to="/">Home</Link></li>
                <li onClick={()=>{  
                                    setBubbleClicked(true)
                                    setSelectionClicked(false)
                                    setInsertionClicked(false)
                                    setQuickClicked(false)
                                    setMergeClicked(false)
                }}>Bubble</li>
                <li onClick={()=>{  
                                    setBubbleClicked(false)
                                    setSelectionClicked(true)
                                    setInsertionClicked(false)
                                    setQuickClicked(false)
                                    setMergeClicked(false)
                }}>Selection</li>
                <li onClick={()=>{  
                                    setBubbleClicked(false)
                                    setSelectionClicked(false)
                                    setInsertionClicked(true)
                                    setQuickClicked(false)
                                    setMergeClicked(false)
                }}>Insertion</li>
                <li onClick={()=>{  
                                    setBubbleClicked(false)
                                    setSelectionClicked(false)
                                    setInsertionClicked(false)
                                    setQuickClicked(true)
                                    setMergeClicked(false)
                }}>Quick</li>
                <li onClick={()=>{  
                                    setBubbleClicked(false)
                                    setSelectionClicked(false)
                                    setInsertionClicked(false)
                                    setQuickClicked(false)
                                    setMergeClicked(true)
                }}>Merge</li>
            </ul>
        </div>
    </nav>
    )
}

export default AlgoNav;