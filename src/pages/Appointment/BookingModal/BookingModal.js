import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

const BookingModal = ({ modalOpen, handleCloseModal, booking, date, setSuccess }) => {
   const { name, time, price } = booking
   const { user } = useAuth()

   const initialInfo = { userName: user.displayName, userEmail: user.email, phone: "" }
   const [userInfo, setUserInfo] = useState(initialInfo)


   const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newUserInfo = { ...userInfo }
      newUserInfo[field] = value;
      setUserInfo(newUserInfo)
   }

   const handleSubmit = (e) => {
      const appointment = {
         ...userInfo,
         time,
         price,
         serviceName: name,
         date: date.toLocaleDateString()
      }
      fetch("https://aqueous-journey-67105.herokuapp.com/appointments", {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(appointment)
      })
         .then(res => res.json())
         .then(data => {
            if (data.insertedId) {

               setSuccess(true)
               handleCloseModal()
            }


         })
      handleCloseModal()
      e.preventDefault()
   }
   return (
      <Modal
         open={modalOpen}
         onClose={handleCloseModal}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <form onSubmit={handleSubmit} >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  {name}
               </Typography>
               <TextField
                  disabled
                  sx={{ width: '90%', margin: 1 }}
                  defaultValue={time}
                  id="outlined-size-small"
                  size="small"
               />
               <TextField
                  sx={{ width: '90%', margin: 1 }}
                  id="outlined-size-small"
                  name="userName"
                  onBlur={handleOnBlur}
                  defaultValue={user.displayName}
                  size="small"
               />
               <TextField
                  sx={{ width: '90%', margin: 1 }}
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user.email}
                  size="small"
               />
               <TextField
                  sx={{ width: '90%', margin: 1 }}
                  id="outlined-size-small"
                  name="phone"
                  onBlur={handleOnBlur}
                  defaultValue="Your Phone"
                  size="small"
               />
               <TextField
                  disabled
                  sx={{ width: '90%', margin: 1 }}
                  id="outlined-size-small"
                  defaultValue={date.toDateString()}
                  size="small"
               />
               <Button type="submit" variant="contained">Submit</Button>
            </Box>
         </form>
      </Modal>
   );
};

export default BookingModal;

