import React, { useEffect, useState } from "react";
import AlgoNav from "./AlgoNav";
import AlgoPrimary from "./AlgoPrimary";
import './css/AlgoCode.css'
import FunctionContext from "./FunctionContext";

const AlgoCode=(props)=>{
    const[bubbleClicked,setBubbleClicked]=useState(false);
    const[selectionClicked,setSelectionClicked]=useState(false);
    const[insertionClicked,setInsertionClicked]=useState(false);
    const[quickClicked,setQuickClicked]=useState(false);
    const[mergeClicked,setMergeClicked]=useState(false);
    
    useEffect(()=>{
        if(props.render=="bubble")
        {
            setBubbleClicked(true);
            setSelectionClicked(false);
            setInsertionClicked(false);
            setQuickClicked(false);
            setMergeClicked(false);
            
        }
        else if(props.render=="selection")
        {
            setBubbleClicked(false);
            setSelectionClicked(true);
            setInsertionClicked(false);
            setQuickClicked(false);
            setMergeClicked(false);
        }
        else if(props.render=="insertion")
        {
            setBubbleClicked(false);
            setSelectionClicked(false);
            setInsertionClicked(true);
            setQuickClicked(false);
            setMergeClicked(false);
        }
        else if(props.render=="quick"){
            setBubbleClicked(false);
            setSelectionClicked(false);
            setInsertionClicked(false);
            setQuickClicked(true);
            setMergeClicked(false);
        }
        else if(props.render=="merge"){
            setBubbleClicked(false);
            setSelectionClicked(false);
            setInsertionClicked(false);
            setQuickClicked(false);
            setMergeClicked(true);
        }
    },[])

    return(
        <FunctionContext.Provider value={{setBubbleClicked,setSelectionClicked,setInsertionClicked,setQuickClicked,setMergeClicked,bubbleClicked,selectionClicked,insertionClicked,quickClicked,mergeClicked}}>
        <div>
        <AlgoNav />
        <AlgoPrimary />
        </div>
        </FunctionContext.Provider>
    )
}

export default AlgoCode;