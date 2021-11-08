import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import treatment from '../../../images/treatment.png';

const Exception = () => {
   return (

      <Box sx={{ my: 10, px: '3%' }}>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={5} >
               <img style={{ width: "90%", height: '90%' }} src={treatment} alt="" />
            </Grid>

            <Grid item xs={12} md={7} sx={{ textAlign: "left", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", }}>

               <Box>
                  <Typography variant="h4" gutterBottom component="div">
                     Exceptional Dental <br /> Care, On Your Terms
                  </Typography>
                  <Typography sx={{ my: 4, pr: 20 }} variant="subtitle1" gutterBottom component="div">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nobis unde dolorem aliquid! Sunt culpa id illum commodi molestiae quia minus possimus cumque odio sit dolorum odit, maxime nisi at inventore. Reiciendis labore tempora porro cum! Ad rerum qui aspernatur hic vero perferendis laboriosam sint tempore amet quibusdam, veniam doloremque!
                  </Typography>
                  <Button style={{ background: "#11CFE0", color: "white" }}>Learn more</Button>
               </Box>
            </Grid>


         </Grid>
      </Box>

   );
};

export default Exception;