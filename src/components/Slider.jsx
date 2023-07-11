import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/11.jpg";
import two from "../assets/22.jpg";
import three from "../assets/33.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img src={one} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={two} alt="" className="w-full h-auto" />
        </div>
        <div>
          <img src={three} alt="" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
