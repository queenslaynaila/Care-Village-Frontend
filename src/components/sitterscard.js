import React from "react";
import '../styles/sitterscard.css'
import { useNavigate } from "react-router-dom";

function SittersCard({sitter}) {

    let navigate = useNavigate()
    function handleClick(e) {
        navigate("/clientsignup");
    }

    return (
        <>
        {sitter?
        <div id="login-container" className="sitter-card">
        <h1 id="sitter-username">
            {sitter.name}
        </h1>
        <div className="sitter-description">
            {sitter.gender}
        </div>
        <div className="sitter-description">
            {sitter.keyskills}
        </div>
        <div className="sitter-description">
            {sitter.about}
        </div>
        <div className="sitter-description">
            {sitter.location}
        </div>
        <div className="button-div">
         <button id="sitter-button" className="processerrorbtn bg-danger" onClick={() => navigate("/signup-as-client")}>Hire Me</button>
        </div>

    </div>: <p>No sitter</p>
    }
        </>

     
    )
};

export default SittersCard;
