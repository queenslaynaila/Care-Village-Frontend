import React from "react";
import '../styles/404.css'
function NotFound() {
   const imageurl="https://cdn.sittercity.com/6a2f0c7513f5ee449cdad04bcebb6d48c9fa6243/assets/oops-cd666b7ea5ce5415801ad4f875223942ee77726280b1e6b223ebb711e1c39ba9.svg"
    return (
        <div className="wrapcontainer">
            <img className="errorimg" src={imageurl}></img>
            <h1 className="processerror">Something Went Wrong</h1>
            <h2 className="soory">We are sorry we have encountered an error</h2>

         <button className="processerrorbtn">Contact Customer Success</button>
        </div>

    )
}

export default NotFound;
