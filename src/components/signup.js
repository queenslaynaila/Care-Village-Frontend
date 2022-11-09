import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate()
    const url = 'http://localhost:8000/signup'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        let data;
        if (password === confirmPassword) {
            data = {
                email: email,
                password: password,
                confirm_password: confirmPassword,
            }
            setError("")
        } else {
            setError("Passwords do not match")
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
            <h2 className="mb-3">Sign up</h2>
            {error ? <div className="alert alert-warning" role="alert">{error}</div> : null}
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
                    <input
                        type="password"
                        className="form-control"
                        id="confirm-password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <p className="my-3">
                        Already have an account?{' '}
                        <a href="#/" className="text-decoration-none" onClick={() => navigate("/login")}>
                            Login here
                        </a>
                    </p>
                </div>
                <button type="submit" className="btn btn-danger">Sign up</button>
            </form>
        </div>
    )
}