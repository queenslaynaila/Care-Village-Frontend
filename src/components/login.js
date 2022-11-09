import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const url = 'http://localhost:8000/login'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(() => navigate('/profile'))
    }

    return (
        <div className="col-sm-6">
            <h2 className="mb-3">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <p>
                        Don't have an account?{' '}
                        <a href="#/" className="text-decoration-none" onClick={() => navigate("/signup-client")}>
                            Sign up here
                        </a>
                    </p>
                </div>
                <button type="submit" className="btn btn-danger">Login</button>
            </form>
        </div>
    )
}