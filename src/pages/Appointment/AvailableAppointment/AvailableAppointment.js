import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {
   const [success, setSuccess] = useState(false)
   const bookings = [
      {
         id: 1,
         name: "Teeth Orthodontics",
         time: "8:00 AM - 9:00 AM",
         space: 10
      },
      {
         id: 2,
         name: "Cosmetic Dentistry",
         time: "10:05 AM - 11:30 AM",
         space: 10
      },
      {
         id: 3,
         name: "Teeth cleaning",
         time: "5:00 PM - 6:30 PM",
         space: 10
      },
      {
         id: 4,
         name: "Cavity Protection",
         time: "7:00 AM - 8:30 AM",
         space: 10
      },
      {
         id: 5,
         name: "Teeth Orthodontics",
         time: "8:00 AM - 9:00 AM",
         space: 10
      },
      {
         id: 6,
         name: "Teeth Orthodontics",
         time: "8:00 AM - 9:00 AM",
         space: 10
      },
   ]

   return (


      <Container>
         <Typography sx={{ color: "#14C5BF", my: 3 }} variant="h4" gutterBottom component="div">
            Available Appointments {date.toDateString()}
         </Typography>
         {success && <Alert severity="success">Appointment successfully added</Alert>}
         <Grid container spacing={2}>
            {
               bookings.map(booking => <Booking
                  date={date}
                  key={booking.id}
                  booking={booking}
                  setSuccess={setSuccess}
               >
               </Booking>)
            }
         </Grid>
      </Container>
   )
};

export default AvailableAppointment;