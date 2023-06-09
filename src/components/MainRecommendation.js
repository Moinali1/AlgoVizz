import React from "react";
import RecomCard from "./RecomCard";
import { Link } from "react-router-dom";


const MainRecommendation=()=>{
return(
    <section id="recommend">
        <div id="rec">
            <div className="rec1">
                <h2>Recommended</h2>
                <h5>Study the algorithms before moving forward</h5>
            </div>
            <div className="wrapper">
    
                <Link to='/algocodebubble'>
                <RecomCard topicLink="/BubbleAlgorithm" imgsrc="/assets/images/bubble.jpg" algorithm="Bubble" shortdescription="Simplest sorting algorithm that works by repeatedly swapping adjacent elements from the
                                array"/>
                </Link>
               
                <Link to='/algocodeselection'>
                <RecomCard topicLink="/selectionalgorithm" imgsrc="/assets/images/selection.jpg" algorithm="Selection" shortdescription="Sorts an array by repeatedly finding the minimum element and putting it at the beginning"/>
                </Link>

                <Link to='/algocodeinsertion'>
                <RecomCard topicLink="/insertionalgorithm" imgsrc="/assets/images/insertion.jpg" algorithm="Insertion" shortdescription="Simple sorting algorithm that builds the final sorted list one item at a time (sorted and an unsorted part)"/>
                </Link>

                <Link to='/algocodemerge'>
                <RecomCard topicLink="/mergealgorithm" imgsrc="/assets/images/merge.jpg" algorithm="Merge" shortdescription="Divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves"/>
                </Link>

                <Link to='/algocodequick'>
                <RecomCard topicLink="/quickalgorithm" imgsrc="/assets/images/quick.jpg" algorithm="Quick" shortdescription="Divide and Conquer algorithm, picks an element as pivot and partitions the given array around the picked pivot"/>
                </Link>

            </div>
        </div>

    </section>

)
}

export default MainRecommendation;