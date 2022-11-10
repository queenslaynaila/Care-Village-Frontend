import React from 'react'
import "../styles/dash.css"
import baby from '../assets/baby.svg'
import pet from '../assets/pet.svg'
import specialNeeds from '../assets/specialneeds.svg'
import medical from '../assets/medical.svg'
import {useNavigate} from "react-router-dom"
export default function CompleteRegister() {
  let navigate = useNavigate()
  function handleClick(e){
    e.preventDefault()

  }
  function redirect(e){
    navigate("/clientdashboard")
  }
  return (
    <>
     <div className="row mt-5 justify-content-between">
                <div className="col-sm-auto mb-2">
                    <div onClick={(e)=>handleClick(e)} className="card shadow p-2 cat" style={{width: "15rem", alignItems: "center"}}>
                        <img src={baby} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Sitter</h5>
                            <p className="card-text">Regular support for after-school, weekdays, and weekends</p>
                        </div>
                    </div>
                </div>
                <div className="col-auto mb-2">
                    <div onClick={(e)=>handleClick(e)} className="card shadow p-2 cat" style={{width: "15rem", alignItems: "center"}}>
                        <img src={pet} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Pet Sitter</h5>
                            <p className="card-text">Occasional help with last-minute needs, date night and
                                more</p>
                        </div>
                    </div>
                </div>
                <div className="col-auto mb-2">
                    <div onClick={(e)=>handleClick(e)} className="card shadow p-2 cat" style={{width: "15rem", alignItems: "center"}}>
                        <img src={medical} height="100px" width="100px" alt="Grandma"/>
                        <div className="card-body">
                            <h5 className="card-title">Care Companion</h5>
                            <p className="card-text">Specialized care to meet the individual needs of your patient</p>
                    </div>
                </div>
            </div>
            <div className="col-auto mb-2">
                <div  onClick={(e)=>handleClick(e)} className="card shadow p-2 cat" style={{width: "15rem", alignItems: "center",cursor:"pointer"}}>
                    <img src={specialNeeds} height="100px" width="100px" alt="Grandma"/>
                    <div className="card-body">
                        <h5 className="card-title">Special Needs</h5>
                        <p className="card-text">Specialized care to meet the individual needs of your child</p>
                    </div>
                </div>
            </div>
        </div>
        <button onClick={(e)=>redirect(e)} className='dashbtn'>VIEW DASHBOARD</button>
    </>
  )
}

