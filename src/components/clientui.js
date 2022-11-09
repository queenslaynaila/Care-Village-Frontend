import React from "react";
import sitterlogo from "../assets/sitter.png";
import "../styles/citter.css";


function DashboardForClient(){

    return (
        <React.Fragment>
            <h1> Dashboard</h1>
             <div >
                <div className="col-lg">
                  <div className="userdetails">
                    <div className="userdash">
                     <div className="avatar">
                       <div className="subavatar">Q</div>
                     </div>
                     <div className="col-lg-10 col-sm-10 col-9 one" >
                           <p className="fvemployername">Queenslay</p>
                           <p className="fvemployerdetails"><span>mayerdaphney@gmail.com</span></p>
                           <p className="fvemployername">
                            <span> since 09-11-2022</span>
                           </p>
                           <div className="dashbtn">
                            <div className="dashbtnleft">

                            </div>
                            <div className="dashbtnright">
                                <button  className="dashbtns">View JObs</button>
                                <button  className="dashbtns">POST JObs</button>
                            </div>
                           </div>
                     </div>
                    </div>
                  </div>
                  <div className="dropdown">
                  <div className="userdetails2">
                        <h5><span>JOBS POSTED BY ME</span></h5>
                        <hr></hr>
                        <p><a>Help Center</a></p>
                        <p><a>Change Password</a></p>

                     </div>
                  </div>
                </div>

                    <div className="col-lg-3" style={{gap:"10px"}}>
                     <div className="updatecard">
                        <h5><span>Required</span></h5>
                        <hr></hr>
                        <p><a>Update Email</a></p>
                        <p><a>Update all Details</a></p>

                     </div>
                     <div className="updatecard" style={{marginTop:"20px"}}>
                        <h5><span>Account Settings</span></h5>
                        <hr></hr>
                        <p><a>Help Center</a></p>
                        <p><a>Change Password</a></p>

                     </div>
                    </div>

             </div>
        </React.Fragment>
    )

}

export default DashboardForClient;

