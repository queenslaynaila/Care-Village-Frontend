import {React, useEffect} from "react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
let message

export default function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const url = 'http://localhost:8000/users'
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState('')

    useEffect(() => {
        if (location.state !== null) {
            message = location.state.message
            setSuccess(message)
        }
    })

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            username: username,
            password: password,
        }
        
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('r', data)
                if (data === null) {
                    setError("Sign up failed. Try again")
                } else if (data.id) {
                    localStorage.setItem('user', JSON.stringify(data))
                    setSuccess("Signup Success")
                    navigate('/sitters-dashboard')
                    navigate(0)
                } else {
                    setError("Sign up failed. Try again")
                }
                setUserName('');
                setPassword('');
            })
    }

    return (
        <div className="col-sm-6">
            <h2 className="mb-3">Login</h2>
            {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            {success ? <div className="alert alert-success" role="alert">{success}</div> : null}
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
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
                    <p className="my-3">
                        Don't have an account?{' '}
                        <a href="#/" className="text-decoration-none"
                           onClick={() => navigate("/signup-as-client")}>Sign up here</a>
                    </p>
                </div>
                <button type="submit" className="btn btn-danger">Login</button>
            </form>
        </div>
    )
}
