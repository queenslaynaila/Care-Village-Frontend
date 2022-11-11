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

    function handleClick(e) {
        navigate("/browsesitter");
    }

    return (
        <div className="pt-4 mb-5">
            <div className="row mb-5">
                <div className="col-sm-8 mb-sm-0 mb-5">
                    {user ?
                        <>
                            {user.usertype === 'client' ?
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
                            <h1 className="fw-bold mb-4">Find a service carer near you</h1>
                            <p>Find the right sitter or nanny for your family</p>
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
                    <img src={grandma} height="200px" width="auto" alt="Grandma"/>
                </div>
            </div>
            <div className="row d-flex p-sm-0 p-3">
                <h3 className="ps-0">Categories</h3>
                <div style={{cursor: "pointer"}} onClick={(e) => handleClick(e)}
                     className="col-sm-3 p-1 mb-2">
                    <div className="card shadow p-1" style={{width: "auto", alignItems: "center"}}>
                        <img src={baby} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Sitter</h5>
                            <p className="card-text fst-italic">Regular support for after-school, weekdays, and weekends</p>
                        </div>

                    </div>
                </div>
                <div style={{cursor: "pointer"}} onClick={(e) => handleClick(e)}
                     className="col-sm-3 p-1 mb-2">
                    <div className="card shadow p-2" style={{width: "auto", alignItems: "center"}}>
                        <img src={pet} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Pet Sitter</h5>
                            <p className="card-text fst-italic">Occasional help with last-minute needs, date night and
                                more</p>
                        </div>

                    </div>
                </div>
                <div style={{cursor: "pointer"}} onClick={(e) => handleClick(e)}
                     className="col-sm-3 p-1 mb-2">
                    <div className="card shadow p-2" style={{width: "auto", alignItems: "center"}}>
                        <img src={medical} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Care Companion</h5>
                            <p className="card-text fst-italic">Specialized care to meet the individual needs of your patient</p>
                        </div>

                    </div>
                </div>
                <div style={{cursor: "pointer"}} onClick={(e) => handleClick(e)}
                     className="col-sm-3 p-1 mb-2">
                    <div className="card shadow p-1" style={{width: "auto", alignItems: "center"}}>
                        <img src={specialNeeds} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Special Needs</h5>
                            <p className="card-text fst-italic">Specialized care to meet the individual needs of your child</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
