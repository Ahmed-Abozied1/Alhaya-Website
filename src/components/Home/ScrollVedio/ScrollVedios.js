import { useState } from "react";
import Slider from "react-slick";
import "./ScrollVedio.css"
import { Vedios } from "../../../Data/Vedios";
import ScrollCards from "./ScrollCard";

function ScrollVedios() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    dots: true, // Show dots for navigation
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    arrows: false,
    customPaging: (current, next) => (
      <div className="slick-dots">
        <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,

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
    <section className=" con  bg-navColor">
      <div className="slider">
        <Slider {...settings}>
          {Vedios.map((vedio, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <ScrollCards vedio={vedio}/>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ScrollVedios;
