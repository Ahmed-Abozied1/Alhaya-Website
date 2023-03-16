
import React, { useState } from 'react';

const AlmsCowComponent = () => {
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
  
  const handleShareButtonClick = () => {
    const message = `I want to donate ${counter} shares`;
    const phone = '01068801942';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <div className="flex flex-col m-6  AlmsCon   items-center  w-full justify-between text-center">
      <div>
        <div className="flex flex-wrap justify-center ">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-20 h-20 rounded-full bg-navColor m-2 flex items-center justify-center">
              <img src="/HomeImages/cow.png" alt="" />
            </div>
          ))}
        </div>
        <span className="flex justify-center  items-center lg:m-6 m-2 text-2xl ">
          {" "}
          ={" "}
        </span>
      </div>

      <div>
        <div className="bigCow lg:w-32 lg:h-32 w-28 h-28 bg-navColor  flex items-center justify-center rounded-full">
          <img
            src={`/HomeImages/cow.png`}
            alt=""
            className="inset-0 m-auto "
          />
        </div>
        <p className='font-bold text-xl mb-2'>360$</p>
      </div>

      <div className="font-semibold">
        <p>Share price: 45$ </p>
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

      <button onClick={handleShareButtonClick} className="btnShare flex flex-row justify-around w-full">
        <p className="text-black text-sm flex items-center justify-center mt-2 font-semibold">
          Donate {counter} share(s)
        </p>
        <img
          src="/HomeImages/donate.png"
          className="w-7 h-7 mt-1 flex items-center"
          alt=""
        />
      </button>
    </div>
  );
};

export default AlmsCowComponent;
