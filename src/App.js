import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/404";
import LockedOut from "./components/lockedout";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<NotFound/>}/> {/* catch 404 urls */}
                    <Route path='/lockedout' element={<LockedOut/>}/> 
                </Route>
            </Routes>
        </Router>
    )
}