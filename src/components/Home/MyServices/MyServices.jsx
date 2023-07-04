import React from "react";
import Button from "../../Button/Button";

const MyServices = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
      <div className="flex flex-wrap mt-4 w-full justify-center">
        {/* <div className="flex flex-col sm:flex-row">
          <img
            src="/images/opinion1.jpg"
            alt="Image1"
            className="w-60 h-60 m-2 object-cover"
          />
          <img
            src="/images/opinion2.jpg"
            alt="Image2"
            className="w-60 h-60 m-2 object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <img
            src="/images/opinion3.jpg"
            alt="Image3"
            className="w-60 h-60 m-2 object-cover"
          />
          <img
            src="/images/opinion4.jpg"
            alt="Image4"
            className="w-60 h-60 m-2 object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <img
            src="/images/opinion5.jpg"
            alt="Image5"
            className="w-60 h-60 m-2 object-cover"
          />
          <img
            src="/images/opinion6.jpg"
            alt="Image6"
            className="w-60 h-60 m-2 object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <img
            src="/images/opinion8.jpg"
            alt="Image5"
            className="w-60 h-60 m-2 object-cover"
          />
          <img
            src="/images/opinion6.jpg"
            alt="Image6"
            className="w-60 h-60 m-2 object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <img
            src="/images/opinion9.jpg"
            alt="Image5"
            className="w-60 h-60 m-2 object-cover"
          />
          <img
            src="/images/opinion10.jpg"
            alt="Image6"
            className="w-60 h-60 m-2 object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <img
            src="/images/opinion11.jpg"
            alt="Image5"
            className="w-60 h-60 m-2 object-cover"
          />
          <img
            src="/images/opinion12.jpg"
            alt="Image6"
            className="w-60 h-60 m-2 object-cover"
          />
        </div> */}
      </div>
      <p className="text-center sm:mr-16 mr-0 sm:text-right font-semibold text-3xl leading-relaxed px-4 py-2 sm:w-1/2 sm:block  sm:py-4">
        احترافية فى تنفيذ الخدمات ودقة فى المواعيد <br />
        <span className="text-xl">
          {" "}
          لدينا فريق متخصص فى ادارة المواعيد وتسهيل جدولة الزيارات عشان ما نتأخر
          عليك دقيقة كل اللى يهمنا انك تكون راضى عشان تكون عميل عندنا علطول
        </span>
        <Button />
        <p className="font-bold text-center mt-6">تجارب واراء عملائنا</p>
      </p>
    </div>
  );
};

export default MyServices;
