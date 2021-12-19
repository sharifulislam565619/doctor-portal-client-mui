import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [image, setImage] = useState(null)

   const handleSubmit = (e) => {
      if (!image) {
         return
      }
      const formData = new FormData()
      formData.append('name', name);
      formData.append('email', email);
      formData.append('image', image);
      fetch('https://aqueous-journey-67105.herokuapp.com/doctors', {
         method: 'POST',
         body: formData,
      })
         .then(response => response.json())
         .then(result => {
            if (result.insertedId) {
               alert("data successfully added")
            }
         })
         .catch(error => {
            console.error('Error:', error);
         });

      e.preventDefault()
   }
   return (
      <div>
         <h2>Add a Doctor</h2>

         <form>
            <TextField id="standard-basic"
               label="Name"
               required
               onChange={e => setName(e.target.value)}
               sx={{ width: "50%" }}
               variant="standard" />
            <br />
            <TextField id="standard-basic"
               label="Email"
               onChange={e => setEmail(e.target.value)}
               required
               sx={{ width: "50%" }}
               variant="standard" />
            <br />

            <Input
               accept="image/*"
               type="file"
               onChange={e => setImage(e.target.files[0])}
            />
            <br />
            <Button onClick={handleSubmit} variant="contained" type="submit">
               Upload
            </Button>

         </form>
      </div>
   );
};

export default AddDoctor;