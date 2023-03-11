import React from "react";

const ScrollCard = () => {
  return (
    <div class="  mb-4 cardVedio  overflow-hidden shadow-lg bg-white">
      <img
        class=" imgg"
        src="/HomeImages/ScrollVedioImage/img1.png"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 flex justify-center">
          Food Distribution
        </div>
        <p class="text-gray-700 text-base flex justify-center">
          Africa Life Foundation
        </p>
      </div>
      <div class="px-6 pt-4   flex justify-center">
        <button className="bg-navColor playBtn ">play</button>{" "}
      </div>
    </div>
  );
};

export default ScrollCard;
