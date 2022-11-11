import {React, useEffect, useState} from "react";
import ProfilePic from "../assets/pic.svg";

function Offers() {
    const [user, setUser] = useState('');
    const [account, setAccount] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUser(user)
            if (user.usertype === 'client') {
            fetch('http://localhost:8000/client/' + user.client_id).then(res => res.json())
                .then(data => setAccount(data))
            } else if (user.usertype === 'sitter') {
                fetch('http://localhost:8000/sitter/' + user.sitter_id).then(res => res.json())
                    .then(data => setAccount(data))
            }
        }
    }, []);

    console.log(user)
    console.log(account)
    return (
        <div className="col-sm-9">
            <img className="p-2 align-content-center" src={ProfilePic} alt="profile" style={{width: '7rem', height:'7rem'}}/>
            <h1>{account.firstname} {account.lastname}</h1>
            <p>Account type: <b>{user.usertype}</b></p>
            <p>Username: <b>{user.username}</b></p>
            <p>Email: <b>{account.email}</b></p>
            <p>Phone Number: <b>{account.phone_number}</b></p>
            <p>Location: <b>{account.location}</b></p>
        </div>
    )
}

export default Offers;
