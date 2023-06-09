import React from "react";
import {swap,waitforme} from './helpingFunctions'

async function insertion(stopSort,delay){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        if(stopSort.current)return;
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'red';

        await waitforme(delay.current);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
          
            ele[j].style.background = 'rgb(159 213 255)'; //light blue
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay.current);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
    }
}


export {insertion};