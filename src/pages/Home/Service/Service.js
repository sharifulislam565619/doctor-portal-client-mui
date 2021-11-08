import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = (props) => {
   const { name, img, desc } = props.service
   return (
      <Grid item xs={4} sm={4} md={4} >
         <CardMedia
            component="img"
            style={{ width: "auto", height: "80px", margin: "0 auto" }}
            image={img}
            alt="green iguana"
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {desc.split(' ').slice(0, 20).toString().replace(/,/g, ' ')}
            </Typography>
         </CardContent>

      </Grid>
   );
};

export default Service;


