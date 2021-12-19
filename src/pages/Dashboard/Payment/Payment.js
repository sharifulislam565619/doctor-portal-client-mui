import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvnHtJk7W4cFWOVYQs9UfJru8bMTh3Y5uEK5nXd9Npy5eGTjC4zfBwSgsGb5D5dHIvrsTZPP5M1YumigcGeBLOE00gt4kPA5C');
const Payment = () => {
   const { appointmentId } = useParams()
   const [appointment, setAppointment] = useState({})

   useEffect(() => {
      fetch(`https://aqueous-journey-67105.herokuapp.com/appointment/${appointmentId}`)
         .then(res => res.json())
         .then(data => setAppointment(data))
         .catch(() => {

         })
   }, [])
   return (
      <div>

         <h2>Please pay for {appointment?.userName}: {appointment?.serviceName}</h2>
         <h4>pay :${appointment?.price}</h4>
         {appointment?.price &&
            <Elements stripe={stripePromise}>
               <CheckoutForm
                  appointment={appointment}
               />
            </Elements>}
      </div>
   );
};

export default Payment;