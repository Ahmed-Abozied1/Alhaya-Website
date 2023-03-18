import React, { useState,useRef } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import "./ScrollVedio.css"
const ScrollCard = ({ vedio }) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);
  const { t, i18n } = useTranslation();

  const handlePlayButtonClick = () => {
    setPlaying(true);
  };
  const handleVideoEnded = () => {
    setPlaying(false);
  };

  const handleStopButtonClick = () => {
    setPlaying(false);
    playerRef.current.seekTo(0);
  };
  return (
    <div className="mb-4 hover:cursor-pointer cardVedio bg-white">
      <div className="vedioImg">
        <ReactPlayer
          url={vedio.link}
          controls={true}
          width="100%"
          height="auto"
          playing={playing}
          onEnded={handleVideoEnded}
        />
       
      </div>
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
       
      </div>
      <div className="px-6 pt-4 flex justify-center">
        <button
          className="bg-navColor playBtn"
          onClick={handlePlayButtonClick}
          style={{ display: playing ? 'none' : 'block' }}
        >
          {t("playBtn")}
        </button>
      </div>
      <div
          className=" playBtn lg:ml-14 ml-14 lg:px-16 px-14 lg:pt-4 pt-4 flex justify-center"
          onClick={handleStopButtonClick}
          style={{ display: playing ? "flex" : "none" }}
        >
                    {t("stopBtn")}

        </div>
    </div>
  );
};

export default ScrollCard;
