import React from "react";
import sitterlogo from "../assets/sitter.png";
import "../styles/citter.css";


function DashboardForClient({client}){
  console.log(client)

    return (
        <React.Fragment>
            <h1> Dashboard</h1>
             <div >
                <div className="client"  >
                  <div  id="userdetails">
                    <div id="userdash">
                     <div id="avatar">
                       <div id="subavatar">{client.username.charAt(0).toUpperCase()}</div>
                     </div>
                     <div   >
                           <p  id="fvemployername">{client.username}</p>
                           <p className="fvemployerdetails"><span>soilatorome@gmail.com</span></p>
                           <p className="fvemployername">
                            <span> Since {client.created_at}</span>
                           </p>
                           <div id="dashbtn">
                            <div id="dashbtnleft">

                            </div>
                            <div id="dashbtnright">
                                <button  className="dashbtns">View JObs</button>
                                <button  className="dashbtns">POST JObs</button>
                            </div>
                           </div>
                     </div>
                    </div>
                  </div>
                  <div id="dropdown">
                  <div id="userdetails2">
                        <h5><span>JOBS POSTED BY ME</span></h5>
                        <hr></hr>
                        <p><a>Help Center</a></p>
                        <p><a>Change Password</a></p>

                     </div>
                  </div>
                </div>

                    <div>
                     <div id="updatecard">
                        <h5><span>Required</span></h5>
                        <hr></hr>
                        <p><a>Update Email</a></p>
                        <p><a>Update all Details</a></p>

                     </div>
                     <div  >
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

