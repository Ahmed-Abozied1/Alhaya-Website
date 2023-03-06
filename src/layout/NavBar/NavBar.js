import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";
import whatsapp from "../../images/whatsapp 4.png"
const NavBar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav
        className="flex justify-around py-4 bg-main text-white
    backdrop-blur-md shadow-lg w-full fixed 
     top-0 left-0 right-0 z-10 h-20 "
      >
        {/* <!-- Logo Container --> */}
        <div className="flex items-center">
          {/* <!-- Logo --> */}
          <Link className="cursor-pointer">
              <img
                className="h-20  object-cover sm:text-6xl md:text-4xl"
                src={logo}
                alt="Store Logo"
              />
            
          </Link>
        </div>

        {/* <!-- Links Section --> */}
        <div className="items-center hidden space-x-8 lg:flex">
          <Link
            className="flex text-white  hover:hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
          >
            Home
          </Link>

          <Link
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300
            font-normal	 "
          >
            About us
          </Link>

          <Link
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
          >
            Services
          </Link>

          <Link
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
          >
            Portfolio
          </Link>

          <Link
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
          >
            FAQ
          </Link>
        </div>

        {/* <!-- Icon Menu Section --> */}
        <div className="flex items-center space-x-5 ">
         <Link className="flex items-center mx-6 ">
         {/* <div>
            <RiWhatsappFill className="text-green-700 sm:text-6xl md:text-4xl mr-5" />
            
          </div> */}
          <img
                className="h-8 mr-2  object-cover sm:text-6xl md:text-4xl"
                src={whatsapp}
                alt="Store Logo"
              />
          <p className="font-normal	 ">+(02)01068801942</p>
         </Link>

          {/* <!-- Register --> */}
          <Link
            className="flex text-white  hover:text-gray-500
            cursor-pointer font-normal	 transition-colors duration-300"
          >
            EN
          </Link>
          <div class="h-[30px]  bg-white w-[1px]"></div>
          {/* <!-- Login --> */}
          <Link
            className="flex text-white  hover:text-gray-500
            cursor-pointer font-normal	 transition-colors duration-300"
          >
            AR
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
