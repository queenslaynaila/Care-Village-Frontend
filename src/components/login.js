import React from "react";
import {useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import DashboardForClient from "./clientui";
import Sitters from "./sitters";
export default function LoginForm({sendData}) {

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [user,setUser] = useState(null)
    const [client,setClient] = useState(null)
    const [sitter,setSitter] = useState(null)
    let data = {username: username, password: password}

    const navigate = useNavigate()
    const url = 'http://localhost:8000/users'
    useEffect(() => {
        setErrMsg('');
    }, [username,password])


    function handleSubmit(e) {
        e.preventDefault()

            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then((userdetails) => {
                setUser(userdetails)
                sendData(user)
            })
        if(!user){
            setErrMsg('Wrong password or username')
        } else if(user.usertype == 'client'){
            setClient(user)
        } else{
             setSitter(user)
        }

    }




    return (
        <div>
         {client?
         <DashboardForClient></DashboardForClient>
         :sitter?
         <Sitters></Sitters>
         :  <section>

         <div className="col-sm-6">
         <h2 className="mb-3">Login</h2>
         <p style={{color:"red"}}>{errMsg}</p>
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
                     <a href="/#" className="text-decoration-none" onClick={() => navigate("/signup")}>
                         Sign up here
                     </a>
                 </p>
             </div>
             <button type="submit" className="btn btn-danger">Login</button>
         </form>
     </div>
      </section>}
     </div>
    )
}
