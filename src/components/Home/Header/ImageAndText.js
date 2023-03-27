import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import facebook from "../../../images/facebook.png";
import whatsapp1 from "../../../images/whatsapp 4.png";
import youtube from "../../../images/youtube.png";
import {BsSnapchat} from "react-icons/bs"
const ImageAndText = () => {
  const [phoneNumber, setPhoneNumber] = useState("0201068801942");
  const { t, i18n } = useTranslation();

  return (
    <div className="relative">
      <div className="titleHeader">
      <img src="HomeImages/1.png" alt="" className="opacity-30 " />
      <h1 className="absolute font-semibold  header w-full  text-black">
        {t("header1")}
        <br />
        {t("header2")}
        <br />
        {t("header3")}
        <br />
        {t("header4")}
      </h1>
      </div>

      <div className=" lg:mb-8 mb-4 gap-4 flex flex-col  lg:text-right md:text-right text-center  justify-center   md:text-lg text-sm">
        <p className="text-black font-serif  lg:tex-4xl text-2xl  ">
          {t("AfricaLifeFoundation")}
        </p>
        <p className="font-bold lg:tex-4xl text-xl "> {t("Followus")}</p>
<div className=" HeaderIcons">
<div className="headerIcon bg-black  ">
          <Link className=" ml-3" to="https://www.youtube.com/channel/UC-l1VRCKMYsw5ZIUQ2Hdd5g" target="_blank">
            <img src={youtube} alt="" className="h-8" />
          </Link>
          <Link to="https://web.facebook.com/profile.php?id=100089920217767" target="_blank">
            <img src={facebook} alt="" className="h-8"  />
          </Link>
          <Link className=" mr-3" to="https://www.snapchat.com/add/alhayahinafrica?share_id=5_Ohuoe40eQ&locale=ar-AA" target="_blank">
<BsSnapchat className="text-white text-3xl"/>
          </Link>
        </div>
        <div className="whatsFooterIcon  mt-3 flex items-center justify-evenly">
          <Link>
            <img src={whatsapp1} alt="" className="h-8" />
          </Link>
          <a
            className="flex items-center "
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm font-bold text-white">{t("WhatsAppus")}</span>
          </a>
        </div>
</div>
       
      </div>
    </div>
  );
};

export default ImageAndText;
