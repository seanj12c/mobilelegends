import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../assets/11.jpg";
import one from "../assets/carousel/c1.jpg";
import two from "../assets/carousel/c2.jpg";
import three from "../assets/carousel/c3.jpg";
import four from "../assets/carousel/c4.jpg";
import five from "../assets/carousel/c5.jpg";
import six from "../assets/carousel/c6.jpg";
import seven from "../assets/carousel/c7.jpg";
import icon from "../assets/icon.jpg";
import plus from "../assets/12+.jpg";
import apk from "../assets/apk.png";
import ios from "../assets/ios.png";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      id="home"
      className="h-screen md:flex justify-start my-auto items-center w-full bg-black md:bg-transparent"
    >
      <img
        className="z-[-1] absolute hidden md:block h-screen w-screen mx-auto object-cover pointer-events-none select-none"
        src={bg}
        alt=""
      />
      <div className="hidden py-52 h-full px-10 lg:w-1/2 w-2/3 text-primary md:flex justify-start items-center">
        <div className="h-full ">
          <h1 className="font-bold text-6xl">LET THE GAME BEGIN!</h1>
          <p className="text-justify py-2">
            Mobile Legends: Bang Bang is an exhilarating, action-packed mobile
            game that has taken the world by storm. If you're ready to embark on
            an epic journey filled with strategic battles and thrilling
            gameplay, look no further! Join over 100 million players worldwide
            and step into the arena of Mobile Legends, where heroes are born and
            legends are made!
          </p>
          <div className="flex gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en-PH"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-40 border mx-auto object-contain rounded-lg text-white"
                src={apk}
                alt=""
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/mobile-legends-bang-bang/id1160056295"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-40 border mx-auto object-contain rounded-lg text-white"
                src={ios}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="relative top-24 md:hidden ">
        <Slider {...settings}>
          <div>
            <img
              src={one}
              alt=""
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div>
            <img
              src={two}
              alt=""
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div>
            <img
              src={three}
              alt=""
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div>
            <img
              src={four}
              alt=""
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div>
            <img
              src={five}
              alt=""
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div>
            <img
              src={six}
              alt=""
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div>
            <img
              src={seven}
              alt=""
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
        </Slider>
        <div className="md:hidden">
          <div className="sm:flex  justify-center hidden">
            <h1 className="text-primary text-center font-bold text-xl">
              Mobile Legends : Bang Bang
            </h1>
          </div>
          <div className="grid grid-cols-4 text-center items-center p-2 text-white text-xs">
            <div className="flex justify-center">
              <img src={icon} alt="" />
            </div>
            <div className="flex justify-center flex-col">
              <p>3.8★</p>
              <p>Reviews</p>
            </div>
            <div className="flex justify-center flex-col">
              <p>500M+</p>
              <p>Downloads</p>
            </div>
            <div className="flex justify-center flex-col">
              <img className="h-4 object-contain" src={plus} alt="" />
              <p>Rated for 12+</p>
            </div>
          </div>
          <div>
            <p className="text-justify sm:hidden text-primary text-xs px-2">
              Mobile Legends: Bang Bang is an exhilarating, action-packed mobile
              game that has taken the world by storm. If you're ready to embark
              on an epic journey filled with strategic battles and thrilling
              gameplay, look no further! Join over 100 million players worldwide
              and step into the arena of Mobile Legends, where heroes are born
              and legends are made!
            </p>
          </div>
          <div className="flex justify-center gap-2 pt-2">
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en-PH"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-32 border mx-auto object-contain rounded-lg text-white"
                  src={apk}
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href="https://apps.apple.com/us/app/mobile-legends-bang-bang/id1160056295"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-32 border mx-auto object-contain rounded-lg text-white"
                  src={ios}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
