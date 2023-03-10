import React from "react";
import { Link } from "react-router-dom";

import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import whatsapp1 from "../../images/whatsapp 1.png";
import youtube from "../../images/youtube.png";
const ImageAndText = () => {
  return (
    <div class="relative  ">
      <img src="HomeImages/1.png" alt="" className="opacity-40" />
      <h1 class="absolute header lg:text-7xl text-4xl w-full      text-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        justice
        <br />
        begins where <br />
        ineguality <br />
        ends
      </h1>

      <div className="  gap-4 flex flex-col justify-center  mb-4 md:text-lg text-sm">
        <p className="text-black font-serif  tex-xl xl:text-base ">
          Africa Life Foundation
        </p>
        <p className="font-bold">Follow us</p>

        <div className="headerIcon bg-black  flex items-center justify-between">
          <Link className=" ml-3">
            <img src={youtube} alt="" className="h-8" />
          </Link>
          <Link>
            <img src={facebook} alt="" className="h-8" />
          </Link>
          <Link className=" mr-3">
            <img src={twitter} alt="" className="h-8" />
          </Link>
        </div>
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
  );
};

export default ImageAndText;
