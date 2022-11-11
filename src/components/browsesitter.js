import React, { useEffect } from "react";
import SittersCard from "./sitterscard";
import '../styles/browsestyle.css'
import { useState } from "react";


function BrowseSitter() {
      const[sitters, setSitters] = useState(null)
    
      useEffect(() => {
          fetch("http://localhost:8000/joboffers")
          .then(res => res.json())
          .then(data => setSitters(data))
      },[])
    
    

    return (
        <div className="browse-page">
            
            {sitters?
                sitters.map(sitter=><SittersCard sitter={sitter}></SittersCard>)
            :<p>login</p>}
        </div>
        // <div>
        //     <div>
        //         {/* <Carousel responsive={responsive}>
        //            {sitters.map(sitter=><SittersCard sitter={sitter}></SittersCard>)}
        //         </Carousel> */}
        //         <SittersCard />
        //     </div>
        // </div>
        
    )
}
export default BrowseSitter;