import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddAdmin = () => {
   const [email, setEmail] = useState()
   const [success, setSuccess] = useState(false)
   const { token } = useAuth()
   console.log(token);
   const handleEmail = (e) => {
      setEmail(e.target.value)
   }

   const handleSubmit = (e) => {
      const addEmail = {
         email
      }
      fetch(`http://localhost:5000/users/admin`, {
         method: "PUT",
         headers: {
            'authorization': `Bearer ${token}`,
            'content-type': 'application/json'
         },
         body: JSON.stringify(addEmail)
      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged) {
               setSuccess(true)
            }
         })
      e.preventDefault()
   }

   return (
      <div>
         <h2>Add an Admin</h2>
         {success && <Alert severity="success">admin successfully added</Alert>}

         <form onSubmit={handleSubmit}>
            <TextField
               onBlur={handleEmail}
               label="email"
               sx={{ width: "50%" }}
               type="email"
               variant='standard'

            >

            </TextField>
            <Button variant="contained" type="submit">Submit</Button>
         </form>
      </div>
   );
};

export default AddAdmin;