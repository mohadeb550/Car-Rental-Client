import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";




const Root = () => {
    return (
        <div className="bg-[#000209]">
            
        <Navbar/>
                <div className="bg-[#212433]">
                <Outlet/>
                </div>
        <Footer/>
        </div>
    );
};

export default Root;