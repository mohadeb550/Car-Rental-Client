

const NewsLetter = () => {
    return (
        <div className="bg-red-400 flex justify-center items-center h-[250px] lg:h-[360px] xl:h-[360px] mb-6 md:mb-12 lg:mb-20">

            <section className="mx-auto px-4 md:px-7 xl:px-3 flex flex-col gap-4 md:gap-3 lg:gap-6 xl:gap-10 items-center justify-center">
                <h1 className={`text-xl md:text-xl lg:text-3xl xl:text-[40px] text-white font-semibold `}>Do you have any question?</h1>
                <p className={`text-sm md:text-base lg:text-lg text-center font-light text-white`}>Stay connected and receive daily updates about us by subscribing to our newsletter <br/>
                and simply provide your email address below.</p>

                <div className="bg-white p-1 md:p-2 lg:p-3 rounded-md w-full flex items-center justify-between">
                    <input type="text" className="outline-none border-none placeholder:text-primary-gray px-2" placeholder="Enter Email Address"/>
                    <button className="bg-black px-5 py-3 rounded-md text-sm text-white">Subscribe Now</button>
                </div>
            </section>
            
        </div>
    );
};

export default NewsLetter;