import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import NotFound from "./components/404";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<NotFound/>}/> {/* catch 404 urls */}
                </Route>
            </Routes>
        </Router>
    )
}