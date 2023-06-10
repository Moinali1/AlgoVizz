import React, { useState } from "react";
import Nav from "./Nav";
import './css/ContactUs.css'
import { Link } from "react-router-dom";

const ContactUs=()=>{
    const[name,setName]= useState('');
    const[email,setEmail]=useState('');
    const[msgType,setMsgType]=useState('');
    const[isVaildEmail,setIsValidEmail]=useState(true);
    const[message,setMessage]=useState('')

    const handleEmailChange = (e) => {
        const { value } = e.target;
        // Perform validation or restrictions on the email value
        const restrictedValue = value.replace(/\s/g, ''); // Remove whitespace
        setEmail(restrictedValue);
      };
    
      const validateEmail = () => {
        // Perform email validation
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setIsValidEmail(isValid);
      };

    const VerifyAndSubmitDetails=async()=>{
        try{
        if(name=="" || email=="" || !isVaildEmail || message=="")
        {
            alert("Details NOT send! Kindly submit them properly")
            return;
        }
        const requestBody={
            name:name,
            email:email,
            messageType:msgType,
            message:message
        }
        let result=await fetch('https://edu-world-backend.vercel.app/algovizzcontactdetails',{
            method:"post",
            body:JSON.stringify({requestBody}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result= await result.json();
        if(result.response=="1")
        {
            alert("Thanks for your feedback")
        } 
        else if(result.response=="2")
        {
            alert("We have already taken your suggestion");
        }
        else{
            alert("Database error for /algovizzcontactdetails")
        }  
    }
    catch{
        alert("Unable to connect to server")
    }

    }

    return(
        <div>
        <nav className="contact-nav">
        <Link to="/">
            <div className="contact-home">Home</div>
        </Link>
            <div className="contact-logo">
            <img src={require("./images/logo.png")} alt=""/>
            <p>&nbsp;AlgoVizz</p>
        </div>
        </nav>
        <div className="contact-primary">
            <h1 className="contact-primary-heading">Contact Us</h1>
            <div className="contact-form">
            <h5 className="contact-form-heading">Do contact us if there is any error or improvement or wish to collaborate on this project</h5>
            <div className="contact-form-primary">
                <input className="input" value={name} type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
                <input className="input" value={email} type="email" placeholder="email" onChange={handleEmailChange} onBlur={validateEmail}></input>
                <select className="input" type="text" defaultValue={""} onChange={(e)=>{setMsgType(e.target.value)}}>
                    <option value="" disabled="true">Type(Optional)</option>
                    <option value="Improvement">Improvement</option>
                    <option value="Collaboration">Collaborate</option>
                    <option value="Issue">Issue</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            {!isVaildEmail && <div className="error-message">
                Enter valid e-mail
                </div>}
            <div className="contact-form-secondary">
                <textarea className="contact-textarea" value={message} placeholder="Message" onChange={(e)=>{
                setMessage(e.target.value)}}></textarea>
            </div>
            <div className="contact-submit">
            <button className="contact-submit-button" onClick={VerifyAndSubmitDetails}> Submit</button>

            </div>
            </div>
        </div>
        </div>
    )
}

export default ContactUs;