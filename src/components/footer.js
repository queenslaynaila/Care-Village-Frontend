import React from "react";
import {useNavigate} from "react-router-dom"

function Footer() {
    let navigate = useNavigate()

    return (
        <div className="container">
            <footer className="py-5">
                <hr/>
                <div className="row">
                    <div className="col-sm-6 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted"onClick={() => navigate("/client-signup")}>Sign up as a Client</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted"onClick={() => navigate("/sitter-signup")}>Sign up as a Sitter</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted"onClick={() => navigate("/login")}>Login</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted"onClick={() => navigate("/help")}>Help</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control"
                                       placeholder="Email address"/>
                                <button className="btn btn-danger" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="/#">
                            <li className="bi-facebook"></li>
                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="/#">
                            <li className="bi-instagram"></li>
                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="/#">
                            <li className="bi-twitter"></li>
                        </a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
