import { Alert, Box, Button, Card, CircularProgress, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [scaffoldShow, setScaffoldShow] = useState(false);

    const closeScaffold = () => {setScaffoldShow(false)};
    const navigate = useNavigate();

    const loginHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setScaffoldShow(true);
            setIsLoading(false);
            setTimeout(() => {
                setScaffoldShow(false);
                navigate('/register/complete');
            }, 4000)
        }, 5000)
    }

  return (
    <div class="wrapper">
    <header>Login Form</header>
    <form action="#">
      <div class="field email">
        <div class="input-area">
          <input type="text" placeholder="Email Address"></input>
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email can't be blank</div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" placeholder="Password"></input>
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password can't be blank</div>
      </div>
      <div class="pass-txt"><a href="#">Forgot password?</a></div>
      <input type="submit" value="Login"></input>
    </form>
    <div class="sign-txt">Not yet member? <a href="#">Signup now</a></div>
  </div>

  )
}

export default Register
