import React from "react";

const Footer=()=>{
    const d=new Date();
return(
    <div className="footer">
        Copyright ©{d.getFullYear()} AlgoVizz
    </div>
)
}

export default Footer;