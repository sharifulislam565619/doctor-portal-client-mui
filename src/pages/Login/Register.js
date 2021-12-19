import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png';

const Register = () => {
   const [loginData, setLoginData] = useState({})
   const { userRegister, isLoading, error } = useAuth()

   // console.log(loginData);
   const navigate = useNavigate()
   const location = useLocation()

   const handleOnBlur = (e) => {
      const field = e.target.name
      const value = e.target.value
      const newData = { ...loginData }
      newData[field] = value
      setLoginData(newData)
   }

   const handleRegister = e => {
      if (loginData.password !== loginData.password2) {
         alert("password not matched")
         return

      }
      userRegister(loginData.email, loginData.password, loginData.name, navigate, location)
      e.preventDefault()
   }
   return (
      <Container>
         <Grid container spacing={2}>
            <Grid sx={{ mt: 5 }} item xs={12} sm={6} md={6} >
               <Typography variant={'body1'}>
                  Please Register
               </Typography>
               {error && <Typography variant={'body1'} sx={{ color: 'red' }}>
                  {error}
               </Typography>}

               {isLoading ? <CircularProgress />

                  :
                  <form onSubmit={handleRegister}>
                     <TextField id="standard-basic"
                        label="User name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard"
                        sx={{ width: "100%", m: 1 }} />
                     <TextField id="standard-basic"
                        label="User email"
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard"
                        sx={{ width: "100%", m: 1 }} />
                     <TextField id="standard-basic"
                        name="password"
                        label="Password"
                        onBlur={handleOnBlur}
                        type="password"
                        variant="standard"
                        sx={{ width: "100%", m: 1 }} />
                     <TextField id="standard-basic"
                        name="password2"
                        label="Retype Password"
                        onBlur={handleOnBlur}
                        type="password"
                        variant="standard"
                        sx={{ width: "100%", m: 1 }} />

                     <Button sx={{ width: "100%", m: 1 }} variant={'contained'} type="submit">Register</Button>

                     <NavLink to="/login">I have an Account <Button variant="text">Login</Button></NavLink>
                  </form>}
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
               <img src={login} style={{ width: "100%" }} alt="" />
            </Grid>
         </Grid>
      </Container>
   );
};

export default Register;