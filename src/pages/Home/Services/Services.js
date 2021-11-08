import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';


const Services = () => {
   const services = [
      {
         name: "cavity",
         img: cavity,
         desc: 'A cavity is a hole in a tooth that develops from tooth decay. Cavities form when acids in the mouth wear down, or erode, a tooths hard outer layer (enamel). Anyone can get a cavity. Proper brushing, flossing and dental cleanings can prevent cavities (sometimes called dental caries).'
      },
      {
         name: "fluoride",
         img: fluoride,
         desc: 'Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻ , whose salts are typically white or colorless. Fluoride salts typically have distinctive bitter tastes, and are odorless.'
      },
      {
         name: "whitening",
         img: whitening,
         desc: 'Whitening your teeth too often increases the risk of negative side effects, such as tooth sensitivity and damage to tooth enamel and gums. But theres no official guideline for how often whitening can be done safely. Thats why its important to get your dentists recommendation and always follow product instructions.'
      },
   ]
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Container>
            <Typography gutterBottom variant="h5" sx={{ color: 'success.main', m: 2 }} component="div">
               Our Services
            </Typography>
            <Typography gutterBottom sx={{ fontWeight: 600 }} variant="h4" component="div">
               Services we provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                  services.map(service => <Service
                     key={service.name}
                     service={service}
                  ></Service>)
               }

            </Grid>
         </Container>
      </Box>
   );
};

export default Services;