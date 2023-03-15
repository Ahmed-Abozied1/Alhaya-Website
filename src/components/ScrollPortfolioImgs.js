
    import { useState } from "react";
    import Slider from "react-slick";
    
    import PortfolioImgCard from "./PortfolioImgCard.js";
    
    function ScrollPortfolioImgs() {
      const [slideIndex, setSlideIndex] = useState(0);
    
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        arrows: false,
        customPaging: (current, next) => (
          <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
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
        <section className="   bg-navColor">
          <div className="slider">
            <Slider {...settings}>
             <PortfolioImgCard img="portfolio1.png"/>
             <PortfolioImgCard img="portfolio2.png"/>
             <PortfolioImgCard img="portfolio3.png"/>
             <PortfolioImgCard img="portfolio1.png"/>
             <PortfolioImgCard img="portfolio2.png"/>
            </Slider>
          </div>
        </section>
      );
    }
    
    export default ScrollPortfolioImgs;
    
