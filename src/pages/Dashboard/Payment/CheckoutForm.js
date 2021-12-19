import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
   const { price, userName, _id } = appointment
   const { user } = useAuth()
   const stripe = useStripe();
   const elements = useElements();
   const [error, setError] = useState('')
   const [success, setSuccess] = useState('')
   const [clientSecret, setClientSecret] = useState("");
   const [processing, setProcessing] = useState(false)
   // console.log(clientSecret);

   useEffect(() => {
      fetch("https://aqueous-journey-67105.herokuapp.com/stripe.paymentIntents.create", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ price }),
      })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
   }, [price]);

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
         return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }
      setProcessing(true)
      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         setError(error.message);
      } else {
         setError("")
         console.log('[PaymentMethod]', paymentMethod);

      }

      const { paymentIntent, error: intendError } = await stripe.confirmCardPayment(
         clientSecret,
         {
            payment_method: {
               card: card,
               billing_details: {
                  name: userName,
                  email: user.email
               },
            },
         },

      );
      if (intendError) {
         setError(intendError.message)
         setSuccess("")
      } else {
         setError('')
         setSuccess("your payment proceed successfully")
         setProcessing(false)
         console.log(paymentIntent);


         const payment = {
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            transactionId: paymentIntent.client_secret.slice('_secret')[0],
            last4: paymentMethod.last4
         }
         const url = `https://aqueous-journey-67105.herokuapp.com/appointment/${_id}`
         fetch(url, {
            method: 'PUT',
            headers: {
               'content-type': "application/json"
            },
            body: JSON.stringify(payment)
         })

      }
   }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />
            {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
               Pay ${price}
            </button>}

         </form>
         <p style={{ color: "red" }}>{error}</p>
         <p style={{ color: 'green' }}>{success}</p>
      </div>
   );
};

export default CheckoutForm;