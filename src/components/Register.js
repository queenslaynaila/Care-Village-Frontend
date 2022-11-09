import React from 'react'
import "../styles/register.css"
export default function Register() {
  function handleClick(e) {
    e.preventDefault()
  }

  return (
      <div className='main'>
        <div className="logincontainer">
          <form>
            <div className="title"><a className="navbar-brand" href="/#">
                        <i className="bi bi-flower3"></i> Care Village
                    </a></div>
             <div  className="input-box underline">
              <input type="text" placeholder="Enter Your username" required></input>
              <div  className="underline"></div>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Enter Your Password" required></input>
              <div className="underline"></div>
            </div>
            <div className="input-box button">
             <input type="submit" name="" value="LOG IN" onClick={(e)=>handleClick(e)} ></input>
           </div>
         </form>
         <div className="option">or Connect With Social Media</div>
         <div className="twitter">
           <a href="/#"><i className="fab fa-twitter"></i>Sign in With Twitter</a>
         </div>
         <div className="facebook">
           <a href="/#"><i className="fab fa-facebook-f"></i>Sign in With Facebook</a>
         </div>
       </div>
      </div>
  )
}

