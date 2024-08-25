
import Container from "../../../layout/Container";
import AccordianBox from "./AccordianBox";

const FaqSection = () => {

    return (
       <Container>
         <div id="faq-section" className="mb-20 md:mb-16 lg:mb-24 xl:mb-32"> 

         <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-700 text-center " >Frequently Asked Questions</h1>
         <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-600 mt-2 md:mt-5 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature products.  promising an unforgettable dining experience.</p>

{/* flex container  */}
<div className="md:h-[350px] lg:h-[400px] xl:h-[540px] flex flex-col md:flex-row-reverse items-center justify-between gap-2 md:gap-5 lg:gap-7">

    <div className="w-full md:w-[55%] xl:w-[40%] h-full">
        <img src="/depositphotos_77762298-stock-illustration-illustration-of-isolated-camp-fire.jpg" className="opacity-90 rounded-xl h-full w-full object-cover object-center" />
    </div>
    <AccordianBox/>
</div>

</div>
       </Container>
    );
};

export default FaqSection;