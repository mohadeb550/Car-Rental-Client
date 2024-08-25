
const TeamCard = ({ name, position, image}: 
    { name: string; position : string; image: string}) => {

    return (
        <div>
              <div className="border-b-2 border-gray-300 pt-9 md:pt-5 lg:pt-10 xl:pt-16 border-r-2 mr-9"></div>

            <div className="h-[280px] md:h-[160px] lg:h-[250px] xl:h-[370px]  border-2 border-gray-300 border-t-0 border-b-0 mx-9">
                <img src={image} className=" w-full h-full object-cover px-7 py-6 md:px-4 md:py-3 lg:px-6  lg:py-7 xl:px-12 xl:py-10" />
             </div>

            <div className="border-l-2 border-gray-300 px-6 md:px-4 lg:px-7 xl:px-12 py-2 xl:py-5 pb-1 ml-9  border-t-2">

            <h2 className={`text-xl md:text-sm lg:text-lg xl:text-[22px]  lg:mb-1 xl:mb-2 text-black `}> {name} </h2>
             <h4 className={`text-xs lg:text-sm xl:text-base text-red-500`}> {position} </h4>
            </div>
  
        </div>
    );
};

export default TeamCard;