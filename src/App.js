import CompleteRegister from "./components/CompleteRegister"
import Register from "./components/Register"
import Accordion from "./components/accordion"
import { useState,useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login"
import NotFound from "./components/404";
import SignupSitter from "./components/signupsitter"
import SignupClient from "./components/clientsignup"
import Sitters from "./components/sitters";
export default function Approuter() {
  const [users,setUsers] =useState([])
  useEffect(() => {
    fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
             <Route path='/signupsitter' element={<SignupSitter/>}/>
             <Route path='/registerclient' element={< SignupClient></SignupClient>}/>
             <Route path='/sitters' element={<Sitters/>}></Route>
            <Route path='/register/complete' element={<CompleteRegister></CompleteRegister>}></Route>
            <Route path='/help' element={<Accordion></Accordion>}></Route>
            <Route path='/help' element={<Accordion></Accordion>}></Route>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    </Routes>
</Router>
  )
}

