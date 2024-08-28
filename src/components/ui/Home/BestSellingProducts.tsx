
import { Link } from "react-router-dom";
import ProductCard from "../CarsPage/CarCard";
import Container from "../../layout/Container";
import { useGetBestSellingProductsQuery } from "../../../redux/features/car/carApi";
import { TProduct } from "../Modal/CreateProductModal";

const cars = [
  {
    _id : '1',
    name : 'Nissan X3',
    description : 'An balder car',
    color : 'White',
    isElectric : false,
    status : 'available',
    features : ['AC', 'Bluetooth','Long Range Battery'],
    isDeleted : false,
    images : ['https://pngimg.com/uploads/mercedes/mercedes_PNG80220.png',
       'https://pngimg.com/uploads/mercedes/mercedes_PNG80220.png', 
       'https://pngimg.com/uploads/mercedes/mercedes_PNG80220.png'],
    pricePerHour : 300
  }
]


export default function BestSellingProducts() {
    // const { data} = useGetBestSellingProductsQuery(undefined);
    // const products : TProduct[] = data?.data || [];
   
  return (
    <Container>
     <section className="my-8 md:my-16 lg:my-24 " >
        <h1 className="text-[26px] md:text-3xl lg:text-[44px] text-zinc-300 text-center carter-one-regular" >Featured Cars</h1>
        <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-zinc-400 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature products.  promising an unforgettable dining experience.</p>
    
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-12">
            {cars?.map((cars) => <CarCard key={car._id} car={car} /> )}
        </div> 

       {cars?.length && 

        <div className="flex justify-center mt-20">
        <Link to={`/products`} > <button className="bg-gray-800 py-[8px] px-10 text-white rounded font-semibold text-sm md:text-base"> See All </button></Link>
        </div>}

    </section>   
    </Container>
    
  )
}
