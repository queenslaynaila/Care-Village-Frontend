import React from "react";
import grandma from '../assets/grandma.svg'
import baby from '../assets/baby.svg'
import pet from '../assets/pet.svg'
import specialNeeds from '../assets/specialneeds.svg'
import medical from '../assets/medical.svg'

function Home() {
    return (
        <div className="col-sm-9 py-5">
            <div className="row mb-5">
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
            <h1 className="my-5">Categories</h1>
            <div className="row mt-5">
                <div className="col-auto p-1">
                    <div className="card shadow p-2" style={{width: "12rem", alignItems: "center"}}>
                        <img src={baby} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Sitter</h5>
                            <p className="card-text">Regular support for after-school, weekdays, and weekends</p>
                        </div>
                    </div>
                </div>
                <div className="col-auto p-1">
                    <div className="card shadow p-2" style={{width: "12rem", alignItems: "center"}}>
                        <img src={pet} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Pet Sitter</h5>
                            <p className="card-text">Occasional help with last-minute needs, date night and
                                more</p>
                        </div>
                    </div>
                </div>
                <div className="col-auto p-1">
                    <div className="card shadow p-2" style={{width: "12rem", alignItems: "center"}}>
                        <img src={medical} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Care Companion</h5>
                            <p className="card-text">Specialized care to meet the individual needs of your patient</p>
                    </div>
                </div>
            </div>
            <div className="col-auto p-1">
                <div className="card shadow p-2" style={{width: "12rem", alignItems: "center"}}>
                    <img src={specialNeeds} height="100px" width="100px" alt="Grandma"/>
                    <div className="card-body">
                        <h5 className="card-title">Special Needs</h5>
                        <p className="card-text">Specialized care to meet the individual needs of your child</p>
                    </div>
                </div>
            </div>
        </div>
</div>

)
}

export default Home;