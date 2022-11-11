import React,{useState} from 'react'
import {Grid,Paper, MenuItem,Avatar, Typography, TextField, Checkbox ,Button, FormControl,FormControlLabel,FormLabel,Radio,RadioGroup, Snackbar, Alert, CircularProgress, InputLabel, Select} from '@mui/material';
import { useNavigate } from 'react-router-dom'
//import { LocalizationProvider } from '@mui/x-date-pickers-pro';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
//import { Dayjs } from 'dayjs'; 

  const defaultValues = {
    headline: "",
    DatePosted: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getYear()}`,
    CareNeeded: "",
    location: "",
    schedule: "",
    peopleCount:" "
      };

  
  const Url="http://localhost:8000/jobs"
  export default function Signup  ()  {
    const paperStyle = { padding: '30px 20px', width: 400, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    const handleClose = () => { setOpen(false); };

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        console.log(formValues);
        const response = await fetch(`${Url}?headline=${defaultValues.headline}&date_posted=${defaultValues.DatePosted}&expires=expires&care_needed=${defaultValues.CareNeeded}&schedule=${defaultValues.schedule}&location=${defaultValues.location}&majorrequirement=peoplerequiredare${defaultValues.peopleCount}&sitter_id=1&client_id=1&status=Pending`, { method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, });
         console.log(response.status);
         console.log(response);
        // const data = await response.json();
        // console.log(data);
        // setTimeout(() => {
        //   setIsSuccess(true);
        //   setOpen(true);
        //   setTimeout(() => {
        //     handleClose();
        //   }, 3000)
        // }, 2000)
        setIsLoading(false);
   
    };
   
    const navigate = useNavigate();
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                {isLoading && <CircularProgress></CircularProgress>} 
                {!isLoading && isSuccess && <Typography>Success</Typography>} 
                 {!isLoading && !isSuccess && <Grid align='center'>
                    <Avatar style={avatarStyle}>
                       
                    </Avatar>
                    <h2 style={headerStyle}>ENTER JOB DETAILS</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form </Typography>
                </Grid>}
                {!isLoading && !isSuccess && <form onSubmit={handleSubmit}>
                    <TextField onChange={handleInputChange} sx={{ mt: 2, mb: 2 }} fullWidth label='Headline' name='headline' placeholder="Headline" value={formValues.headline} />
                    <TextField onChange={handleInputChange} sx={{ mt: 2, mb: 2 }} fullWidth label='location' name='location' placeholder="Location" value={formValues.location}/>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender of Sitter Prefered</FormLabel>
                        <RadioGroup aria-label="gender Prefered" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Schedule</FormLabel>
                        <RadioGroup onChange={handleInputChange} aria-label="gender Prefered" name="schedule" style={{ display: 'initial' }}>
                            <FormControlLabel value="daily" control={<Radio />} label="Daily" />
                            <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
                            <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='date-posted' placeholder="" value={formValues.DatePosted}/>
                    <TextField sx={{ mt: 2, mb: 2 }} fullWidth label='No of persons' placeholder="Enter number of persons to be attended " name="peopleCount" onChange={handleInputChange} value={formValues.peopleCount}/>

                       <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Care Needed</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={defaultValues.CareNeeded}
                          label="Care Needed"
                          onChange={handleInputChange}
                          name='CareNeeded'
                        >
                          <MenuItem sx={{ color: 'black' }} value='BabySitter'>BabySitter</MenuItem>
                          <MenuItem value='Nanny'>Nanny</MenuItem>
                          <MenuItem value='Special Needs Care'>Special Needs Care</MenuItem>
                          <MenuItem value='Companion Care'>Companion Care</MenuItem>
                        </Select>
                      </FormControl>

                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button onClick={handleSubmit} type='submit' variant='contained' color='primary'>Submit</Button>
                </form>}
            </Paper>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Form submitted successfully
              </Alert>
            </Snackbar>
            <Button   onClick={() => { navigate('/clientdash') }}type='submit' variant='contained' color='primary'>Return to Dashboard</Button>
            
        </Grid>

    )}

