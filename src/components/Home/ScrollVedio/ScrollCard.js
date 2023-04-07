import React from "react";
import { useTranslation } from "react-i18next";
// import ReactPlayer from "react-player";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

import "./ScrollVedio.css"
import { useState } from "react";
const ScrollCard = ({ vedio }) => {
  const [isOpen, setOpen] = useState(false)

  const { t, i18n } = useTranslation();

  const openModal = () => {
    setOpen(true);
  };
 

  
  return (
    <div className="mb-4 hover:cursor-pointer cardVedio   bg-white">
     
      <img src={`/HomeImages/ScrollVedioImage/${vedio.image}`} alt="" className="vedioImage"/>
      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId={vedio.link}
        onClose={() => setOpen(false)}
      />
      <div className="mt-4 justify-center flex flex-col">
       {i18n.language ==="ar" ?
       
       <div className="font-bold text-xl mb-2 flex justify-center">
         {vedio.name_ar}
        </div>
        :
        <div className="font-bold text-xl mb-2 flex justify-center">
         {vedio.name}
        </div>
       }
       {i18n.language ==="ar" ?
       
       <p className="text-gray-700 text-base flex justify-center">
          {vedio.tite_ar}
        </p>
        :
        <p className="text-gray-700 text-base flex justify-center">
          {vedio.title}
        </p>
       }
      <div className="flex text-center items-center justify-center mt-4">
      {i18n.language ==="ar" ?
       
       <button onClick={openModal} className="text-gray-700 text-base flex justify-center playBtn">
         تشغيل
        </button>
        :
        <button onClick={openModal} className="text-gray-700 text-base flex justify-center playBtn">
         Play
        </button>
       }
      </div>
       
      </div>
      
    </div>
  );
};

export default ScrollCard;
