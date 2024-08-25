
import Container from "../../../layout/Container";
import SliderBox from "./SliderBox";


export type TReviews = {
  id : number;
  user_img : string;
  user_name : string;
  user_position : string;
  description : string;
  rating : number;
}


const reviews = [
    {
      id:1,
      user_img: '/896.jpg',
      user_name: 'Caroline Willy',
      user_position : 'Senior Architecture',
      description :'I particularly appreciated the personalized approach of their agents, who took the time to understand my specific needs and preferences and worked tirelessly to find properties that met those requirements.',
      rating : 4.7
    },
    {
      id:2,
      user_img: '/handsome-bearded-guy-posing-against-white-wall.jpg',
      user_name: 'Imtiaz Sarkar Shimul',
      user_position : 'Senior Architecture',
      description :'I particularly appreciated the personalized approach of their agents, who took the time to understand my specific needs and preferences and worked tirelessly to find properties that met those requirements.',
      rating : 4.3
    },
    {
      id:3,
      user_img: '/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.jpg',
      user_name: 'Sawyer James',
      user_position : 'Senior Architecture',
      description :'I particularly appreciated the personalized approach of their agents, who took the time to understand my specific needs and preferences and worked tirelessly to find properties that met those requirements.',
      rating : 3.7
    },
    {
      id:4,
      user_img: '/romantic-bearded-man-showing-heart-sign-express-love_176420-18653.jpg',
      user_name: 'Harly Carlos',
      user_position : 'Senior Architecture',
      description :'I particularly appreciated the personalized approach of their agents, who took the time to understand my specific needs and preferences and worked tirelessly to find properties that met those requirements.',
      rating : 3.7
    },
    
  ]


const TestomonialSection = () => {

    return (
       <Container>

            <section id="testimonial-section"  className=" mb-16 md:mb-24 lg:mb-32 xl:mb-40">

            <h4 className={`text-center text-lg md:text-lg lg:text-xl xl:text-2xl text-black mb-2 lg:mb-4`}>Testimonial</h4>
            <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-700 text-center " >What Our Customer Say</h1>

            {/*slick slider  */}
            <SliderBox reviews={reviews} />

            </section>
       </Container>
    );
};

export default TestomonialSection;