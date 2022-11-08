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
    <Box sx={{ height: '100vh', width: '100%', display: 'flex', alignItems: "center", justifyContent: "center" }}>
        <Card variant='elevation' elevation={2} sx={{ padding: 3, display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ mt: 2, mb: 2 }} variant='h4' color='blue'>Login Into Account</Typography>
            <TextField sx={{ mt: 2, mb: 2 }} variant='outlined' label='Username'></TextField>
            <TextField sx={{ mt: 2, mb: 2 }} variant='outlined' type='password' label='Password'></TextField>
            {isLoading ? <CircularProgress></CircularProgress> : <Button onClick={loginHandler} sx={{ mt: 2, mb: 2 }} variant='contained'>Login</Button>}
        </Card>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: "center" }} open={scaffoldShow} autoHideDuration={3000} onClose={closeScaffold}>
            <Alert onClose={closeScaffold} severity="success" sx={{ width: '100%' }}>Logged In Successfully</Alert>
        </Snackbar>
    </Box>
  )
}

export default Register