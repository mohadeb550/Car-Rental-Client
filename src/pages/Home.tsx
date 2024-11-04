import AboutUs from "../components/ui/Home/AboutUs";
import Banner from "../components/ui/Home/Banner/Banner";
import FaqSection from "../components/ui/Home/FAQsection/FaqSection";
import FeaturedCars from "../components/ui/Home/FeaturedCars";
import NewsLetter from "../components/ui/Home/NewsLetter";
import TestomonialSection from "../components/ui/Home/Testomonial/TestomonialSection";
import WhyChooseUs from "../components/ui/Home/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <>
         <Banner/> 
         <FeaturedCars/>
         <WhyChooseUs/>
         <AboutUs/>
         <TestomonialSection/>
         <FaqSection/>
         <NewsLetter/>
        </>
    );
};

export default Home;