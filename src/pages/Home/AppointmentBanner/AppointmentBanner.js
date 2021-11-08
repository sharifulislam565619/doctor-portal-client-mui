import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';


// background: url(/static/media/appointment-bg.eb42256e.png) 0% 0% / cover rgb(59, 66, 84);
// margin-top: 200
// px
// ;
// background-blend-mode: darken, luminosity;
// background-position: center;
// background-repeat: no-repeat;

const bgImg = {
   background: `url(${bg})`,
   backgroundColor: 'rgb(16 30 64 / 95%)',
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   marginTop: '200px',
   backgroundBlendMode: "darken,luminosity",
}
const AppointmentBanner = () => {
   return (
      <Grid style={bgImg} container spacing={2}>

         <Grid item xs={12} md={6}>
            <img style={{ width: '100%', marginTop: '-170px' }} src={doctor} alt="" />
         </Grid>
         <Grid sx={{ display: 'flex', textAlign: "start", alignItems: "center" }} item xs={12} md={6}>
            <Box>
               <Typography sx={{
                  mb: 3, color: "#6CD4D3"
               }} variant='h6'>
                  Appointment
               </Typography>
               <Typography sx={{ color: "#fff" }} variant='h4'>
                  Make an appointment Today
               </Typography>
               <Typography sx={{ my: 3, color: "#fff", fontSize: "14px" }} variant='h6'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
               </Typography>

               <Button sx={{ background: "#10CFE6", color: '#fff' }}>learn more</Button>
            </Box>
         </Grid>
      </Grid >
   );
};

export default AppointmentBanner;