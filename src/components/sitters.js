import React from "react";
// import sitterlogo from "../assets/sitter.png";
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
                                    {/* <img  src={sitterlogo} className="img-fluid" alt=""></img>       */}
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

                        <div className="card">
                            <div className="card-body">
                                <h2>Job postings</h2>
                                <div className="col-sm-8">
                                <table class="table">
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
                    {/* jobs */}
                    <div className="row">
                        <div className="col-sm-8">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                    <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Recommended jobs</h5>
                                        <div class="input-group rounded">
                                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">All jobs</h5>
                                        <div class="input-group rounded">
                                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
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