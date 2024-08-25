
import { FaXTwitter } from "react-icons/fa6";
import { PiWarehouseDuotone } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import Container from "../components/layout/Container";
import { FaLocationDot } from "react-icons/fa6";
import TeamSection from "../components/ui/AboutUS/TeamSection/TeamSection";

const AboutUs = () => {
    return (
        <Container>
         <div className="flex flex-col lg:flex-row md:gap-8 lg:gap-10 relative lg:mt-5">

            {/* left side  */}
                <div className="w-full h-[500px] lg:w-[40%] bg-cover flex flex-col items-start mt-2">

                <div className="w-full h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116399.90657227112!2d89.79155163654143!3d24.259362611903022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfb44c7eeadc1%3A0x635d437a356cefa!2sTangail%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1720767292885!5m2!1sen!2sbd"  className="rounded w-full h-full" loading="lazy" ></iframe>
                </div>

                    <div className="p-4 space-y-3">
                    <h3 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <PiWarehouseDuotone size={26} />CAMPERS SHOP</h3>

                    <h5 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <TfiEmail size={22} />Email :  campers77@gmail.com</h5>

                    <h5 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <MdOutlinePhone size={22} /> +88 018654545</h5>

                    <h5 className="flex gap-5 items-center text-lg font-bakbak text-gray-500 font-semibold"> <FaLocationDot size={22} />Tangail, Bangladesh</h5>

                    <div className="flex gap-2 my-2">

                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaXTwitter size={15}/> </span>
                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaTelegramPlane size={15}/> </span>
                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaLinkedinIn size={15}/> </span>
                        <span className="bg-gray-300 p-3 rounded hover:bg-gray-800 transition-all hover:text-gray-200 cursor-pointer"> <FaFacebookF size={15}/> </span>
                    </div>
                    </div>
                </div>

            {/* right side  */}
                <div className="flex-1">
                <h3 className="flex gap-2 items-center text-2xl md:text-3xl font-bold uppercase text-gray-600"> get in touch</h3>
                <p className="text-gray-600 mt-1 mb-8">24/7 We will answer your questions and problems</p>

                <div className="">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="flex items-center border bg-white pl-2 col-span-2 md:col-span-1"> <span className="text-gray-600"><LuUser2 size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="flex items-center border bg-white pl-2 col-span-2 md:col-span-1"> <span className="text-gray-600"><LuUser2 size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="flex items-center border bg-white pl-2 col-span-2"> <span className="text-gray-600"><TfiEmail size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="flex items-center border bg-white pl-2 col-span-2"> <span className="text-gray-600"><MdOutlinePhone size={21}/></span> <input type="text" className="p-4 outline-none" placeholder="First Name" /></div>

            <div className="border bg-white pl-2 col-span-2"> <textarea  className="p-3 outline-none w-full resize-none" rows={5} placeholder="Describe your issue" /></div>

            
                
        </div>
       <div className="flex justify-center items-center">
       <button type="submit" className="rounded-lg p-3 outline-none bg-gray-700 border font-semibold text-gray-100 text-lg my-6 px-10 w-full"> Send </button>
       </div>
      
    </div>
                </div>
        </div> 

        {/* Passion and Values of the company  */}


        <div className="flex justify-center mt-24">
            <img src="/360_F_302219229_jJgc49qbWyz9As6BjuPgG9SZwTJLYWe8-Photoroom.png" />
        </div>
        
        <div className="flex flex-col gap-6">
            <h2 className="text-base md:text-3xl font-semibold font-play">What's our mission and values of the company?</h2>
            <p className="text-base lg:text-xl text-gray-500"> In React One-way data binding means that data flows in a single direction: from a parent component to its children. This flow ensures that changes in the parent can affect its children, but not the other way around. Children components receive data from parents (via props), but they can't directly change that data. If a child needs to change something, it communicates with the parent by using callback functions passed as props. This setup maintains a clear and predictable flow of data, making the application easier to manage and less prone to bugs caused by conflicting data changes.</p>
            <div className="flex items-center justify-between">
            <button type="submit" className= "rounded-md py-1 md:py-2 outline-none border font-play border-gray-500 text-gray-500 px-10 hover:bg-gray-300/20"> Read More </button>
            <time> November, 7 2023</time>
            </div>
        </div>


        <TeamSection/>
        </Container>
       
    );
};

export default AboutUs;