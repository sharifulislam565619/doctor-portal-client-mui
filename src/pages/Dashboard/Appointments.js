import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Appointments = ({ date }) => {
   const [appointments, setAppointments] = useState([])
   const { user, token } = useAuth()

   useEffect(() => {
      fetch(`https://aqueous-journey-67105.herokuapp.com/appointments?email=${user.email}&date=${date}`, {
         headers: {
            'authorization': `Bearer ${token}`
         }
      })
         .then(res => res.json())
         .then(data => setAppointments(data))
   }, [date])
   return (
      <div>
         <Typography variant="h4">
            Total Appointment {appointments?.length}
         </Typography>

         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Patient name</TableCell>
                     <TableCell align="right">time</TableCell>
                     <TableCell align="right">Service Name</TableCell>

                  </TableRow>
               </TableHead>
               <TableBody>
                  {appointments.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">
                           {row.userName}
                        </TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.serviceName}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default Appointments;