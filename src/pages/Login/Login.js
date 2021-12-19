import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png';



const Login = () => {


   const navigate = useNavigate();
   const location = useLocation();
   const [loginData, setLoginData] = useState({})
   const { userLogIn, error, isLoading, signInWithGoogle } = useAuth()

   const handleGoogleSignIn = () => {
      signInWithGoogle(navigate, location)
   }


   const handleOnBlur = (e) => {
      const field = e.target.name
      const value = e.target.value
      const newData = { ...loginData }
      newData[field] = value
      setLoginData(newData)
   }
   const handleLogin = e => {
      userLogIn(loginData.email, loginData.password, navigate, location)
      e.preventDefault()
   }
   return (
      <Container>
         <Grid container spacing={2}>
            <Grid sx={{ mt: 5 }} item xs={12} sm={6} md={6} >
               <Typography variant={'body1'} >
                  Please Login
               </Typography>
               {error && <Typography variant={'body1'} sx={{ color: "red" }}>
                  {error}
               </Typography>}

               {isLoading ? <CircularProgress /> : <form onSubmit={handleLogin}>


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

                  <Button sx={{ width: "100%", m: 1 }} variant={'contained'} type="submit">Login</Button>
                  <NavLink to="/register">Create a new Account <Button variant="text">Register</Button></NavLink>
               </form>}
               <Button onClick={handleGoogleSignIn} variant="contained">Google signIn</Button><br />
               <Link to="/"><Button>back to home</Button></Link>
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
               <img src={login} style={{ width: "100%" }} alt="" />
            </Grid>
         </Grid>
      </Container>

   );
};

export default Login;

