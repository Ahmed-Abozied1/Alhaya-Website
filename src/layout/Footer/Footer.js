import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import logo from "../../images/footerLogo.png";
import whatsapp from "../../images/footerwhatsapp.png";
import phone from "../../images/phone.png";
import place from "../../images/place.png";
import facebook from "../../images/facebook.png";
import whatsapp1 from "../../images/whatsapp 4.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";

import "./Footer.css";
import { BsSnapchat } from "react-icons/bs";

import { useState } from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("0201021892204");
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const Links = [
    {
      title: "QUICK LINK",
      title_ar: "الروابط السريعة",
      links: [
        {
          name: "Home",
          name_ar: "الصفحة الرئيسية",
          link: "#",
        },
        {
          name: "About Us",
          name_ar: "معلومات عننــا",
          link: "#",
        },
        {
          name: "Services",
          name_ar: "خدماتنــا",
          link: "#",
        },
        {
          name: "Portfolio",
          name_ar: "اعمالنــا",
          link: "#",
        },
      ],
    },
    {
      title: "CONTACT",
      title_ar: "التواصـل",
      links: [
        {
          name: "+201021892204",
          name_ar: "201021892204+",
          link: "#",
          icon: whatsapp,
        },
        {
          name: "+201068801942",
          name_ar: "201068801942+",
          link: "#",
          icon: phone,
        },
        {
          name: "Tanzania",
          name_ar: "تنزانيا",
          link: "#",
          icon: place,
        },
      ],
    },
  ];
  return (
    <div className="bg-navColor py-4 bprder=t-2 foot">
      <ScrollToTop
        smooth
        top="1000"
        color="#959F87"
        width="20"
        className="scroll-to-top lg:mr-0 mr-3 "
      />
      <div className="container mx-auto px-2  " dir={isRTL ? "rtl" : "ltr"}>
        <div
          className="grid centerFoot grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between
          "
        >
          <div className="pb-3.5  sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="#">
              <img
                src={logo}
                alt="logo"
                className=" object-contain h-40 flex items-center hover:underline"
              />
            </Link>
          </div>
          {/* Quick Links */}
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-2 centerFoot md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0 "
            >
              <h3 className="text-footerText lg:ml-0 ml-3 text-2xl font-bold lg:leading-7  mb-4 sm:mb-5 lg:mb-6  ">
                {i18n.language === "en" ? link.title : link.title_ar}
              </h3>
              {/* contact */}
              <ul className="text-footerText centerFoot text-xl  lg:ml-0 ml-3 flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index}>
                    <Link
                      to={text.link}
                      className="text-footerText   hover:text-submain  hover:underline"
                    >
                      <div className="flex " dir={isRTL ? "rtl" : "ltr"}>
                        <img alt="" src={text.icon} />

                        <p className="pl-1 pr-1 contactText">
                          {i18n.language === "en" ? text.name : text.name_ar}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* social */}
          <div className="col-span-1 social centerFoot  md:col-span-2 lg:col-span-3 pb-3 sm:pb-0">
            <h3 className="text-footerText text-2xl font-bold lg:leading-7  mb-4 sm:mb-5 lg:mb-6  ">
              {i18n.language === "en" ? "  Social Media Links" : "سوشيال ميديا"}
            </h3>
            <ul className="text-footerText centerFoot text-xl ">
              <li className="flex items-baseline " dir={isRTL ? "rtl" : "ltr"}>
                <Link
                  className="mr-0"
                  to="https://www.youtube.com/channel/UC-l1VRCKMYsw5ZIUQ2Hdd5g"
                  target="_blank"
                >
                  <span>
                    <img alt="" src={youtube} className="lg:h-10 h-10" />
                  </span>
                </Link>
                <Link
                  className="mr-4 ml-4"
                  to="https://web.facebook.com/profile.php?id=100089920217767"
                  target="_blank"
                >
                  <span>
                    <img alt="" src={facebook} className="lg:h-10 h-10" />
                  </span>
                </Link>
                <Link
                  className="mr-4 ml-4"
                  to="https://twitter.com/AlhayaInAfrica?t=Qq8W3lBluleybJEC15vW1Q&s=08"
                  target="_blank"
                >
                  <span>
                    <img alt="" src={twitter} className="lg:h-10 h-10" />
                  </span>
                </Link>
                <Link
                  className=" mr-3"
                  to="https://www.snapchat.com/add/alhayahinafrica?share_id=5_Ohuoe40eQ&locale=ar-AA"
                  target="_blank"
                >
                  <BsSnapchat className="text-white text-4xl" />
                </Link>
              </li>
            </ul>

            <div
              className="whatsFooterIcon mt-3 flex items-center justify-around"
              dir={isRTL ? "rtl" : "ltr"}
            >
              <Link>
                <img src={whatsapp1} alt="" className="h-8" />
              </Link>

              <a
                className="flex items-center "
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold text-white">
                  {i18n.language === "en" ? "WhatsApp us" : "تواصل معنــا "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="  py-4 ml-2 mr-2  text-center " dir={isRTL ? "rtl" : "ltr"}>
        <hr class="border-t border-footerText m-4  flex items-center" />
        <p class=" text-footerText copyright">
          {i18n.language === "en"
            ? ` Copyright © All Rights reserved for Alhayah in Africa `
            : "  جميع الحقوق ©  محفوظه لدي الحياه بإفريقيا"}
        </p>
      </div>
    </div>
  );
};

export default Footer;
