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
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <img  src={sitterlogo} className="img-fluid" alt=""></img>
                                        </div>
                                        <div className="col-sm-8">
                                            <br/><br/>
                                            <h5 className="sittername">Queenslay Naila</h5>
                                            <p className="sitteremail">queenslayjema@gmail.com</p>
                                <button className="sharebtn">Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>

                    {/* job openings */}
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <h2>Job postings</h2>
                                <div className="col-sm-8 justify-content-center">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Client name</th>
                                            <th scope="col">Jobs posted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>6</td>
                                        </tr>
                                    </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                    <br/>

                    {/* jobs */}
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Recommended jobs</h5>
                                        <div className="input-group rounded">
                                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">All jobs</h5>
                                        <div className="input-group rounded">
                                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>

            </div>
        </React.Fragment>
    )

}

export default Sitters; 
