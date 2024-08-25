import { useState } from "react";
import TeamCard from "./TeamCard";

const teams = [
    {
        userName : 'Imtiaz Sarkar Shimul',
        position : 'Senior Advisor',
        image : '/Screenshot (712).png',
        id:1
    },
    {
        userName : 'Khan Mohammad Iqra',
        position : 'Site Manager',
        image : '/52e58987bcc42c63c37abd7a5ab35575.jpg',
        id:2
    },
    {
        userName : 'Shamim Ahmed',
        position : 'Senior Designer',
        image : '/7152f0516abb4f83bc37d1b03e5dd237.jpg',
        id:3
    },
    {
        userName : 'Sogir Sikder',
        position : 'Senior Advisor',
        image : '/Screenshot (711).png',
        id:4
    },
    {
        userName : 'Tanim Pramanik',
        position : 'Site Manager',
        image : '/Screenshot (710).png',
        id:5
    },
    {
        userName : 'Maksudur Rahman',
        position : '3D Visual Designer',
        image : '/a7a12ce815dca51a03017beda3103ba1.jpg',
        id:6
    },
]

const TeamSection = () => {
    const [ teamData ] = useState(teams)

    return (
            <div className="my-28 xl:my-36">
 
 <h1 className="text-[26px] md:text-3xl lg:text-[40px] text-gray-700 text-center " >Our Team Members </h1>
 <p className="text-center text-sm md:text-lg max-w-[1040px] mx-auto text-gray-600 mt-0 md:mt-2 mb-10 md:mb-16 lg:mb-20 font-play" >Experience the extraordinary with our range of signature products.  promising an unforgettable dining experience.</p>

            {/* grid container  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-9">
                 {teamData?.map(person => <TeamCard key={person.id} name={person.userName} position={person.position} image={person.image} />)}
            </div>  
            </div>
       
    );
};

export default TeamSection;