import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TBooking } from "../../pages/Booking";
import { useAppSelector } from "../../redux/hooks";
import { ClipLoader } from "react-spinners";
import { useSavePaymentMutation } from "../../redux/features/payment/paymentApi";
import { toast } from "sonner";



export default function CheckoutForm({booking, setOpen } : { booking : TBooking}) {
  const { _id, totalCost, car  } = booking || {};
  const [ savePayment ] = useSavePaymentMutation();

    const currentUser = useAppSelector(state => state.auth.user);
    const [ loading , setLoading ] = useState(false);

    const [ clientSecret, setClientSecret ] = useState({});
    const stripe = useStripe()
    const elements = useElements();
    const navigate = useNavigate()


    useEffect(()=>{
       if(totalCost){
        fetch('http://localhost:3000/api/payments/create-payment-intent', {
          method : 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({ totalCost, currency : 'usd'})
        }).then(data => data.json())
        .then(res => setClientSecret(res.data))

       }
    },[totalCost])



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        // if(!stripe || !elements){
        //   setLoading(false)
        //     return;
        // }
        
        // // get input field value from CardElement , this is internal mechanism
        // const card = elements.getElement(CardElement);

        // if(card === null){
        //   setLoading(false)
        //     return;
        // }

        // const { paymentMethod, error } = await stripe.createPaymentMethod({ type: 'card', card })

        // if(error){
        //   setLoading(false)
        //     console.log(error)
        // }else{ console.log( 'payment method', paymentMethod)}

        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment( clientSecret, {

        //    payment_method : {
        //         card : card,
        //         billing_details: {
        //             name: currentUser?.name,
        //             email: currentUser?.email
        //         }
        //    }
        // })

        // if(confirmError){
        //     console.log(confirmError)
        //     setLoading(false)
        // }
        
        // if(paymentIntent?.status === 'succeeded'){

        //       // now save the payment in database 
        //       const payment = {
        //         email: currentUser?.email,
        //         cost: parseInt(totalCost),
        //         bookingId : _id,
        //         transactionId : paymentIntent.id,
        //         date : new Date(),
        //       }
  
        //      const res = await savePayment(payment);
        //      console.log(res)
        //     if(res.data?.success){
        //       toast.success('Payment Successful') 
        //       setLoading(false)
        //       setOpen(false)
        //     }
        //     else{
        //       toast.error('something wrong')
        //     }
        // }
    }

  return ( 
    <section>

        <form onSubmit={handleSubmit}>
        <h2 className="uppercase text-gray-400 md:text-[17px] font-semibold text-center my-6 "> Total : {totalCost?.toFixed(1)} Taka </h2>
            <CardElement options={{
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
        }}/>
            <button className=" bg-green-600 my-6 py-2 text-sm md:text-base font-semibold uppercase px-12 rounded-md text-white/80" disabled={!stripe || !elements}> {loading?  <ClipLoader
           color='#ffffff'
          //  loading={dataLoading || updateLoading}
           size={16}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> : 'Pay Now'}</button>

<button onClick={() => setOpen(!open)} className="px-8 ml-2 text-sm lg:text-base mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-red-600 hover:bg-red-700 "> Close </button>
        </form>
        
    </section>
  )
}
