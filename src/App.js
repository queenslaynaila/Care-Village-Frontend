import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/404";
import CompleteRegister from "./components/CompleteRegister"
import Register from "./components/Register"
import ResponsiveAppBar from "./components/ResponsiveAppBAr";
import Accordion from "./components/accordion"
export default function Approuter() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Register></Register>}></Route>
           <Route path='/register/complete' element={<CompleteRegister></CompleteRegister>}></Route>

           <Route path='/help' element={<Accordion></Accordion>}></Route>

        </Route>
    </Routes>
</Router>
  )
}
