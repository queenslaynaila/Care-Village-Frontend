import {React, useEffect, useState} from "react";
import grandma from '../assets/grandma.svg'
import baby from '../assets/baby.svg'
import pet from '../assets/pet.svg'
import specialNeeds from '../assets/specialneeds.svg'
import medical from '../assets/medical.svg'
import {useNavigate} from "react-router-dom"

function Home() {
    let navigate = useNavigate()
    const [user, setUser] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) setUser(user)
    }, []);

    return (
        <div className="py-5">
            <div className="row mb-5">
                <div className="col-sm-8 mb-sm-0 mb-5">
                    {user ?
                        <>
                            {user.usertype === 'client'?
                                <>
                                <h1 className="fw-bold mb-4">Find a service carer near you</h1>
                                <p>Find the right sitter or nanny for your family</p>
                            <a href="#/" className="btn btn-danger rounded-0 btn-lg home-get-started-btn"
                               onClick={() => navigate("/offers")}>
                                <i className="bi bi-search"/> Search Sitters
                            </a>
                                </>
                                :
                                <>
                                    <h1 className="fw-bold mb-4">Find jobs near you</h1>
                                    <p>Determine your own schedule and rate</p>
                                <a href="#/" className="btn btn-danger rounded-0 btn-lg home-get-started-btn"
                                   onClick={() => navigate("/offers")}>
                                    <i className="bi bi-folder-fill"/> Offers Received
                                </a>
                                </>
                            }
                            <a href="#/"
                               className="btn btn-outline-secondary rounded-0 btn-lg ms-2 text-decoration-none"
                               onClick={() => navigate("/profile")}><i className="bi bi-gear"> Settings</i>
                            </a>
                        </>
                        :
                        <>
                            <a href="#/" className="btn btn-danger rounded-0 btn-lg home-get-started-btn"
                               onClick={() => navigate("/signup-as-client")}>Get Started
                            </a>
                            <a href="#/"
                               className="btn btn-outline-secondary rounded-0 btn-lg ms-2 text-decoration-none"
                               onClick={() => navigate("/signup-as-sitter")}>I'm a Sitter</a>
                        </>
                        }
                </div>
                <div className="col-sm-4">
                    <img src={grandma} height="250px" width="350px" alt="Grandma"/>
                </div>
            </div>
            <h1 className="my-5">Categories</h1>
            <div className="row mt-5 ms-sm-0 ms-5">
                <div className="col-sm-auto mb-2">
                    <div className="card shadow p-2" style={{width: "15rem", alignItems: "center"}}>
                        <img src={baby} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Sitter</h5>
                            <p className="card-text">Regular support for after-school, weekdays, and weekends</p>
                        </div>
                    </div>
                </div>
                <div className="col-auto mb-2">
                    <div className="card shadow p-2" style={{width: "15rem", alignItems: "center"}}>
                        <img src={pet} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Pet Sitter</h5>
                            <p className="card-text">Occasional help with last-minute needs, date night and
                                more</p>
                        </div>
                    </div>
                </div>
                <div className="col-auto mb-2">
                    <div className="card shadow p-2" style={{width: "15rem", alignItems: "center"}}>
                        <img src={medical} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Care Companion</h5>
                            <p className="card-text">Specialized care to meet the individual needs of your patient</p>
                        </div>
                    </div>
                </div>
                <div className="col-auto mb-2">
                    <div className="card shadow p-2" style={{width: "15rem", alignItems: "center"}}>
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
