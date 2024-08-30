import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import { createContext, useState } from "react";


export const ThemeContext = createContext(true)

const Root = () => {
    const [ isDark , setDark ] = useState(true);

    return (
        <ThemeContext.Provider value={isDark}> 
            <div className={`${isDark? 'bg-[#212433]' : 'bg-white'}`}>
            
            <Navbar isDark={isDark} setDark={setDark} />
                    <div className={`${isDark? 'bg-[#212433]' : 'bg-white'}`}>
                    <Outlet/>
                    </div>
            <Footer/>
            </div>
        </ThemeContext.Provider>
    );
};

export default Root;