import React from "react";
import {useNavigate} from "react-router-dom"
import {Outlet} from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
    let navigate = useNavigate()

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fs-5 mb-sm-5 mb-3 py-3">
                <div className="container col-sm-9">
                    <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
                        <i className="bi bi-flower3"></i> Care Village
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Help</a>
                            </li>
                            <li className="nav-item me-2">
                                <a href="#" className="nav-link login">Login</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link signup dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Signup
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">As a Client</a></li>
                                    <li><a className="dropdown-item" href="#">As a Sitter</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container col-sm-9">
                <Outlet/>
            </div>
        </div>
    )
}

export default Navbar