import React from "react";
import sitterlogo from "../assets/sitter.png";
import "../styles/sitter.css"; 


function Sitters(){

    return (
        <React.Fragment>
            <h1> Dashboard</h1>
            <div className="container">
                    {/* sitterdetails */}
                    <div className="row">
                        <div className="card">

                            <div className="card-body">
                                <div className="col-sm-2">
                                    <img  src={sitterlogo} className="img-fluid" alt=""></img>      
                                </div>
                                <div className="col-sm-8">
                                    <h5>Queenslay Naila</h5>
                                    <p>queenslayjema@gmail.com</p>
                                </div>
                                
                            </div>
                            <button className="sharebtn">Share</button>
                            {/* <button className="btn btn-danger" type="button">Subscribe</button> */}

                        </div>


                    </div>
                    {/* job openings */}
                    <div className="row">
                        <div className="col-sm-8">

                        </div>
                    </div>
                    {/* jobs */}
                    <div className="row">
                        <div className="col-sm-8">

                        </div>
                    </div>
            </div>
        </React.Fragment>
    )

}

export default Sitters; 