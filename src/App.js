import Accordion from "./components/accordion"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login"
import NotFound from "./components/404";
import SignupSitter from "./components/signupsitter"
import SignupClient from "./components/clientsignup"

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

