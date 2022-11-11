import {React, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {Outlet} from "react-router-dom"
import Footer from "./footer";
import "../styles/navbar.css"

function Navbar() {
    let navigate = useNavigate()
    const [user, setUser] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) setUser(user)
    }, []);

    function logout() {
        localStorage.removeItem('user');
        if (user) setUser('')
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg fs-5 mb-sm-5 mb-3 py-3">
                <div className="container col-sm-9">
                    <a className="navbar-brand" href="#/" onClick={() => navigate("/")}>
                        <i className="bi bi-flower1"></i> Care Village
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav fw-bold ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#/" onClick={() => navigate("/help")}>
                                    <i className="bi bi-question-diamond-fill"/> Help</a>
                            </li>
                            {user ?
                                <>
                                    {user.usertype === 'client' ?
                                        <li className="nav-item">
                                            <a className="nav-link" href="#/"
                                               onClick={() => navigate("/offers")}>
                                                <i className="bi bi-search"/> Search
                                            </a>
                                        </li>
                                        :
                                        <li className="nav-item">
                                            <a className="nav-link" href="#/"
                                               onClick={() => navigate("/offers")}>
                                                <i  className="bi bi-file-earmark-plus-fill"/> Create job offer
                                            </a>
                                        </li>
                                    }
                                </>
                                : null}
                            {user ?
                                <li className="nav-item dropdown ms-sm-3 d-inline-flex">
                                    <a className="nav-link login dropdown-toggle"
                                       href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-person-fill"></i>{user.username}
                                    </a>
                                    <ul className="dropdown-menu">
                                        {user ?
                                            <>
                                                {user.usertype === 'client' ?
                                                    <li>
                                                        <a className="dropdown-item fw-bold" href="#/"
                                                           onClick={() => navigate("/offers")}>
                                                            <i className="bi bi-send-fill"/> Offers Sent
                                                        </a>
                                                    </li>
                                                    :
                                                    <li>
                                                        <a className="dropdown-item fw-bold" href="#/"
                                                           onClick={() => navigate("/offers")}>
                                                            <i className="bi bi-folder-fill"/> Offers Received
                                                        </a>
                                                    </li>
                                                }
                                            </>
                                            : null}
                                        <li>
                                            <a className="dropdown-item fw-bold" href="#/"
                                               onClick={() => navigate("/profile")}>
                                                <i className="bi bi-gear"/> Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item fw-bold" href="#/" onClick={() => logout()}>
                                                <i className="bi bi-box-arrow-left"/> Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                :
                                <>
                                    <li className="nav-item ms-sm-3 mb-sm-0 mb-2 d-inline-flex">
                                        <a className="nav-link login" href="#/" onClick={() => navigate("/login")}>
                                            <i className="bi bi-person-fill"/> Login
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown ms-sm-3 d-inline-flex">
                                        <a className="nav-link signup dropdown-toggle"
                                           href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-check2-square"/> Signup
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item fw-bold" href="#/"
                                                   onClick={() => navigate("/signup-as-client")}>As a Client
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item fw-bold" href="#/"
                                                   onClick={() => navigate("/signup-as-sitter")}>As a Sitter
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container col-sm-9">
                <Outlet/>
            </div>
            <div className="container col-sm-9">
                <Footer/>
            </div>
        </div>
    )
}

export default Navbar
