import React, { useContext } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FunctionContext from "./FunctionContext";

const Codezone=(props)=>{
    
    
    return(
        <div className="codezone">
        <span className="codehead">JAVA Code</span>
        <div className="container">
            <div className="code-wrapper">
                <pre>
                <SyntaxHighlighter language="java" style={a11yDark}>
                {props.codeString}
                </SyntaxHighlighter>
            </pre>
            </div>
        </div>
    </div>
    )
}

const Details=(props)=>{
    return(
        <div>
            <header>How {props.details.name} Sort works</header>
            <p className="content">{props.details.description}</p>
            <header>Performence</header>
            <div className="complexity">
                <p>Assuming N is the size of array,</p>
                <div className="perform">
                    <div className="per1">
                        <p>Worst time complexity</p>
                        <p>Average time complexity</p>
                        <p>Best time complexity</p>
                        <p>Worst space complexity</p>
                    </div>
                    <div className="per2">
                        <p>O(<span>{props.details.extraO}<sup>{props.details.powerO}</sup></span>)</p>
                        <p>θ(<span>{props.details.extraTheta}<sup>{props.details.powerTheta}</sup></span>)</p>
                        <p>Ω(<span>{props.details.extraOmega}<sup>{props.details.powerOmega}</sup></span>)</p>
                        <p>O(<span>{props.details.space}</span>)</p>
                    </div>
                </div>
            </div>
            <div className="algotype">
                <div>
                    <p>stable</p>
                    <img className="type1" src={props.details.stable} alt=""/>
                </div>
                <div>
                    <p>In-place</p>
                    <img className="type1" src={props.details.inplace} alt=""/>
                </div>
            </div>
            <div className="moredetails">
                <a href="https://www.geeksforgeeks.org/bubble-sort/" target="_blank"> Click here for more details </a>
            </div>
        </div>
    )
}


