import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import people1 from '../../../../images/people-1.png';
import people2 from '../../../../images/people-2.png';
import people3 from '../../../../images/people-3.png';


const Testimonial = () => {

   const says = [
      {
         name: "Winson Hearry",
         country: "California",
         img: people1,
         comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more or less normal distribu to using content here content is "


      },
      {
         name: "Banjamin Hearry",
         country: "london",
         img: people2,
         comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more or less normal distribu to using content here content is "


      },
      {
         name: "lary Hearry",
         country: "singapur",
         img: people3,
         comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more or less normal distribu to using content here content is "


      },
   ]
   return (

      <>
         <Grid item sx={{ mx: "4%", textAlign: "left", marginTop: "90px" }} >
            <Typography sx={{ color: "#11D0E3" }} variant="h6" gutterBottom component="div">
               Testimonial
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
               Whats our patient <br />
               says
            </Typography>


         </Grid >
         <Container>
            <Box sx={{ flexGrow: 1, my: 5 }}>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {says.map((say) => (
                     <Grid item xs={2} sm={4} md={4} key={say.name}>
                        <Paper sx={{ py: 2, px: 2 }}>
                           <Typography sx={{ my: 3, textAlign: "justify", color: "gray" }} variant='h6'>
                              {say.comment}
                           </Typography>
                           <Box sx={{ display: "flex", py: 3 }}>
                              <Box>
                                 <img style={{ width: '80%' }} src={say.img} alt="" />
                              </Box>
                              <Box sx={{ textAlign: "left", ml: 2 }}>
                                 <Typography sx={{ color: "#11D0E3" }} variant="h6" gutterBottom component="div">
                                    {say.name}

                                 </Typography>
                                 <Typography sx={{ fontSize: 14 }} variant='h6'>
                                    {say.country}
                                 </Typography>
                              </Box>

                           </Box>
                        </Paper>
                     </Grid>
                  ))}
               </Grid>
            </Box>
         </Container>

      </>
   );
};

export default Testimonial;