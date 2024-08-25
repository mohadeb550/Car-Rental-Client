import Container from "../../layout/Container";
import { SiWearos } from "react-icons/si";
import { FaGear } from "react-icons/fa6";
import { GiPowerLightning } from "react-icons/gi";
import { MdPersonalInjury } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { GiFalloutShelter } from "react-icons/gi";
import { SiFurrynetwork } from "react-icons/si";
import { AiOutlineShopping } from "react-icons/ai";

const TopCategories = () => {
    return (
        <Container>
        <section className="my-14 lg:my-3">
            <div className="flex justify-between gap-3 py-5 border-b-2 border-gray-200/60">
                <h3 className="text-xl font-bold text-gray-800">Top Categories</h3>
                <h4 className="font-bold text-gray-800 text-lg">See all resources -</h4>
            </div>
            {/* grid section  */}
            <section className="mt-7 grid justify-between gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiWearos/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Camp Kitchen</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-green-50/90 cursor-pointer">          
                    <div className="rounded-xl border border-green-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-green-600 bg-green-50"> <FaGear/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Gear</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>

                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-sky-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-sky-600 bg-sky-50"> <GiPowerLightning/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Power</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>

                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-gray-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-gray-600 bg-gray-50"> <MdPersonalInjury/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Personal Care</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                
                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-purple-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-purple-600 bg-purple-50"> <GiNightSleep/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Sleeping</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-orange-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-orange-600 bg-orange-50"> <GiFalloutShelter/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Shelter</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-red-50/70 cursor-pointer">          
                    <div className="rounded-xl border border-red-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-red-600 bg-red-50"> <SiFurrynetwork/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Furry Friends</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>
                <div className="rounded-xl flex items-center gap-4 transition-all hover:bg-gray-100 cursor-pointer">          
                    <div className="rounded-xl border border-teal-200 p-1 size-14 md:size-16 text-4xl flex justify-center items-center text-teal-600 bg-teal-50"> <AiOutlineShopping/></div>
                    <div>
                        <h3 className="text-xl md:text-[22px] font-semibold text-gray-800">Merch</h3> 
                        <h4 className="font-semibold text-gray-500 ">Immersive elements</h4>
                     </div>
                    
                </div>

            </section>
        </section>
         </Container>
    );
};

export default TopCategories;