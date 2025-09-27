"use client"
import React from 'react'
import CheckoutPage from "../../components/CheckoutPage"
import convertToSubcurrency from '@/lib/convertToSubcurrency'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("Missing Stripe publishable key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const page = () => {
    const amount = 49.99; // Example amount in dollars
  return (
    <main className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500' >
      <div className='mb-10'>
        <h1 className='text-4xl font-extrabold mb-2'>Sonny</h1>
        <h2 className='text-2xl'>has requested 
            <span className='font-bold'>${amount} </span>
        </h2>
      </div>

      <Elements stripe={stripePromise}
      options={{
        mode: 'payment',
        amount: convertToSubcurrency(amount),
        currency: 'usd',
      }}
      >
        <CheckoutPage amount={amount}/>
      </Elements>
    </main>
  )
}

export default page
