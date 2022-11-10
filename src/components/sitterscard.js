import React from "react";
//import sitterlogo from "../assets/sitter.png";
//import { Link } from "react-router-dom";

function SittersCard({sitter}) {
    
    return (
    //   <div className="row row-cols-1 row-cols-md-2 g-4">
    //         <div className="col">
    //             <div className="card text-center shadow p-2">
    //             <img src={sitterlogo} height="250px" width="350px" alt="..."></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">An item</li>
    //                     <li class="list-group-item">A second item</li>
    //                     <li class="list-group-item">A third item</li>
    //                 </ul>
    //             </div>
    //             </div>
    //         </div>
    //         <div className="col">
    //             <div className="card text-center shadow p-2">
    //             <img src={sitterlogo} height="250px" width="350px" alt="..."></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">An item</li>
    //                     <li class="list-group-item">A second item</li>
    //                     <li class="list-group-item">A third item</li>
    //                 </ul>
    //             </div>
    //             </div>
    //         </div>
    //         <div className="col">
    //             <div className="card text-center shadow p-2">
    //             <img src={sitterlogo} height="250px" width="350px" alt="..."></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">An item</li>
    //                     <li class="list-group-item">A second item</li>
    //                     <li class="list-group-item">A third item</li>
    //                 </ul>
    //             </div>
    //             </div>
    //         </div>
    //         <div className="col">
    //             <div className="card text-center shadow p-2">
    //             <img src={sitterlogo} height="250px" width="350px" alt="..."></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">An item</li>
    //                     <li class="list-group-item">A second item</li>
    //                     <li class="list-group-item">A third item</li>
    //                 </ul>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
        <div className="card shadow p-2" style={{width: "15rem", alignItems: "center"}}>
            <img src="" height="100px" width="100px" alt="Grandma"/>
            <div className="card-body">
                <h5 className="card-title">{sitter.user_name}</h5>
                <p className="card-text">{sitter.gender}</p>
                <p className="card-text">{sitter.phone_number}</p>
                <p className="card-text">{sitter.location}</p>
            </div>
        <button type="button" class="btn btn-danger">Explore</button>
    </div>
    )
};

export default SittersCard;