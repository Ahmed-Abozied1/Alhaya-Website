import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/footerLogo.png";
import whatsapp from "../../images/footerwhatsapp.png";
import phone from "../../images/phone.png";
import place from "../../images/place.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import whatsapp1 from "../../images/whatsapp 1.png";
import youtube from "../../images/youtube.png";
import "./Footer.css";
const Footer = () => {
  const Links = [
    {
      title: "QUICK LINK",
      links: [
        {
          name: "Home",
          link: "#",
        },
        {
          name: "About Us",
          link: "#",
        },
        {
          name: "Services",
          link: "#",
        },
        {
          name: "Portfolio",
          link: "#",
        },
      ],
    },
    {
      title: "CONTACT",
      links: [
        {
          name: "+201021892204",
          link: "#",
          icon: whatsapp,
        },
        {
          name: "+201068801942",
          link: "#",
          icon: phone,
        },
        {
          name: "Tanzania",
          link: "#",
          icon: place,
        },
      ],
    },
  ];
  return (
    <div className="bg-navColor py-4 bprder=t-2 border-black">
      <div className="container mx-auto px-2 ">
        <div
          className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between
          "
        >
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="#">
              <img
                src={logo}
                alt="logo"
                className=" object-contain h-40 flex items-center"
              />
            </Link>
          </div>
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-footerText text-2xl font-bold lg:leading-7  mb-4 sm:mb-5 lg:mb-6 pb-0.5 ">
                {link.title}
              </h3>
              <ul className="text-footerText text-xl	 flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex items-baseline">
                    <Link
                      to={text.link}
                      className="text-footerText inline-block w-full hover:text-submain"
                    >
                      <div className="flex ">
                        <span className="mr-2">
                          <img alt="" src={text.icon} />
                        </span>
                        <p> {text.name}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1   md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
            <h3 className="text-footerText text-2xl font-bold lg:leading-7  mb-4 sm:mb-5 lg:mb-6 pb-0.5 ">
              Social Media Links
            </h3>
            <ul className="text-footerText text-xl">
              <li className="flex items-baseline ">
                <Link className="mr-7">
                  <span>
                    <img alt="" src={youtube} className="lg:h-10" />
                  </span>
                </Link>
                <Link className="mr-7">
                  <span>
                    <img alt="" src={facebook} className="lg:h-10" />
                  </span>
                </Link>
                <Link className="mr-7">
                  <span>
                    <img alt="" src={twitter} className="lg:h-10 " />
                  </span>
                </Link>
              </li>
            </ul>

            <div className="whatsFooterIcon mt-3 flex items-center justify-around">
              <Link>
                <img src={whatsapp1} alt="" className="h-8" />
              </Link>
              <Link>
                <span className="text-sm text-white">WhatsApp us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto py-4 ">
        <hr class="border-t border-footerText m-4  flex items-center" />
        <p class="text-center text-footerText">
          Copyright <span className="text-white">©</span> All Rights reserved
          for Alhayah in Africa
        </p>
      </div>
    </div>
  );
};

export default Footer;
