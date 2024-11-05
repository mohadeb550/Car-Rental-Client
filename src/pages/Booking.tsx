/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from 'react-hook-form';
import Container from '../components/layout/Container';
import {useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useGetSingleCarQuery } from '../redux/features/car/carApi';
import { TCar } from '../components/Dashboard/components/Modal/CreateCarModal';
import { useAppSelector } from '../redux/hooks';
import { useState } from 'react';
import { useGetSingleUserQuery } from '../redux/features/user/userApi';
import ConfirmBookingModal from '../components/ui/Modal/ConfirmBookingModal';
import RelatedCars from '../components/ui/BookingPage/RelatedCars';
import { TUser } from '../redux/features/authentication/authSlice';
import { BsCalendar2Event } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { AiFillEye } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

export type TBooking = {
    _id? : string;
    date : string;
    user : TUser;
    car : TCar;
    phone: string;
    location: string;
    paymentMethod : string;
    startTime : string;
    status? : string;
    isReturnProcess? : boolean;
    endTime? : string;
    totalCost? : number;
    createdAt? : string,
    updatedAt? : string,
    isPaid? : boolean,
}


const Booking = () => {
    const { register, handleSubmit } = useForm();
    const params = useParams();
    const { data, isLoading } = useGetSingleCarQuery(params.carId as string);
    const user = useAppSelector(state => state.auth.user);
    const { data: singleUserData } = useGetSingleUserQuery(user?.email as string );
    const car : TCar = data?.data;

    // modal 
    const [openConfirmModal, setOpenConfirmModal ] = useState<boolean>(false);

    // booking data 
    const [booking, setBooking ] = useState({});


    const onSubmit = async (data : any) => {
  
        const bookingData : TBooking = {
          user : singleUserData?.data,
          car,
          date : data.date,
          startTime: data.startTime,
          phone : data.phone, 
          location: data.location,
          paymentMethod : data.paymentMethod,
        }
        setBooking(bookingData);
        setOpenConfirmModal(true);

    }


    return (
        <Container>
              <RelatedCars/>

        <div className="py-8 px-2 2xl:mx-auto">

            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800"> <span className="text-amber-400 inter-medium">Book A Reservation </span></h1>
                <p className="text-base font-medium leading-6 text-gray-300"> {new Date().toLocaleString()} </p>
            </div>

               {/* open confirm booking modal  */}
   {openConfirmModal && <ConfirmBookingModal open={openConfirmModal} setOpen={setOpenConfirmModal} booking={booking as TBooking}/>}


            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">

                         {/* collect user info  */}
            <form className="flex flex-col lg:flex-row justify-between items-center w-full gap-2 lg:gap-5 xl:gap-8  rounded-md " onSubmit={handleSubmit(onSubmit)}>

<section className='flex-1 w-full bg-[#171A21] border border-zinc-700 rounded-xl p-7'> 
    <div className="flex flex-col justify-start items-start mb-3">
<label className="font-semibold text-zinc-300">User Name</label>
<input type="text" className="bg-transparent text-amber-400 outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm" {...register("userName")} defaultValue={user?.name} readOnly />
</div>

<div className="flex flex-col justify-start items-start mb-3">
<label className="font-semibold text-zinc-300">Email</label>
<input type="text" className="bg-transparent text-amber-400 outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm" {...register("email")} defaultValue={user?.email} readOnly />
</div>

<div className="flex flex-col justify-start items-start mb-3">
<label className="font-semibold text-zinc-300">Phone</label>
<input type="text" className="bg-transparent text-amber-400 outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm" {...register("phone")} required />
</div>

<div className="flex flex-col justify-start items-start mb-3">
<label className="font-semibold text-zinc-300">Location</label>
<input type="text" className="bg-transparent text-amber-400 outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm" {...register("location")} required />
</div>

<div className="flex  justify-start items-center gap-3 mb-3">
<label className="font-semibold text-zinc-300">Date</label>
<div className='relative w-full flex items-center'>
<input type="date" className="bg-transparent text-gray-300 outline-none border-b-2 border-gray-600  w-full py-1 rounded-sm" {...register("date")} required />
<BsCalendar2Event className='text-gray-300 pointer-events-none absolute right-2'/>
</div>
</div>

<div className="flex  justify-start items-center gap-3 mb-3">
<label className="font-semibold text-zinc-300">Start Time</label>

<div className='relative w-full flex items-center'>
<input type="time" className="bg-transparent text-gray-300  outline-none border-b-2 border-gray-600  w-full py-1 rounded-sm" {...register("startTime")} required />
<IoTimeOutline className='text-gray-300 pointer-events-none absolute text-xl right-2'/>
</div>
</div>

<div className="flex flex-col justify-start items-start mb-3">
<label className="font-semibold text-zinc-300">NID / Driving License/ Passport</label>
<input type="file" className="bg-transparent text-amber-400 outline-none border-b-2 border-gray-600 w-full py-1 rounded-sm" {...register("identity")} required />
</div>

<div className="flex flex-col justify-start items-start mb-3">
<label className="font-semibold text-zinc-300">Payment Method</label>
<select className=" max-w-xs bg-transparent text-gray-300 outline p-2 mt-1 outline-gray-700 rounded-sm outline-1 text-xs md:text-sm " {...register("paymentMethod")} >
              <option value='stripe'>Stripe Payment</option>
              <option value='amr-pay'>Amar Pay</option>
        </select>
</div>

<div className='flex justify-end'>
    
<button type='submit' className="bg-gray-700 py-3 px-10 text-white rounded font-semibold transition-all flex items-center gap-2 hover:bg-gray-600 text-sm md:text-base disabled:cursor-not-allowed" >Checkout</button>
</div>

</section>


<div className="flex-1 w-full h-full flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 space-y-6  border border-zinc-500 rounded-xl relative">

       {/* loading white layer  */}
       {isLoading && <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0  rounded-md flex justify-center items-center"> 
        <ClipLoader
           color='#FBBF24'
           loading={isLoading}
          //  cssOverride={override}
           size={60}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
      </div>}
                          {/* box content  */}
                        {Object.keys(car || {}).length &&   <section className=" mx-auto "> 

       <div className="">
        <section className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 '>
            
       <div >
        
        <img src={car.images[0]} className='w-56 md:w-60 lg:w-40 xl:w-60'/>
        </div>

        {/* text part  */}
      <div className="flex-1 lg:ml-3">

{/* Car Name and Price */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-amber-500">{car?.name}</h2>
      </div>

      {/* Car Location */}
      <div className="flex items-center mt-2 gap-3 text-gray-400">
      <p className="text-2xl font-semibold mt-4 md:mt-0 text-gray-200">
          ${car?.pricePerHour}/<span className="text-gray-400 text-xl">hour</span>
        </p>
       
        <span className='flex items-center gap-2'> <FaMapMarkerAlt className="ml-2 " />{car?.location}</span>

      </div>

      {/* Car Type and Status */}
      <div className="flex items-center space-x-4 mt-4">
        <span className={`px-3 py-1 rounded-full text-sm ${car?.isElectric ? 'bg-amber-600' : 'bg-gray-400'}`}>
          {car.isElectric ? "Electric" : "Fuel"}
        </span>
        <span className={`px-3 py-1 rounded-full text-sm ${car.status === 'available' ? 'bg-green-600' : 'bg-red-600'}`}>
          {car.status === "available" ? "Available" : "Unavailable"}
        </span>
        <span className="px-3 py-1 rounded-full text-sm bg-gray-400">{car?.carType}</span>
      </div>
      </div>

        </section>
        <h6 className='text-zinc-300 mt-4'>{car.description}</h6>
       </div>

    </section>}
                        </div>

</form>

                    </div>
                </div>
               
            </div>
        </div>


        </Container>
    );
};

export default Booking;
