import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";




const Root = () => {
    return (
        <div className="bg-[#212433]">
            
        <Navbar/>
                <div className="bg-[#212433]">
                <Outlet/>
                </div>
        <Footer/>
        </div>
    );
};

export default Root;