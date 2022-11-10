import Accordion from "./ sitter.js/accordion"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./ sitter.js/navbar";
import Home from "./ sitter.js/home";
import Login from "./ sitter.js/login"
import NotFound from "./ sitter.js/404";
import SignupSitter from "./ sitter.js/signupsitter"
import SignupClient from "./ sitter.js/clientsignup"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup-as-sitter' element={<SignupSitter/>}/>
                    <Route path='/signup-as-client' element={< SignupClient/>}/>
                    <Route path='/help' element={<Accordion/>}></Route>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

