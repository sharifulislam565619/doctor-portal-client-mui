import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';




const Banner = () => {
   return (
      <Container sx={{ width: '100%', height: "600px", display: "flex", alignItems: "center", }}>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid sx={{ textAlign: "left" }} item xs={12} md={6}>

               <Box>
                  <Typography variant="h3">
                     Your New Smile <br />
                     starts here
                  </Typography>
                  <Typography variant='h6' sx={{ fontSize: '14px', color: "grey", my: 3 }}>
                     Lorem ipsum dolor sit amet consectetur adipisicing <br />
                     elit. Numquam, magnam voluptate quibusdam voluptates <br />
                     tempora labore consectetur non similique corrupti dolorem?
                  </Typography>
                  <Button sx={{ background: "#10CFE6", color: "#fff" }}>Get appointment</Button>
               </Box>

            </Grid>

            <Grid item xs={12} md={6}>

               <img style={{ width: "100%" }} src={chair} alt="" />


            </Grid>

         </Grid>
      </Container>
   );
};

export default Banner;