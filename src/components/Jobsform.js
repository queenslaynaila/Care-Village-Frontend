import React,{useState} from 'react'

import { Grid, Card,Paper, MenuItem,Avatar, Typography, TextField, Checkbox ,Button, FormControl,FormControlLabel,FormLabel,Radio,RadioGroup} from '@mui/material';

   const defaultValues = {
    headline: "",
    DatePosted: Date(),
     CareNeeded: "",
    loation: "",
    schedule: "",
    peopleCount:0,
               };
  const CareNeeded=[{
    label :"BabySitter",
    value:"BS"
  },
  {
    label:"Nanny",
    value:"NN"
  },
  {
    label:"special needs care",
    value:"SNC"
  },
   {
    label:"companion care",
    value:"CC"
  }
  ];
  export default function Jobsform ()  {
    const paperStyle = { padding: '30px 20px', width: 400, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#dc3545' }
    const marginTop = { marginTop: 5 }

    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);

    };
    const [CareNeed, setCareNeed] = useState("BS");

    const handleChange= (event) => {
      setCareNeed(event.target.value);
    }
    return (
        <Grid>
            <Paper    elevation={20} style={paperStyle}>
                 <Grid align='center'>
                    <Avatar style={avatarStyle}>

                    </Avatar>
                    <h2 style={headerStyle}>ENTER JOB DETAILS</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form </Typography>
                </Grid>
                <form>
                    <TextField sx={{ mt: 2, mb: 2 }} fullWidth label='Headline' placeholder="Headline" value={formValues.Headline} />
                    <TextField sx={{ mt: 2, mb: 2 }} fullWidth label='location' placeholder="Location" value={formValues.Loation}/>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender of Sitter Prefered</FormLabel>
                        <RadioGroup aria-label="gender Prefered" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <Card variant='outlined' sx={{ mr:2, mt: 3 ,mb:5,ml:3, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                    <Typography sx={{ mb: 1 }} variant='body2'>Schedule</Typography>
                    <Typography sx={{ mb:0.5 }} variant='body'>Start date</Typography>
                    <Typography sx={{ mb: 1 }} variant='body2'>Days</Typography>

                    </Card>

                    <TextField fullWidth label='date-posted' placeholder="" value={formValues.DatePosted}/>
                    <TextField sx={{ mt: 2, mb: 2 }} fullWidth label='Family' placeholder="Enter number of persons to be taken care of " value={formValues.peopleCount}/>
                    <TextField
                      sx={{ mt: 2, mb: 2 }}
                      id="outlined-select-currency"
                      select
                      label="Care-needed"
                       value={CareNeed}
                        onChange={handleChange}
                        helperText="Please select the care you need"
                         >
                        {CareNeeded.map((option) => (
                         <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                       ))}
                       </TextField>

                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button  onclick= {handleSubmit} type='submit' variant='contained' color='primary' style={avatarStyle}>Submit</Button>
                </form>
            </Paper>
        </Grid>
    )}
