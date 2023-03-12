import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full flex sm:gap-8  items-center justify-center lg:mt-28 mt-10 mb-6">
      <h2 className="sm:text-xl font-bold lg:text-3xl text-2xl ">{title}</h2>
    </div>
  );
};

export default Title;
