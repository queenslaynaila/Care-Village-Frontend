import React from "react";
import grandma from '../assets/grandma.svg'

function Home() {
    return (
        <div className="col-sm-9 py-5">
            <div className="row">
                <div className="col-sm-9 mb-sm-0 mb-5">
                    <h1 className="fw-bold mb-4">Find a service carer near you</h1>
                    <p>Find the right sitter or nanny for your family</p>
                    <button className="btn btn-danger rounded-0 btn-lg home-get-started-btn">Get Started</button>
                    <button className="btn btn-outline-secondary rounded-0 btn-lg ms-2 ">I'm a Sitter</button>
                </div>
                <div className="col-sm-3">
                    <img src={grandma} height="250px" width="350px" alt="Grandma"/>
                </div>
            </div>
        </div>

    )
}

export default Home;