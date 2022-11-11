
import Accordion from "./components/accordion"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login"
import NotFound from "./components/404";
import SignupSitter from "./components/signupsitter"
import SignupClient from "./components/clientsignup"
import Sitters from "./components/sitters";
import DashboardForClient from "./components/clientui";
import SittersCard from "./components/sitterscard";
import BrowseSitter from "./components/browsesitter";
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
                    <Route path='/sitters-dashboard' element={<Sitters/>}></Route>
                    <Route path='/clients-dashboard' element={<DashboardForClient/>}></Route>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/sitterscard' element={<SittersCard/>}></Route>
                    <Route path='/browsesitter' element={<BrowseSitter/>}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

