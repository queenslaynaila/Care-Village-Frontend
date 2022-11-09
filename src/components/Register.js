import { useRef,useState,useEffect } from 'react'
import React from 'react'
import "../styles/register.css"
import {useNavigate} from "react-router-dom"

export default function Register({users}) {
  let navigate = useNavigate()

  const userRef = useRef()
  const errRef = useRef()

  const [user,setUser] = useState("")
  const [pwd,setPwd] = useState("")
  const [errMsg,setErrMsg] = useState("")
  const [sucess,setSucess] = useState(false)

  useEffect(()=>{
    userRef.current.focus()
  },[])

  useEffect(()=>{
    setErrMsg('')
  },[user,pwd])

  function handleSubmit(e){
    e.preventDefault()
    setSucess(true)

  }


  return (
    <>
    {sucess ?(
       <p>sucesss</p>
    ):(
    <section className='main'>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
   <div className="logincontainer">
     <form onSubmit={handleSubmit}>
       <div className="title"><a className="navbar-brand" href="/#">
                   <i className="bi bi-flower3"></i> Care Village
               </a></div>
        <div  className="input-box underline">
        <label htmlFor="username">Username:</label>
         <input
         type="text"
         placeholder="Enter Your username"
         id ="username" ref={userRef}
         autoComplete="off"
         onChange={(e)=>setUser(e.target.value)} value={user} required></input >
         <div  className="underline"></div>
       </div>
       <div className="input-box">
        < label htmlFor="password">Password:</label>
         <input
         type="password"
         id='password'
         value={pwd}
         placeholder="Enter Your Password"
         onChange={(e)=>setPwd(e.target.value)}
         required>
         </input>
         <div className="underline"></div>
       </div>
       <div className="input-box button">
        <input type="submit" name="" value="LOG IN"></input>
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
 </section>
    )}
    </>
 )
 }



