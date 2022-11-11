import React from "react";
import oops from '../assets/oops.svg'

function NotFound() {
    return (
        <div className="col-sm-9">
            <img alt="oops" className="" src={oops}></img>
            <h1 className="">Something Went Wrong</h1>
            <p className="">Page not found</p>
         <button className="btn btn-danger btn-lg rounded-0 fw-bold">Contact Support</button>
        </div>
    )
}

export default NotFound;
