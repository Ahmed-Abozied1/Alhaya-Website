import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousell.css"
export default class Carousell extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="w-full text-center">
        <Slider {...settings}>
          <div className="  mb-5  contentContainer sm:justify-center">
            <img
              src="/images/opinion1.jpg"
              alt="Image3"
              className="w-60 h-60  object-cover  mb-5  rounded-xl"
            />
          </div>
          <div className="contentContainer  mb-5  justify-center sm:justify-center">
            <img
              src="/images/opinion2.jpg"
              alt="Image4"
              className="w-60 h-60  object-cover rounded-xl"
            />
          </div>
          <div className="contentContainer  mb-5  justify-center sm:justify-center">
            <img
              src="/images/opinion3.jpg"
              alt="Image4"
              className="w-60 h-60  object-cover rounded-xl"
            />
          </div>
          <div className="contentContainer  mb-5  justify-center sm:justify-center">
            <img
              src="/images/opinion4.jpg"
              alt="Image4"
              className="w-60 h-60 object-cover rounded-xl"
            />
          </div>
          <div className="contentContainer  mb-5  justify-center sm:justify-center">
            <img
              src="/images/opinion5.jpg"
              alt="Image4"
              className="w-60 h-60 object-cover rounded-xl"
            />
          </div>
          <div className="contentContainer  mb-5  justify-center sm:justify-center">
            <img
              src="/images/opinion6.jpg"
              alt="Image4"
              className="w-60 h-60  object-cover rounded-xl"
            />
          </div>
          <div className="contentContainer  mb-5  justify-center sm:justify-center">
            <img
              src="/images/opinion7.jpg"
              alt="Image4"
              className="w-60 h-60 object-cover rounded-xl"
            />
          </div>
          <div className="contentContainer  mb-5  justify-center sm:justify-center">
            <img
              src="/images/opinion8.jpg"
              alt="Image4"
              className="w-60 h-60 object-cover rounded-xl"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
