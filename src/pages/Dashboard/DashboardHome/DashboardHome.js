import { Grid, Typography } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments';


const DashboardHome = () => {
   const [date, setDate] = React.useState(new Date())


   return (
      <div>
         <Typography paragraph>
            <Grid container spacing={4}>
               <Grid item xs={12} sm={12} md={5}>
                  <Calender
                     date={date}
                     setDate={setDate}
                  ></Calender>
               </Grid>

               <Grid item xs={12} sm={12} md={7}>
                  <Appointments
                     date={date}
                  ></Appointments>
               </Grid>
            </Grid>
         </Typography>
      </div>
   );
};

export default DashboardHome;