/* eslint-disable @typescript-eslint/no-explicit-any */

import {useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../../redux/features/product/productApi";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

// type for car
export type TCar = {
    _id? : string,
    product_name : string,
    category : string,
    quantity? : number,
    stock_quantity : number,
    price : number,
    description : string,
    rating : number,
    images : string[];
    createdAt? : string,
    updatedAt? : string,
};

type TModalProps = {
  open : boolean,
  setOpen : React.Dispatch<React.SetStateAction<boolean>>
}


export default function CreateProductModal({ open, setOpen} : TModalProps) {

  const { register, handleSubmit } = useForm();
  const [createProduct, { isLoading }] = useCreateProductMutation();


  // console.log(res)

  const onSubmit = async (data: any ) => {
    
  const productData : TProduct = {
    product_name : data.productName,
    category : data.category.toLowerCase(),
    stock_quantity : parseInt(data.stockQuantity),
    price : parseInt(data.price),
    description : data.description,
    rating : parseFloat(data.rating),
    images : [ data.image1, data.image2, data.image3],
  }

  try {
    const response =  await createProduct(productData).unwrap();

  if(response?.success){
    // close the modal 
    setOpen(false)
    // show a toast 
    toast.success('New Product has been created')
  }
  }catch(error){
    toast.error('Something went wrong')
    console.log(error)
  }
 
  }


  return (
    <section className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-50  bg-black/30 backdrop-blur-sm flex justify-center items-center overflow-y-auto">  
       
       <form className="w-[400px] md:w-[600px] p-7 bg-white rounded-md relative" onSubmit={handleSubmit(onSubmit)}>

        {/* loading white layer  */}
      {isLoading && <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center"> 
        <ClipLoader
           color='#000002'
           loading={isLoading}
          //  cssOverride={override}
           size={60}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
      </div>}

        <div className="flex flex-col justify-start items-start mb-3">
        <label className="font-semibold">Product Name</label>
        <input type="text" className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm" {...register("productName")} />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
        <label className="font-semibold">Category</label>
         <select className="w-full outline p-2 mt-3 outline-black/20 rounded-sm outline-1 text-xs md:text-sm " {...register("category")} >
              <option disabled selected>Select Category</option>
              <option value='camp kitchen'>Camp Kitchen</option>
              <option value='gear'>Gear</option>
              <option value='power'>Power</option>
              <option value='personal care'>Personal Care</option>
              <option value='sleeping'>Sleeping</option>
              <option value='shelter'>Shelter</option>
              <option value='furry friends'>Furry Friends</option>
              <option value='merch'>Merch</option>
        </select>

        </div>
     
        <div className="flex flex-col justify-start items-start mb-3">
        <label className="font-semibold">Stock Quantity</label>
        <input type="number" className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm" {...register("stockQuantity")} />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
        <label className="font-semibold">Price</label>
        <input type="number" className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm" {...register("price")} />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
        <label className="font-semibold">Rating</label>
        <input type="text" className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm" {...register("rating")} />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
        <label className="font-semibold">Description</label>
        <input type="text" className="outline-none border-b-2 border-gray-700 focus:border-blue-600 w-full py-1 rounded-sm" {...register("description")} />
        </div>

        <div className="flex flex-col justify-start items-start mb-3">
        <label className="font-semibold mb-3">Images (URL)</label>
        <input type="text" className="outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm" {...register("image1")} placeholder="image 1"/>
        <input type="text" className="outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm" {...register("image2")} placeholder="image 2"/>
        <input type="text" className="outline-none border-b-2 border-gray-600 focus:border-blue-600 w-full py-1 rounded-sm" {...register("image3")} placeholder="image 3"/>

        {/* {maxImageError &&  <span className="text-red-500 font-semibold text-sm mt-1">{maxImageError}</span> } */}
        
        </div>
       


<button type="submit" className="px-8 text-sm lg:text-base mt-6 mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-black hover:bg-gray-800 "> Add</button>

<button onClick={() => setOpen(!open)} className="px-8 text-sm lg:text-base mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-red-600 hover:bg-red-700 "> Close </button>
</form>
       
       </section>
  )
}
