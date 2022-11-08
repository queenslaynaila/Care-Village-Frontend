import React from "react";
import {useNavigate} from "react-router-dom"
function Home() {
    let navigate = useNavigate()
    return (
        <div className="col-sm-9 py-5">
            <h1 className="fw-bold mb-4">Find a service carer near you</h1>
            <p>Find the right sitter or nanny for your family</p>
            <button onClick={() => navigate("/login")} className="btn btn-danger rounded-0 btn-lg home-get-started-btn">Get Started</button>
            <button className="btn btn-outline-secondary rounded-0 btn-lg ms-2 ">I'm a Sitter</button>
        </div>

    )
}

export default Home;
