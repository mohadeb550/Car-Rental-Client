import Banner from "../components/ui/Home/Banner/Banner";
import FeaturedCars from "../components/ui/Home/FeaturedCars";
import TestomonialSection from "../components/ui/Home/Testomonial/TestomonialSection";
import WhyChooseUs from "../components/ui/Home/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <>
         <Banner/> 
         <FeaturedCars/>
         <WhyChooseUs/>
         <TestomonialSection/>
        </>
    );
};

export default Home;