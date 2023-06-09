import React from "react";

const HowItWorks=(props)=>{
    return (
        <section id="howitworks">
        <div id="hiw1">
            <div id="hiw11">
                <p>How It Works</p>
                <div></div>
            </div>
        </div>
        <div id="hiw2">
            <div id="hiw22">
                <div id="imgbox">
                    <img src={require("./images/SecBg1.jpg")} alt=""/>
                </div>
                <div id="steps">
                    <div id="stepbox1" className="stepbox">
                        <div id="box1" className="box">
                            <img className="stepimg stepimg1" src={require("./images/select.png")} alt=""/>
                            <p className="line1">1. Select the Size</p>
                            <p className="line2">Visualize the algorithm of your choice.</p>
                        </div>
                        <div id="box3" className="box">
                            <img className="stepimg stepimg3" src={require("./images/play.png")} alt=""/>
                            <p className="line1">3. Start Sorting</p>
                            <p className="line2">Press the Sorting button to start the step by step sorting process.</p>
                        </div>
                    </div>
                    <div id="stepbox2" className="stepbox">
                        <div id="box2" className="box">
                            <img className="stepimg" src={require("./images/setting.png")} alt=""/>
                            <p className="line1">2. Select Settings</p>
                            <p className="line2">Adjust the speed of the visualizer and array size.</p>
                        </div>
                        <div id="box4" className="box">
                            <img className="stepimg" src={require("./images/reset.png")} alt=""/>
                            <p className="line1">4. Fast-forward and Replay</p>
                            <p className="line2">Replay the entire sorting process or walk through the algorithm one step at a time with these functions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
    
}

export default HowItWorks;