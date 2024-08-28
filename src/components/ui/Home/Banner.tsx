import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import { GoArrowUpRight } from "react-icons/go";
import { MdPlayCircle } from "react-icons/md";
import CountUp from 'react-countup';


export default function Banner() {

  
    return (
      <section className="gradient-background">
      <Container>
          <div  className="hero h-[630px] md:h-[420px] lg:h-[550px] xl:h-[600px] pt-7 lg:pt-10 xl:pt-12 mb-3 md:mb-8 font-play flex flex-col-reverse  md:flex-row justify-around items-start md:pb-12 gap-3 md:gap-0" >

<div className=" text-left text-neutral-content flex-1">
  <div className="max-w-4xl space-y-4 md:space-y-6 xl:space-y-10">

  <p className="text-sm md:text-base lg:text-lg lg:font-medium text-zinc-300">------- Discover our wide range of campers </p>
    <h1 className="hidden md:block text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-300 carter-one-regular">Rent Car In <br/>Worldwide</h1>

    <h1 className="md:hidden text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-300  carter-one-regular">Rent Car In Worldwide</h1>
    <p className="text-sm md:text-base lg:text-lg lg:font-medium text-zinc-400"> Discover our wide range of campers and RVs perfect for your next adventure. Start your journey today!</p>

<div className="flex items-center gap-3">
<Link to={'/products'}>
<button className="px-6 lg:px-8 text-sm lg:text-base  py-2 md:py-2 xl:py-3 font-semibold text-white rounded-xl transition bg-amber-500 hover:bg-zinc-800 flex items-center gap-2">Book Now  <span className="text-xl"><GoArrowUpRight/></span></button></Link>

<Link to={'/products'}>
<button className="px-6 lg:px-8 text-sm lg:text-base  py-2 md:py-2 xl:py-3 font-semibold text-gray-300 border border-zinc-700 rounded-xl transition hover:bg-[#8FA692]/20 flex items-center gap-2">Watch Video <span className="text-xl"><MdPlayCircle/></span></button></Link>
</div>
   

  </div>
</div>

<div className="flex-1 h-full w-full pt-7 md:pt-2 xl:pt-4">

<div className="flex items-center justify-center gap-6 lg:gap-16 xl:gap-20 ">

{/* badge  */}

<div className="space-y-1 md:space-y-2 xl:space-y-4">
<h1 className={`text-xl md:text-[22px] lg:text-3xl xl:text-[52px] pb-1 lg:pb-2 xl:pb-4 border-b-2 md:border-b-4 border-zinc-600 font-semibold text-zinc-400 `}> <CountUp end={10} duration={6} /> <span className="">+</span> </h1>
<p className={`text-sm  text-zinc-500 `}>Years Experience</p>
</div>

<div className="space-y-1 md:space-y-2 xl:space-y-4">
<h1 className={`text-xl md:text-[22px] lg:text-3xl xl:text-[52px] pb-1 lg:pb-2 xl:pb-4 border-b-2 md:border-b-4 border-zinc-600 font-semibold text-zinc-400`}> <CountUp end={75} duration={6} /><span className="">+</span> </h1>
<p className={`text-sm text-zinc-500`}>Happy
Clients</p>

</div>
<div className="space-y-1 md:space-y-2 xl:space-y-4">
<h1 className={`text-xl md:text-[22px] lg:text-3xl xl:text-[52px] pb-1 lg:pb-2 xl:pb-4 border-b-2 md:border-b-4 border-zinc-600 font-semibold text-zinc-400 `}> <CountUp end={45} duration={6} /><span className="">+</span> </h1>
<p className={`text-sm  text-zinc-500 `}>Award
Winning</p>
</div>
</div>

<img src="/pngegg (17).png" className="md:h-[280px] lg:h-[360px] w-full object-contain" />
</div>



</div>
      </Container>
       </section>
    )
  }
  