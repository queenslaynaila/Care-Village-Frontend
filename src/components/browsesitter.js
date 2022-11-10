import React, { useEffect } from "react";
import SittersCard from "./sitterscard";
import '../styles/browsestyle.css'
import { useState } from "react";


function BrowseSitter() {
    

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3  
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2  
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      }

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