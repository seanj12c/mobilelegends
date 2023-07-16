import React from "react";
import android from "../assets/apk.png";
import apple from "../assets/ios.png";
import mockbg from "../assets/22.jpg";
const Download = () => {
  return (
    <div
      id="download"
      className="w-full h-screen my-auto flex justify-center items-center mx-auto text-white text-center"
    >
      <img
        className="z-[-1] absolute opacity-75 h-full w-screen mx-auto object-cover pointer-events-none select-none blur-sm"
        src={mockbg}
        alt=""
      />
      <div className=" px-2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl pt-7">
          Join the{" "}
          <span className="text-primary font-bold">Mobile Legends</span>{" "}
          revolution.
        </h1>
        <p className="text-base md:text-lg lg:text-2xl py-2">
          Experience exciting gameplay and irresistible rewards with{" "}
          <span className="text-primary font-bold">Mobile Legends</span>
        </p>
        <div className="flex justify-center gap-2 md:gap-20">
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en-PH"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-14 lg:h-24 my-4 border mx-auto object-contain rounded-lg"
                src={android}
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
                className="h-14 lg:h-24 my-4 border  mx-auto object-contain rounded-lg"
                src={apple}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
