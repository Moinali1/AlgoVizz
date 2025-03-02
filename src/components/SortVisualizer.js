import React, { useEffect, useRef, useState } from "react";
import bubble from "./Algorithms/bubblesort";
import { selection } from "./Algorithms/selectionsort";
import { insertion } from "./Algorithms/insertionsort";
import { quick } from "./Algorithms/quicksort";
import { merge } from "./Algorithms/mergesort";

import { deletelegends,disableSortingBtn,disableNewArrayBtn,disableSizeSlider,enableNewArrayBtn,enableSizeSlider,enableSortingBtn,createLegends} from "./Algorithms/helpingFunctions";

const BarsBox=(props)=>{
    return(
        <div id="barscontainer">
            <div id="bars" className="screen flex-container">
                {
                    props.BarSizeArray.map((value,index)=>(
                        <div>
                        <div 
                            key={index}
                            style={{height :`${value*1.2}px`,fontSize : '14px'}}
                            className={`bar flex-item barNo${index}`}      
                        >
                        {Math.round(value*1.2)}
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


const SortVisualizer=()=>{

    const[arraySize,setArraySize]=useState(27);
    const [BarsBoxRerenderkey, setKey] = useState(0);
    const delay= useRef(600);
    // const[delay,setDelay]=useState(700);

    // useEffect(()=>{
    //     Refdelay.current=delay
    // },[delay])
    
    const stopSort = useRef(true); 

    const [array,setArray]= useState([]);
    let copyArray=[];

    useEffect(()=>{
        renderNewArray();
    },[arraySize]);
    
    useEffect(() => {
        copyArray=[...array];
      }, [array]);
    


    function renderNewArray()
    {
        setArray([]);
        console.log(arraySize)
        for(let i=0;i<arraySize;i++)
        {
            //  array.push(Math.floor(Math.random() * 250) + 5);  
            setArray((preArr)=>[...preArr,Math.floor(Math.random() * 250) + 15]);
        }
    }

    
    function handleBubble()
    {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        let legdetails=["Unsorted element","rgb(38 108 162)","Elements under comparision","rgb(159 213 255)","Sorted element","green"]
        createLegends(legdetails);
        stopSort.current=false;
        bubble(stopSort,delay);
    }

    function handleSelection()
    {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        let legdetails=["Element under check","red","Correct position to swap","#5aeb5a","Current minimum element","yellow","Sorted element","green","Unsorted element","rgb(38 108 162)"]
        createLegends(legdetails);
        stopSort.current=false;
        selection(stopSort,delay);
    }
    
    function handleInsertion()
    {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        let legdetails=["Element under check","red","Element to be inserted on its correct position","rgb(159 213 255)","Sorted elements","green","Unsorted element","rgb(38 108 162)"]
        createLegends(legdetails);
        stopSort.current=false;
        insertion(stopSort,delay);
    }

    function handleQuick()
    {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        let legdetails=["Partition Element","red","Element smaller then partion element","orange","Element Greater then the parition element","pink","Element under check","yellow","Sorted elements","green","Unsorted element","rgb(38 108 162)"]
        createLegends(legdetails);
        let ele = document.querySelectorAll('.bar');
        let l = 0;
        let r = ele.length - 1;
        stopSort.current=false;
        quick(ele,l,r,stopSort,delay);
    }

    function handleMerge()
    {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        let legdetails=["Left Sorted Array","orange","Right Sorted Array","yellow","Merged sorted part","lightgreen","Final sorted elements","green","Unsorted element","rgb(38 108 162)"]
        createLegends(legdetails);
        let ele = document.querySelectorAll('.bar');
        let l = 0;
        let r = ele.length - 1;
        stopSort.current=false;
        merge(ele,l,r,stopSort,delay);
    }
    

    function handleReset() {
        console.log("Reset Triggered");
        stopSort.current = true;
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
        deletelegends();
        const legends = document.querySelector(".legends");
        legends.innerHTML = "<p class='legHeading'>Legends</p>";
        const newArray = [...copyArray]; // Create a new copy of the array
        setArray(newArray);
        setKey((prevKey) => prevKey + 1);
      }

  const [min, setMin] = useState(4);
  const [max, setMax] = useState(30);

  useEffect(() => {
    const updateRangeSlider = () => {
      if (window.matchMedia("(max-width: 1320px)").matches) {
        setArraySize(9);
        setMin(4);
        setMax(10);
      } else {
        setMin(5);
        setMax(30);
        setArraySize(27);
      }
    };

    // Run on initial render
    updateRangeSlider();

    // Add event listener to handle resize
    window.addEventListener('resize', updateRangeSlider);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateRangeSlider);
  }, []);



   return( <section id="SortVisualizer">
   {/* {console.log("rerendering done here visss")} */}
        <div id="headdiv">
            <div id="vis">
                <p>Sort Visualizer</p>
                <div></div>
            </div>
        </div>

        <div className="v1">
            <div className="buttonbox">
                <button type="button" className="btn bubbleSort" onClick={handleBubble}>Bubble Sort</button>
                <button type="button" className="btn selectionSort" onClick={handleSelection}>Selection Sort</button>
                <button type="button" className="btn insertionSort" onClick={handleInsertion} >Insertion Sort</button>
                <button type="button" className="btn quickSort" onClick={handleQuick} >Quick Sort</button>
                <button type="button" className="btn mergeSort" onClick={handleMerge}>Merge Sort</button>
            </div>
        <BarsBox key={BarsBoxRerenderkey} BarSizeArray={array}/>    
        </div>
    
        <div className="legendsection">
            <div className="legends">
                <p className="legHeading">
                    Legends
                </p>
            </div>
        </div>

        <div className="v2">
            <div className="v22">
                <div className="d1 d" id="input">
                    <div className="sizeHead">Size :</div>
                    <input id="arr_sz" className="range-slider" type="range" min={min} max={max} step={1} value={arraySize} onChange={(e)=>{setArraySize(e.target.value)}} />
                </div>
                <div className="d2 d" id="newArray">
                    <button type="button" className="btn newArray" onClick={renderNewArray}>New Array</button>
                </div>

                <div className="d4 d" id="ResetBtn">
                    <button type="button" className="btn newArray" onClick={handleReset}>Reset</button>
                </div>
                <div className="d3 d" id="speed">
                    <div className="speedHead">Speed :</div>
                    <input id="speed_input" className="range-slider" type="range" min={150} max={850} defaultValue={600} stepDown={10}  onChange={(e)=>{delay.current=950-e.target.value}}/>
                    </div>
            </div>
        </div>
    </section>
   )
}

export default SortVisualizer;