import React from "react";
import one from "../assets/carousel/c1.jpg";
import two from "../assets/carousel/c2.jpg";
import three from "../assets/carousel/c3.jpg";
import four from "../assets/carousel/c4.jpg";
import five from "../assets/carousel/c5.jpg";
import six from "../assets/carousel/c6.jpg";
import seven from "../assets/carousel/c7.jpg";
import Slider from "react-slick";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import logo from "../assets/logo.png";
const Contact = () => {
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
      id="contact"
      className="w-full h-full text-white bg-black text-center md:flex justify-between gap-4 md:px-10 md:text-left text-gray-300 py-4"
    >
      <div className="md:flex items-center">
        <div className=" w-full">
          <img
            className="w-32 md:w-44 mx-auto md:mx-0 pb-2"
            src={logo}
            alt=""
          />
          <p className="text-sm md:text-base text-gray-300 md:w-full w-[80%] text-justify mx-auto">
            Experience thrilling gameplay and unlock irresistible rewards in
            Mobile Legends. Join a global community of players and showcase your
            skills in intense battles. Immerse yourself in the ultimate mobile
            gaming experience and dominate the arena.
          </p>

          <div className="pt-1">
            <div>
              <a
                className="my-1 hover:text-white text-primary duration-500"
                href="mailto:mobilelegendsgame@moonton.com"
              >
                mobilelegendsgame@moonton.com
              </a>
              <div className="flex justify-center md:justify-start my-1 gap-3">
                <a
                  href="https://www.facebook.com/MobileLegendsGame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook
                    className="hover:text-primary duration-500"
                    size={30}
                  />
                </a>
                <a
                  href="https://www.instagram.com/mobilelegendsgame/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram
                    className="hover:text-primary duration-500"
                    size={30}
                  />
                </a>
                <a
                  href="https://www.youtube.com/c/MobileLegends5v5MOBA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillYoutube
                    className="hover:text-primary duration-500"
                    size={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block w-1/2 hidden ">
        <Slider {...settings}>
          <div>
            <img src={one} alt="" className="w-full h-auto object-contain" />
          </div>
          <div>
            <img src={two} alt="" className="w-full h-auto object-contain" />
          </div>
          <div>
            <img src={three} alt="" className="w-full h-auto object-contain" />
          </div>
          <div>
            <img src={four} alt="" className="w-full h-auto object-contain" />
          </div>
          <div>
            <img src={five} alt="" className="w-full h-auto object-contain" />
          </div>
          <div>
            <img src={six} alt="" className="w-full h-auto object-contain" />
          </div>
          <div>
            <img src={seven} alt="" className="w-full h-auto object-contain" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Contact;
