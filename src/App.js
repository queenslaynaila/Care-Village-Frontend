import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<Home/>}/> {/* catch 404 urls */}
                </Route>
            </Routes>
        </Router>
    )
}