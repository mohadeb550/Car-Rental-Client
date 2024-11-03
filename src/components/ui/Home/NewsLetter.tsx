import Container from "../../layout/Container";

const NewsLetter = () => {

    return (
       <Container>
         <div className="flex h-[230px] lg:h-[250px] xl:h-[340px] mb-2 rounded-2xl lg:rounded-3xl relative px-2 md:px-7 xl:px-16 mt-36 bg-[#171A21]/80">

{/* text section  */}
<section className=" px-4 md:px-7 xl:px-3 flex flex-col gap-4 md:gap-3 lg:gap-6 xl:gap-10 items-start justify-center z-20">
    <h1 className={`max-w-[500px] text-3xl lg:text-4xl xl:text-5xl carter-one-regular text-zinc-400`}>Subscribe To Our NewsLetter</h1>
  

    <div className="bg-gray-200 p-2 pl-4 lg:pl-6 rounded-xl w-full flex items-center justify-between">
        <input type="text" className="bg-gray-200 outline-none border-none placeholder:text-gray-800 px-2 placeholder:text-sm placeholder:lg:text-gray-800" placeholder="Enter Your Email Address"/>
        <button className="bg-black px-5 py-3 rounded-xl text-sm text-white">Subscribe</button>
    </div>
</section>

    <img style={{borderBottomRightRadius: 0}} src="/bb439ff7797fbdce8914f1c49918679d1.png" className="w-[270px] md:w-[230px] lg:w-[260px] xl:w-[370px] rounded-b-3xl lg:rounded-b-[40px] scale-x-[-1]  absolute right-0 bottom-0 opacity-20 md:opacity-40" />

</div>
       </Container>
    );
};

export default NewsLetter;