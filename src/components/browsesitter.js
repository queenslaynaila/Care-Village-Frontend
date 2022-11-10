import React, { useEffect } from "react";
import SittersCard from "./sitterscard";

const sitterPageColumns = {
    display: "flex",
    justifyContent: "space-between",
  };



function BrowseSitter({sitters}) {

    // const[sitters, setSitters] = useEffect([])
    // useEffect(() => {
    //     fetch("http://localhost:8000/sitters")
    //     .then(res => res.json())
    //     .then(setSitters)
    // },[])

    return (
        <div>
            <div style={sitterPageColumns}>
                {/* <div className="col">
                    {sitters.map(sitter => <SittersCard sitter={sitter} />)}
                </div> */}
                <SittersCard/>
            </div>
        </div>
        
    )
}
export default BrowseSitter;