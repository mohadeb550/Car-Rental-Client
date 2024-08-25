import { Link } from "react-router-dom";
import { useGetFeaturedProductsQuery } from "../../../redux/features/product/productApi";
import Container from "../../layout/Container";
import { TProduct } from "../Modal/CreateProductModal";


function FeaturedProducts() {
   const { data } = useGetFeaturedProductsQuery(undefined);
   const products : TProduct[] = data?.data || [];

  return (
   <Container>
     <div className={`my-20 md:my-28 lg:my-36 xl:my-44 py-5 `}>
     <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-700 text-center " >Featured Products</h1>
     <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-600 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature products.  promising an unforgettable dining experience.</p>



     <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>

       {products?.map((product: TProduct) => {
        return (
          <>
          <Link to={`/products/${product._id}`}>
            <div className={`flex flex-col justify-center items-center gap-3 mx-2 border-r relative cursor-pointer rounded-md transition-shadow hover:shadow-lg`}>

           <p className="text-white py-[6px] mb-2 text-sm md:text-base font-semibold px-6 rounded-sm bg-[#FF8C46] absolute top-5 right-0">Hot</p>
            
       <div className="flex flex-col">
        
<div className=" flex items-center justify-center ">

     <img className="p-4 w-36 h-36 md:w-48 md:h-48 object-contain" src={product.images[0]}/>
 </div>

 <div className="flex justify-center items-center flex-col gap-2 p-4">
     <p className="text-sm font-semibold text-gray-400"> {product.category} </p>
     <h2 className="text-sm md:text-xl font-semibold"> {product.product_name} </h2>
     <h3 className="text-[20px] text-orange-500 font-bold flex items-center gap-2"> {`$${product.price}`}.00</h3>
    
 </div>
</div>
        </div>
          </Link>
           
          </>
        )
       })}
        </section>        
    
    </div>
   </Container>
  );
}

export default FeaturedProducts;


