import React from 'react'

import { useState } from 'react';

const AlmsSheepComponent = () => {
    const [counter, setCounter] = useState(1);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
    if (counter <= 1) {
      setCounter(1);
    }
  };
  return (
    <div className="flex flex-col m-6  AlmsCon   items-center  w-full justify-around text-center">
    <div>
      <div className="flex flex-wrap justify-center ">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="w-20 h-20 rounded-full bg-navColor m-2 flex items-center justify-center">
  <img src="/HomeImages/sheep.png" alt="" className='w-16'/>
</div>
        ))}
      </div>
      <span className="flex justify-center  items-center lg:m-6 m-2 text-2xl ">
        {" "}
        ={" "}
      </span>
    </div>

    <div className=" bigCow lg:w-32 lg:h-32 w-28 h-28 bg-navColor flex items-center justify-center   rounded-full">
      <img
        src={`/HomeImages/sheep.png`}
        alt=""
        className=" inset-0 m-auto w-18"
      />
    </div>
    <div className="font-semibold">
      <p>Share price :20$ </p>
    </div>

    <div className="btnClick flex flex-row justify-around w-full">
      <button onClick={decreaseCounter} className="text-white text-3xl">
        -
      </button>
      <p className="text-white text-2xl mt-1">{counter}</p>
      <button onClick={increaseCounter} className="text-white text-2xl">
        +
      </button>
    </div>

    <button className="btnShare flex flex-row justify-around w-full">
      <p className="text-black text-sm flex items-center  justify-center mt-2 font-semibold">
        Donate a share{" "}
      </p>
      <img
        src="/HomeImages/donate.png"
        className="w-7 h-7 mt-1 flex items-center"
        alt=""
      />
    </button>
  </div>
  )
}

export default AlmsSheepComponent