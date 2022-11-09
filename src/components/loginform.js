import React from "react";
import {useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
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
         <>


               

         </>
    )
}
