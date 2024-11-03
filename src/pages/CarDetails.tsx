
import { Link, useParams } from "react-router-dom"
import { IoMdAdd }  from 'react-icons/io'
import { AiFillEye, AiOutlineMinus }  from 'react-icons/ai'
import { BsFacebook, BsLinkedin, BsTwitter }  from 'react-icons/bs'
import { GiSelfLove }  from 'react-icons/gi'

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

import '../styles/imageGallery.css'
import { ClipLoader } from "react-spinners"
import { TCar } from "../components/Dashboard/components/Modal/CreateCarModal"
import { useGetCarsQuery, useGetSingleCarQuery } from "../redux/features/car/carApi"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiBookmark } from "react-icons/bi";
import RelatedCars from "../components/ui/BookingPage/RelatedCars"
import CarCard from "../components/ui/CarsPage/CarCard"


// const renderItem = (item : { original : string, thumbnail : string}) => {
//     return (
//       <ReactImageMagnify
//         {...{
//             smallImage: {
//                 alt: 'Gallery Image',
//                 isFluidWidth: true,
//                 src: item.original,
//               },
//               largeImage: {
//                 src: item.original,
//                 width: 1200,
//                 height: 1800,
//               },
//         }}
//       />
//     );
//   };
  

export default function CarDetails() {
    const params = useParams();
    const { data, isLoading } = useGetSingleCarQuery(params.carId as string);
   const car : TCar = data?.data;

  //  more cars 
   const { data: carData , isFetching } = useGetCarsQuery({});
   const cars : TCar[] = carData?.data || [];

   if(isLoading ){return  <ClipLoader
    color='#000002'
    size={60}
    className="absolute top-28 left-2/4"
    aria-label="Loading Spinner"
    speedMultiplier={0.8} />}


   const {_id, name, images, pricePerHour, color, description, status, location, features, carType, isElectric, } = car;


//    add item to cart 
    //  const handleAddProductToCart = () => {
    //     const productData : TCartItem = {
    //         _id : _id!,
    //         product_name,
    //         price : price,
    //         image : images[0],
    //         quantity : 1,
    //         stock_quantity,
    //         date : new Date().toDateString(),

    //     }
    //     dispatch(addProductToCart(productData))
    //     toast.success('Product is added in the cart')
    //  }


  return (
    <section className="max-w-[1300px] mx-auto px-4 my-2 md:my-14 lg:my-20 mb-10"> 




<div className=" text-white p-2 rounded-lg">


    <section className="flex flex-col md:flex-row gap-8 lg:gap-12">

            {/* Car Images */}
            <div className="custom-image-gallery flex-1">
        
        <ImageGallery items={images.map(image => ({ original: image, thumbnail: image}))}

         showNav={false} showPlayButton={false} showFullscreenButton={false} />
         </div>

      {/* text part  */}
      <div className="flex-1">

{/* Car Name and Price */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold text-amber-500">{name}</h2>
        <p className="text-3xl font-semibold mt-4 md:mt-0">
          ${pricePerHour}/<span className="text-gray-400 text-xl">hour</span>
        </p>
      </div>

      {/* Car Location */}
      <div className="flex items-center mt-2 text-gray-400">
        <FaMapMarkerAlt className="mr-2" />
        <span>{location}</span>
      </div>

      {/* Car Type and Status */}
      <div className="flex items-center space-x-4 mt-4">
        <span className={`px-3 py-1 rounded-full text-sm ${isElectric ? 'bg-amber-600' : 'bg-gray-600'}`}>
          {car.isElectric ? "Electric" : "Fuel"}
        </span>
        <span className={`px-3 py-1 rounded-full text-sm ${car.status === 'available' ? 'bg-green-600' : 'bg-red-600'}`}>
          {car.status === "available" ? "Available" : "Unavailable"}
        </span>
        <span className="px-3 py-1 rounded-full text-sm bg-gray-700">{carType}</span>
      </div>

        {/* Car Description */}
      <p className="text-gray-300 my-6">{description}</p>

{/* Car Features */}
<h3 className="text-2xl font-semibold text-amber-500 mb-4">Features</h3>
<ul className="list-disc list-inside space-y-2 text-gray-400">
  {car.features.map((feature, index) => (
    <li key={index} className="flex items-center">
      <AiFillEye className="mr-2 text-amber-500" />
      {feature}
    </li>
  ))}
</ul>

{/* Rent Button */}
<Link to={`/booking/${_id}`}><button 
                
                className="bg-gray-600 mt-5 py-4 w-full justify-center text-white rounded font-semibold transition-all flex items-center gap-2 hover:bg-gray-700 text-sm md:text-base disabled:cursor-not-allowed disabled:bg-gray-200/20" disabled={status === 'unavailable'}> <BiBookmark className="text-xl"/> Book Now</button></Link>
      </div>
    </section>
    </div>

    <h1 className="text-zinc-400 text-center text-3xl lg:text-4xl carter-one-regular my-8 lg:my-14">Related Cars</h1>
<section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-16 xl:mt-20">
     {/* Grid section  */}
{cars?.slice(0,8)?.map(car => <CarCard key={car._id} car={car} /> )}
</section>
 
 
    </section>
  )
}
