import React, { useEffect } from "react";
import { Link } from "react-scroll";

import "./NavBar.css";
import logo from "../../images/footerLogo.png";
import whatsapp from "../../images/whatsapp 4.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const [phoneNumber, setPhoneNumber] = useState("0201021892204");
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.fontFamily = language === "ar" ? "El Messiri" : "Merienda";
    body.setAttribute("lang", language);
  }, [language]);
  const changeToArabic = () => {
    i18n.changeLanguage("ar");
    setLanguage("ar");
  };
  const changeToEnglish = () => {
    i18n.changeLanguage("en");
    setLanguage("en");
  };
  const isRTL = i18n.language === "ar";
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav
        className={`flex justify-around py-4 bg-navColor text-white
    backdrop-blur-md shadow-lg  sticky 
     top-0 left-0 right-0 z-20 h-20 `}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* <!-- Logo Container --> */}

        <div className="flex items-center">
          {/* <!-- Logo --> */}
          <Link
            className="cursor-pointer"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              className="h-16  object-cover sm:text-6xl md:text-4xl"
              src={logo}
              alt="Store Logo"
            />
          </Link>
        </div>
        {/* <!-- Links Section --> */}
        <div
          className={`items-center hidden gap-6 lg:flex `}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex text-white  hover:hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
          >
            {t("Home")}
          </Link>

          <Link
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300
            font-normal	 "
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("About us")}
          </Link>

          <Link
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("Services")}
          </Link>
          <Link
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
            to="alms"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t("Alms")}
          </Link>

          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
          >
            {t("Portfolio")}
          </Link>

          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex text-white hover:text-gray-500
            cursor-pointer transition-colors duration-300 font-normal	"
          >
            {t("FAQ")}
          </Link>
        </div>

        {/* <!-- Icon Menu Section --> */}
        <div className="flex items-center gap-4 lg:mr-4 mr-0 ">
          <a
            className="flex items-center mr-2"
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 mr-1 ml-1  object-cover xs:text-6xl md:text-4xl"
              src={whatsapp}
              alt="WhatsApp Icon"
            />
            <p className="font-normal lg:text-2xl text-sm">{t("number")}</p>
          </a>

          {/* <!-- Register --> */}
          <Link to="#"
            className="flex text-white  hover:text-gray-500
            cursor-pointer font-normal transition-colors duration-300"
            onClick={changeToEnglish}
          >
            {t("EN")}
          </Link>
          <div className="h-[30px]  bg-white w-[1px]"></div>
          {/* <!-- Login --> */}
          <Link to="#"
            onClick={changeToArabic}
            className="flex text-white  hover:text-gray-500
            cursor-pointer font-normal lg:mr-0 mr-2	lg:ml-0 ml-2 transition-colors duration-300"
          >
            {t("AR")}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
