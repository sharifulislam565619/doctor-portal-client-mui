import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Exception from '../Exception/Exception';
import Services from '../Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {

   return (
      <div>
         <Navigation />
         <Banner />
         <Services />
         <Exception />
         <AppointmentBanner />
         <Testimonial />
         <Doctors />
         <Contact></Contact>
      </div>
   );
};

export default Home; <h2>This is home page</h2>