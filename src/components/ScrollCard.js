import React from "react";

const ScrollCard = ({vedio}) => {
  return (
    <div class="  mb-4 hover:cursor-pointer cardVedio    bg-white">
      <img
        class=" vedioImg "
        src={`/HomeImages/ScrollVedioImage/${vedio?.image}`}
        alt="Sunset in the mountains"
      />
      <div class=" mt-4 justify-center flex flex-col">
        <div class="font-bold text-xl mb-2 flex justify-center">
      {vedio.name}
        </div>
        <p class="text-gray-700 text-base flex justify-center">
         {vedio.title}
        </p>
      </div>
      <div class="px-6 pt-4    flex justify-center">
        <button className="bg-navColor playBtn ">play</button>{" "}
      </div>
    </div>
  );
};

export default ScrollCard;
