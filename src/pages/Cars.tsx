
import { useState } from "react";
import SearchBanner from "../components/ui/CarsPage/SearchBanner";
import { ClipLoader } from "react-spinners";
import Container from "../components/layout/Container";
import { TCar } from "../components/Dashboard/components/Modal/CreateCarModal";
import { useGetCarsQuery } from "../redux/features/car/carApi";
import CarCard from "../components/ui/CarsPage/CarCard";
import { FaSearch, FaFilter, FaSort } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineFilter } from "react-icons/ai";


export default function Cars() {

  const [ filterQuery, setFilterQuery ] = useState({})
    const { data , isFetching } = useGetCarsQuery(filterQuery);
    const cars : TCar[] = data?.data || [];
    const [ isSideBarOpen ,setSidebarOpen ] = useState(false);

     //  {
                // location : 'tangail'
                // carType : 'sedun'
                // costRange : '10-35'
                // sortByCost : -1
                // status : 'unavailable'
        //  }

 
  return (
    <section className="pb-12">
      <Container>

     <section className="my-2 md:my-6 lg:my-8 " >
        {isFetching && <ClipLoader
           color='#FBBF24'
           size={60}
           className="absolute top-72 md:top-2/4 left-2/4"
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> }

        <section>

  <div onClick={()=> setSidebarOpen(!isSideBarOpen)} className="lg:hidden font-semibold text-gray-400 mb-6 bg-[#171A21] rounded-lg w-full p-3 md:p-4 flex items-center gap-2"><AiOutlineFilter size={20}/> Filters & Search</div>


          {/* grid  */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-7  mb-8 md:mb-16 xl:mt-20">

          {/* Sidebar  */}
          <div className={`transition-all duration-500 ${isSideBarOpen? "fixed top-20": "fixed -top-full opacity-0 pointer-events-none "} lg:opacity-100  row-span-12 bg-[#171A21] rounded-2xl lg:relative lg:inset-0 w-full`}>

          {/* Sidebar closing button  */}
          <IoCloseSharp onClick={()=> setSidebarOpen(!isSideBarOpen)} className="lg:hidden text-gray-300 absolute top-5 right-5 z-20 text-2xl"/>

            <aside className="sticky inset-0 top-24 text-gray-300 p-6 ">
      <h2 className="text-xl font-bold text-amber-500 mb-6">
        Filters & Search</h2>
      
      {/* Search */}
      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Search by Location</label>
        <div className="flex items-center bg-gray-800 p-3 rounded">
          <FaSearch className="text-gray-400 mr-2" />
          <input
          onChange={(e) => setFilterQuery(prev => ({...prev, location: e.target.value}))}
            type="text"
            placeholder="location..."
            className="bg-transparent focus:outline-none text-gray-300 w-full"
          />
        </div>
      </div>

      {/* Filter by Cost */}
      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Sort by cost</label>
        <select 
          onChange={(e)=> setFilterQuery(prev => ({...prev, sortByCost: e.target.value}))}
        className="w-full p-3 bg-gray-800 text-gray-300 rounded focus:outline-none">
        <option disabled selected> sort by cost</option>
               <option value='1'> Low to High</option>
               <option value='-1'> High to Low</option>
        </select>
      </div>

      {/* Filter by Car Type */}
      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Filter by Car Type</label>
        <select 
           onChange={(e) => setFilterQuery(prev => ({...prev, carType: e.target.value}))}
        className="w-full p-3 bg-gray-800 text-gray-300 rounded focus:outline-none">
        <option disabled selected> filter by car type</option>
              <option value='compact'>Compact</option>
              <option value='suv'>SUVs</option>
              <option value='luxury'>Luxury</option>
              <option value='pickup/truck'>Pickups / Trucks</option>
              <option value='electric'>Electric</option>
              <option value='convertibles'>Convertibles</option>
        </select>
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Filter by cost</label>
        <select
          onChange={(e)=> setFilterQuery(prev => ({...prev, costRange: e.target.value}))}

         className="w-full p-3 bg-gray-800 text-gray-300 rounded focus:outline-none">
        <option disabled selected>filter by cost</option>
               <option value='0-20'>0 - 20$</option>
               <option value='20-40'>20 - 40$</option>
               <option value='40-60'>40 - 60$</option>
               <option value='60-80'>60 - 80$</option>
               <option value='80-100'>80 - 100$</option>
               <option value='0-0'>Custom</option>
        </select>
      </div>

     
           </aside>
          </div>
          
          {/* Grid section  */}
{cars?.map(car => <CarCard key={car._id} car={car} /> )}
</div> 

          
          {/* no cars direction  */}
        { (!cars || !cars.length) && <p className="text-base md:text-lg mt-4 text-center">No Products Found</p>}

        </section>
          
    </section>
</Container>
    </section>
 
  )
}
