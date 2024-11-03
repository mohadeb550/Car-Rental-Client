
import { useContext } from "react";
import Container from "../../layout/Container";
import { ThemeContext } from "../../root/Root";


const AboutUs = () => {
    const isDark = useContext(ThemeContext)

    return (
        <Container>
            <div id="about-section"  className="mb-20 lg:mb-32 xl:mb-40  mt-4 md:mt-3 lg:mt-7 xl:mt-14 bg-[#171A21] py-20 px-9 rounded-2xl">

    <section className="h-[430px] md:h-[270px] lg:h-[300px] xl:h-[430px]  font-jakarta flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-16">

             {/* content section  */}
    <div className="w-full md:w-[40%] h-full flex flex-col justify-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 items-start">

            <h4 className={` md:text-lg lg:text-2xl xl:text-[23px] inter-medium ${isDark?'text-amber-500': 'text-black'}`}>About Us</h4>
                    <h4 style={{lineHeight: 1.3}} className={`text-[28px] lg:text-4xl xl:text-5xl carter-one-regular ${isDark?'text-zinc-400': 'text-black'}`}>We Are Who Will <br/>Grow <span className='text-primary-orange'>Your Business</span> </h4>
                    <p className={`text-xs lg:text-sm xl:text-lg mt-2  ${isDark? 'text-gray-400': 'text-gray-800'}`}>Our team is a collective of passionate individuals who thrive on pushing boundaries, constantly seeking growth and improvement with every new project we undertake. </p>

    <button className="bg-[#212433] hover:bg-gray-800 px-9 lg:px-12 text-sm md:text-base xl:text-lg mt-3 xl:mt-7 py-3 xl:py-4 font-semibold text-zinc-200 rounded-2xl transition ">Read More</button>

    
    </div>
    
    {/* image section   */}

    <div className="md:w-[60%] flex gap-2 md:gap-4 lg:gap-5 xl:gap-7 h-full">

        <div className="flex-1 relative  lg:-top-8 xl:-top-12">
        <div className="absolute z-30 inset-0 h-full w-full bg-gradient-to-t from-[#171A21] via-[#171A21]/10 rounded-t-xl md:rounded-t-2xl group"> </div>   

            <img src="/stock-photo-confident-businessman-with-his-colleagues.jpeg" className="w-full h-full object-cover rounded-xl md:rounded-2xl " /> </div>

        <div className="flex-1 relative lg:-bottom-5 xl:-bottom-8">    
        <div className="absolute z-30 inset-0 h-full w-full bg-gradient-to-t from-[#171A21] via-[#171A21]/50 rounded-t-xl md:rounded-t-2xl group"> </div>   

        <img src="/stock-photo-photographer-model-stylist-producer-looking-digital-camera-backstage.jpeg" className="w-full h-full object-cover rounded-xl md:rounded-2xl " /> 
        </div>

    </div>
</section>
</div>
        </Container>
    );
};

export default AboutUs;