import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
   const { user, logOut } = useAuth()
   return (
      <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     Doctor portal
                  </Typography>

                  <Link to="/appointment">
                     <Button variant="inherit" sx={{ color: 'white' }}>Appointment</Button>
                  </Link>

                  {user?.email ? <Box>
                     <NavLink to='/dashboard'>  <Button sx={{ color: "white" }} variant="inherit">Dashboard</Button></NavLink>

                     <Button onClick={logOut} sx={{ background: "#ff05b0", color: "white" }}>LogOut</Button>
                  </Box>
                     :
                     <NavLink to='/login'>  <Button sx={{ background: "#ff05b0", color: "white" }}>Login</Button></NavLink>
                  }
               </Toolbar>
            </AppBar>
         </Box>
      </div>
   );
};

export default Navigation;