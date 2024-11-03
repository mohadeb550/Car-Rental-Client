

import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useGetCarsQuery } from "../../../redux/features/car/carApi";
import { TCar } from "../../Dashboard/components/Modal/CreateCarModal";
import Container from "../../layout/Container";
import RelatedCarCard from "./RelatedCarCard";
import { FaSearch } from "react-icons/fa";


export default function RelatedCars() {

  const [ filterQuery, setFilterQuery ] = useState({ status : 'available'})
    const { data , isFetching } = useGetCarsQuery(filterQuery);
    const cars : TCar[] = data?.data || [];

     //  {
                // location : 'tangail'
                // carType : 'sedun'
                // costRange : '10-35'
                // sortByCost : -1
                // status : 'unavailable'
        //  }

  return (
    <section className="">
      <Container>

     <section className="my-2 md:my-6 lg:my-9 relative" >
    
      
        {isFetching && <ClipLoader
           color='#FBBF24'
           size={60}
           className="absolute top-0 md:top-2/4 left-2/4"
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> }

        <section>

          {/* all filtering section  */}
          <div className="grid grid-cols-1 md:grid-cols-3 my-6 gap-3 ">

        <div className="flex items-center bg-[#171A21] text-gray-300  p-3 rounded ">
          <FaSearch className=" mr-2" />
          <input
          onChange={(e) => setFilterQuery(prev => ({...prev, location: e.target.value}))}
            type="text"
            placeholder="location..."
            className="bg-transparent rounded-md focus:outline-none w-full placeholder:text-gray-300 text-sm md:text-base"
          />
        </div>
            
          <select 
          onChange={(e)=> setFilterQuery(prev => ({...prev, sortByCost: e.target.value}))}
           className="outline p-2 outline-black/20 rounded-md outline-1  bg-[#171A21] text-gray-300 text-sm">
              <option disabled selected> Sort by Cost</option>
               <option value='1'> Low to High</option>
               <option value='-1'> High to Low</option>
        </select>

        
        <select 
        onChange={(e) => setFilterQuery(prev => ({...prev, carType: e.target.value}))}
         className=" outline p-2 outline-black/20 rounded-md outline-1 text-sm bg-[#171A21] text-gray-300">
              <option disabled selected> Filter by Car Type</option>
              <option value='compact'>Compact</option>
              <option value='suv'>SUVs</option>
              <option value='luxury'>Luxury</option>
              <option value='pickup/truck'>Pickups / Trucks</option>
              <option value='electric'>Electric</option>
              <option value='convertibles'>Convertibles</option>
        
        </select>

          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-16 xl:mt-6">
            {cars?.slice(0, 4)?.map(car => <RelatedCarCard key={car._id} car={car} /> )}
        </div> 

        </section>
          
    </section>
</Container>
    </section>
 
  )
}
