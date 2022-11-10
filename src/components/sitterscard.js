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
        
    //     <div className="card shadow p-2" style={{width: "15rem", alignItems: "center"}}>
    //         <img src="" height="100px" width="100px" alt="Grandma"/>
    //         <div className="card-body">
    //             <h5 className="card-title">{sitter.user_name}</h5>
    //             <p className="card-text">{sitter.gender}</p>
    //             <p className="card-text">{sitter.phone_number}</p>
    //             <p className="card-text">{sitter.location}</p>
    //         </div>
    //     <button type="button" class="btn btn-danger">Explore</button>
    // </div>
    )
};

export default SittersCard;