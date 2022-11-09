import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SignupSitter() {
    const navigate = useNavigate()
    const url = 'http://localhost:9292/clientregistration'
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState()
    const [yearOfBirth, setYearOfBirth] = useState()
    const [age, setAge] = useState()
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        let data;
        if (password === confirmPassword) {
            data = {
                firstname: firstName,
                lastname: lastName,
                username: username,
                location: location,
                email: email,
                password: password
            }
            setError("")
        } else {
            setError("Passwords do not match")
        }
        console.log(data)
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => console.log(res.json()))
          //  .then(data => navigate('/profile/' + data.username))
    }

    return (
        <div className="col-sm-6">
            <h2 className="mb-3">Sign up</h2>
            {error ? <div className="alert alert-warning" role="alert">{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                    <div className="col">
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
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="phonenumber"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="yearofbirth"
                            placeholder="Year of Birth"
                            value={yearOfBirth}
                            onChange={(e) => setYearOfBirth(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="age"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
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
                    <div className="col">
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
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
