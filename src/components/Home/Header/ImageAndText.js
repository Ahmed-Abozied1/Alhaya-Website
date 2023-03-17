import React,{useState} from "react";
import { Link } from "react-router-dom";

import facebook from "../../../images/facebook.png";
import twitter from "../../../images/twitter.png";
import whatsapp1 from "../../../images/whatsapp 1.png";
import youtube from "../../../images/youtube.png";
const ImageAndText = () => {
  const [phoneNumber, setPhoneNumber] = useState("0201068801942");

  return (
    <div class="relative  ">
    
      <img src="HomeImages/1.png" alt="" className="opacity-30 " />
      <h1 class="absolute header  w-full  leading-10    text-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        justice
        <br />
        begins where <br />
        ineguality <br />
        ends
      </h1>

      <div className=" lg:mb-4 mb-4 gap-4 flex flex-col justify-center   md:text-lg text-sm">
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
        <div className="whatsFooterIcon mt-3 flex items-center justify-evenly">
          <Link>
            <img src={whatsapp1} alt="" className="h-8" />
          </Link>
          <a
  className="flex items-center mr-4"
  href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
  target="_blank"
  rel="noopener noreferrer"
>
             <span className="text-sm text-white">WhatsApp us</span>

</a>
          {/* <Link>
            <span className="text-sm text-white">WhatsApp us</span>
          </Link> */}
        </div>
      </div>
     
    </div>
  );
};

export default ImageAndText;
