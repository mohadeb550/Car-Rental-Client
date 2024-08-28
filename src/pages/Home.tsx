import Banner from "../components/ui/Home/Banner";
import BestSellingProducts from "../components/ui/Home/BestSellingProducts";
import FaqSection from "../components/ui/Home/FAQsection/FaqSection";
import FeaturedCars from "../components/ui/Home/FeaturedCars";
import NewsLetter from "../components/ui/Home/NewsLetter";
import TestomonialSection from "../components/ui/Home/Testomonial/TestomonialSection";
import TopCategories from "../components/ui/Home/TopCategories";
import WhyChooseUs from "../components/ui/Home/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <>
         <Banner/> 
         <FeaturedCars/>
         <WhyChooseUs/>
         <TestomonialSection/>
         {/* <TopCategories/>
        
         <FaqSection/>
        
         <NewsLetter/> */}
        </>
    );
};

export default Home;