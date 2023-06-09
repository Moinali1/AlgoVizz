import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Nav=()=>{

    useEffect(()=>{
    const navbar = document.querySelector('.nav-fixed');
    const mono = document.querySelector('.logo');
    window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
        mono.classList.add('logo-active');
    } else {
        navbar.classList.remove('nav-active');
        mono.classList.remove('logo-active');
    }
    // console.log("a");
};},[])

    return(
        <nav id="navbar" className="nav-fixed">
        <div className="logo">
            <img src={require("./images/logo.png")} alt=""/>
            <p>AlgoVizz</p>
        </div>
        <div id="options">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#howitworks">How It Works</a></li>
                <li><a href="#visualizer">Visualizer</a></li>
                <li><a href="#recommend">Complexity</a></li>
                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;