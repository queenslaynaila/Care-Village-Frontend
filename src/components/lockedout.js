import React from "react";
import childimg from '../assets/images/child.png';
import "../styles/lockedout.css"


function LockedOut(){

    return (
        <React.Fragment className="container">
            <div className="row">
                <div className="col-sm-4">
                    {/* <img src={"src/assets/child.png"} className="img-fluid"  alt="child"/> */}
                    <img src={childimg}  className="img-fluid" alt="child-image"/>
                </div>
                <div className="col-sm-8 align-self-center">
                    <p> Sorry, but you have to be 18 years or older to join our network. This means we cannot process your registration at this time. But we'd love to have you back with your guardian or once you are 18</p>
                </div>
            </div>
        </React.Fragment>
        

    )
}

export default LockedOut;