import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
   const [doctors, setDoctors] = useState()
   useEffect(() => {
      fetch("https://aqueous-journey-67105.herokuapp.com/doctors")
         .then(res => res.json())
         .then(data => setDoctors(data))
         .catch(() => { })
   }, [])
   return (
      <div>
         <h2>Our doctors: {doctors?.length}</h2>

         <Container>
            <Grid container spacing={4}>

               {
                  doctors?.map(doctor => <Doctor
                     key={doctor._id}
                     doctor={doctor}
                  >
                  </Doctor>)
               }
            </Grid>
         </Container>

      </div>
   );
};

export default Doctors;