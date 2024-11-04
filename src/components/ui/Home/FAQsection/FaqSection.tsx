
import Container from "../../../layout/Container";
import AccordionBox from "./AccordianBox";


const FaqSection = () => {

    return (
       <Container>
         <div className="mb-14 mt-24 md:mt-8 lg:mt-14"> 

         <h1 className="text-zinc-400 text-center text-3xl lg:text-5xl carter-one-regular mt-20 lg:mt-40 mb-8 lg:mb-14">Frequently Asked Questions</h1>

{/* flex container  */}
<div className=" flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5 lg:gap-7">

 <div className="flex-1 rounded-lg">
        <img src="/pngimg.com - mercedes_PNG80204.png" className="rounded-2xl md:rounded-full h-[200px] md:h-full w-full object-cover" />
    </div>

    <AccordionBox/>

   
</div>

</div>
       </Container>
    );
};

export default FaqSection;