import { TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';
import bg from '../../../images/appointment-bg.png';

const backgroundBg = {
   background: `url(${bg})`,
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   backgroundBlendMode: "darken",
   backgroundPosition: "center",
   backgroundColor: "#050c20f0",
}



const Contact = () => {
   return (
      <div style={backgroundBg}>
         <Typography sx={{ color: "#11D0DB" }} variant='h6'>
            Contact us
         </Typography>
         <Typography sx={{ color: "#11D0DB" }} variant='h5'>
            Always connect with us
         </Typography>
         <form>
            <TextField sx={{ width: " 50%", my: 3, background: "white", color: "black" }}
               hiddenLabel
               id="filled-hidden-label-small"
               placeholder="Email*"
               size="small"
            /><br />
            <TextField sx={{ width: " 50%", my: 3, background: "white", color: "black" }}
               hiddenLabel
               id="filled-hidden-label-small"
               placeholder="Subjects*"
               size="small"
            /><br />
            <TextareaAutosize
               maxRows={20}
               aria-label="maximum height"
               placeholder="Message*"
               style={{ width: "50%", height: "130px", }}
            />

         </form>
      </div>
   );
};

export default Contact;