import React from "react";
import {swap,waitforme} from './helpingFunctions'

async function selection(stopSort,delay){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        
        ele[i].style.background = '#5aeb5a';//light green
        for(let j = i+1; j < ele.length; j++){
         
            if(stopSort.current)
            {
                return;
            }
            ele[j].style.background = 'red';

            await waitforme(delay.current);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
             
                if(min_index !== i){
                
                    ele[min_index].style.background = 'rgb(38 108 162)';//dark blue
                }
                min_index = j;
                ele[min_index].style.background = 'yellow';
            } 
            else{
            
                ele[j].style.background = 'rgb(38 108 162)';//dark blue
            }   
        }
        swap(ele[min_index], ele[i]);
    
        ele[min_index].style.background = 'rgb(38 108 162)';//dark blue
       
        ele[i].style.background = 'green';
    
    }
}

export {selection};