
import React from "react";

function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}


function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}


function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}


function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}


function swap(el1, el2) {
    console.log('In swap()');
    
    // previous without numbers
    // let temp = el1.style.height;
    // el1.style.height = el2.style.height;
    // el2.style.height = temp;

    // new code with numbers
    let temp = parseFloat(el1.style.height); // Parse the height as a float
    el1.style.height = el2.style.height;
    el1.innerHTML = Math.round(parseFloat(el2.style.height)); // Parse and round the height
    el2.style.height = temp + 'px'; // Assigning the height back with the unit
    el2.innerHTML = Math.round(temp); // Rounding the parsed value

    
}

function createLegends(details)
{
    deletelegends();

    for(let i=0;i<details.length;i=i+2)
    {
    const Elegends= document.querySelector(".legends");
    const Eleg = document.createElement("div");
    const Elcolor = document.createElement("div");
    const Elegwork = document.createElement("div");

    const node = document.createTextNode(details[i]);
    Elegwork.appendChild(node);
    Elcolor.style.backgroundColor=details[i+1];

    Eleg.classList.add('leg');
    Elcolor.classList.add('lcolor');
    Elegwork.classList.add('legwork');
    Elegwork.classList.add('legwork1');
    
    Eleg.appendChild(Elcolor);
    Eleg.appendChild(Elegwork);
    Elegends.appendChild(Eleg);
    }
}

function deletelegends() {
    const legends = document.querySelector(".legends");
    legends.innerHTML = '';
}

let timeoutId;
    function waitforme(milisec) { 
        return new Promise(resolve => { 
           timeoutId= setTimeout(() => { resolve('') }, milisec); 
        }) ;
    }

let delay = 100;



export {swap,deletelegends,waitforme,delay,disableSizeSlider,disableSortingBtn,disableNewArrayBtn,enableNewArrayBtn,enableSortingBtn,enableSizeSlider,createLegends}; 