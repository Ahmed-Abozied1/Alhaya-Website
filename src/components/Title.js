import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center justify-center mt-5 text-3xl">
      <h2 className="sm:text-xl font-bold text-lg">{title}</h2>
    </div>
  );
};

export default Title;
