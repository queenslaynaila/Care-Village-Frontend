import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/404";
import CompleteRegister from "./components/CompleteRegister"
import Register from './components/Register'
import ResponsiveAppBar from "./components/ResponsiveAppBAr";
export default function Approuter() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register></Register>}></Route>
           <Route path='/register/complete' element={<CompleteRegister></CompleteRegister>}></Route>
            <Route path='*' element={<NotFound/>}/> {/* catch 404 urls */}

        </Route>
    </Routes>
</Router>
  )
}
