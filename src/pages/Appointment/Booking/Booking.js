import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setSuccess }) => {
   const { name, time, space } = booking
   const [modalOpen, setModalOpen] = React.useState(false);
   const handleOpenModal = () => setModalOpen(true);
   const handleCloseModal = () => setModalOpen(false);
   return (

      <>
         <Grid item xs={12} sm={6} md={4}>

            <Paper elevation={3} sx={{ py: 5 }} >
               <Typography sx={{ color: "#4AD2CE" }} variant="h5" gutterBottom component="div">
                  {name}
               </Typography>
               <Typography variant="h6" gutterBottom component="div">
                  {time}
               </Typography>
               <Typography variant="caption" display="block" gutterBottom>
                  {space} SPACES AVAILABLE
               </Typography>
               <Button onClick={handleOpenModal} variant="contained" sx={{ backgroundColor: "#19D3AF" }}>Booking Available</Button>

            </ Paper >
         </Grid >
         <BookingModal
            setSuccess={setSuccess}
            date={date}
            booking={booking}
            modalOpen={modalOpen}
            handleCloseModal={handleCloseModal}
         ></BookingModal>
      </>

   );
};

export default Booking;