const AlgoPrimary=()=>{

    const {bubbleClicked,selectionClicked,insertionClicked,quickClicked,mergeClicked}=useContext(FunctionContext);
    
    const bubbleDetails={
        name:"Bubble",
        description:"Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. This procedure is repeated until no swaps are required, indicating that the list has been sorted.",
        extraO:"N",
        extraOmega:"N",
        extraTheta:"N",
        extra:"",
        powerO:"2",
        powerTheta:"2",
        powerOmega:"",
        space:"1",
        inplace:"/assets/images/yes.png",
        stable:"/assets/images/yes.png",
        moredetails:"https://www.geeksforgeeks.org/bubble-sort/",
        code:` void swap(int[] arr, int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        void bubbleSort(int[] arr) {
            
            // Loop in the range of unsorted elements
            for (int i = arr.length - 1; i >= 0; i--) {
                boolean swapped = true;
                
                // Bubble largest element to the end
                for (int j = 0; j < i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        swap(arr, j, j + 1);
                        swapped = false;
                    }
                }
                
                // Array is already sorted as there are no swaps in this iteration
                if (swapped) {
                    break;
                }
            }
        } `,
    }
    const selectionDetails={
        name:"Selection",
        description:"Selection Sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays, a subarray which is sorted and the remaining array which is unsorted.",
        extraO:"N",
        extraOmega:"N",
        extraTheta:"N",
        extra:"",
        powerO:"2",
        powerTheta:"2",
        powerOmega:"2",
        space:"1",
        inplace:"/assets/images/no.png",
        stable:"/assets/images/yes.png",
        moredetails:"https://www.geeksforgeeks.org/selection-sort/",
        code:`void sort(int[] arr) {
            int n = arr.length;
            // One by one move boundary of unsorted subarray 
            for (int i = 0; i < n - 1; i++) {
                // Find the minimum element in unsorted array 
                int minIdx = i;
                for (int j = i + 1; j < n; j++) {
                    if (arr[j] < arr[min_idx]) {
                        minIdx = j;
                    }
                }
                // Swap the found minimum element with the first element 
                int temp = arr[minIdx];
                arr[minIdx] = arr[i];
                arr[i] = temp;
            }
        } `,
    }
    const insertionDetails={
        name:"Insertion",
        description:"Insertion Sort is a simple sorting algorithm that builds the final sorted list one item at a time. The list is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
        extraO:"N",
        extraOmega:"N",
        extraTheta:"N",
        extra:"",
        powerO:"2",
        powerTheta:"2",
        powerOmega:"",
        space:"1",
        inplace:"/assets/images/yes.png",
        stable:"/assets/images/yes.png",
        moredetails:"https://www.geeksforgeeks.org/insertion-sort/",
        code:`void insertionSort(int[] arr) {

            // Elements from 0 to i - 1 are sorted
            for (int i = 1; i < arr.length; i++) {
        
                int key = arr[i];
                int j = i - 1;
        
                // Locate position of key to insert in the sorted region
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j -= 1;
                }
                arr[j + 1] = key;
            }
        }`
    }
    const quickDetails={
        name:"Quick",
        description:"Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of Quick Sort that pick pivot in different ways.",
        extraO:"N",
        extraOmega:"N",
        extraTheta:"NlogN",
        powerO:"2",
        powerTheta:"",
        powerOmega:"",
        space:"1",
        inplace:"/assets/images/yes.png",
        stable:"/assets/images/no.png",
        moredetails:"https://www.geeksforgeeks.org/quick-sort/",
        code:` void swap(int[] arr, int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        int partition(int[] arr, int low, int high) {
            int pivot = arr[high];
            int i = low - 1; // index of smaller element 
            for (int j = low; j < high; j++) {
                // If current element is smaller than the pivot 
                if (arr[j] < pivot) {
                    i++;
                    swap(arr, i, j);
                }
            }
            swap(arr, i + 1, high);
            return i + 1;
        }
        
        /* The main function that implements QuickSort() 
            arr[] --> Array to be sorted, 
            low  --> Starting index, 
            high  --> Ending index */
        void quickSortHelper(int[] arr, int low, int high) {
            if (low < high) { 
                /* pi is partitioning index, arr[pi] is  
                    now at right place */
                int pi = partition(arr, low, high);
                // Recursively sort elements before 
                // partition and after partition 
                quickSortHelper(arr, low, pi - 1);
                quickSortHelper(arr, pi + 1, high);
            }
        }
        
        void quickSort(int[] arr) {
            quickSortHelper(arr, 0, arr.length - 1);
        }`
    }

    const mergeDetails={
        name:"Merge",
        description:"Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted subarrays into one.",
        extraO:"NlogN",
        extraOmega:"NlogN",
        extraTheta:"NlogN",
        powerO:"",
        powerTheta:"",
        powerOmega:"",
        space:"1",
        inplace:"/assets/images/no.png",
        stable:"/assets/images/yes.png",
        moredetails:"https://www.geeksforgeeks.org/merge-sort/",
        code:` /* Merges two subarrays of arr[]. First subarray is arr[l..m]
        * Second subarray is arr[m+1..r] */
        void merge(int[] arr, int left, int mid, int right) {
            // Find sizes of two subarrays to be merged
            int n1 = mid - left + 1;
            int n2 = right - mid;
        
            // Create temp arrays
            int[] leftArray = new int[n1];
            int[] rightArray = new int[n2];
        
            // Copy data to temp arrays
            for (int i = 0; i < n1; i++) {
                leftArray[i] = arr[left + i];
            }
        
            for (int j = 0; j < n2; j++) {
                rightArray[j] = arr[mid + 1 + j];
            }
        
            // Initial indexes of first and second subarrays
            int i = 0, j = 0;
        
            // Initial index of merged subarray array
            int k = left;
            // Merge the arrays
            while (i < n1 && j < n2) {
                if (leftArray[i] <= rightArray[j]) {
                    arr[k++] = leftArray[i++];
                } else {
                    arr[k++] = rightArray[j++];
                }
            }
        
            // Copy remaining elements of leftArray if any
            while (i < n1) {
                arr[k++] = leftArray[i++];
            }
        
            // Copy remaining elements of rightArray if any
            while (j < n2) {
                arr[k++] = rightArray[j++];
            }
        }
        
        // Main function that sorts arr[l..r] using merge()
        void mergeSortHelper(int[] arr, int left, int right) {
            if (left < right) {
                // Find the middle point
                int mid = (left + right) / 2;
        
                // Sort first and second halves
                mergeSortHelper(arr, left, mid);
                mergeSortHelper(arr, mid + 1, right);
        
                // Merge the sorted halves
                merge(arr, left, mid, right);
            }
        }
        
        void mergeSort(int[] arr) {
            mergeSortHelper(arr, 0, arr.length - 1);
        }`
    }


    return (
    <section id="sortdetails">
    <div className="main">
        <div className="details">
           {bubbleClicked &&<Details details={bubbleDetails}/>}
           {selectionClicked && <Details details={selectionDetails}/>}
           {insertionClicked &&<Details details={insertionDetails}/>}
           {quickClicked &&<Details details={quickDetails}/>}
           {mergeClicked &&<Details details={mergeDetails}/>}
        </div>
        <div className="code-section">
        {bubbleClicked &&<Codezone codeString={bubbleDetails.code}/>}
        {selectionClicked &&<Codezone codeString={selectionDetails.code}/>}
        {insertionClicked &&<Codezone codeString={insertionDetails.code}/>}
        {quickClicked &&<Codezone codeString={quickDetails.code}/>}
        {mergeClicked && <Codezone codeString={mergeDetails.code}/>}
        </div>
    </div>

</section>
    )
}

export default AlgoPrimary;