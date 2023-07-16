import React from "react";
import { GiDiamondTrophy, GiBattleGear } from "react-icons/gi";
import { PiStrategy } from "react-icons/pi";
import bg from "../assets/33.jpg";

const Features = () => {
  return (
    <div
      id="features"
      className="md:flex my-auto h-screen justify-center items-center w-full"
    >
      <img
        className="z-[-1] absolute h-screen w-screen mx-auto object-cover pointer-events-none select-none"
        src={bg}
        alt=""
      />
      <div className="w-full py-2 lg:py-32 xl:py-52 md:py-20 h-full md:h-screen text-center text-xs md:text-lg mx-auto text-white">
        <div className="py-6">
          <h1 className="text-lg font-bold md:text-4xl lg:text-5xl pt-2">
            <span className="text-primary">Mobile Legends</span> Features
          </h1>
          <p className="text-xs md:text-sm font-light md:w-[70%] mx-auto">
            We offer a glimpse into the future of Mobile Legends, where
            groundbreaking updates and innovative features await to
            revolutionize your gaming experience.
          </p>
        </div>
        <div className=" flex-col md:flex-row flex">
          {/* box1 */}
          <div className="w-full px-2 py-3 md:px-6">
            {<GiBattleGear size={30} className="mx-auto text-primary" />}
            <h1 className="py-1 text-base font-semibold md:text-lg">
              Classic MOBA Maps & 5v5 Battles
            </h1>
            <p className="text-xs font-light text-justify md:text-base">
              Real-time 5v5 battles against real players. 3 lanes, 4 jungle
              areas, 2 bosses, 18 defense towers, and endless fights, everything
              a classic MOBA has is here!
            </p>
          </div>
          <hr className="border-b w-2/3 mx-auto md:hidden" />
          {/* box2 */}
          <div className="w-full px-2 py-3 border-gray-300 md:px-6 md:border-x">
            {<PiStrategy size={30} className="mx-auto text-primary" />}
            <h1 className="py-1 text-base font-semibold md:text-lg">
              Win with Teamwork & Strategy
            </h1>
            <p className="text-xs font-light text-justify md:text-base">
              Block damage, control the enemy, and heal teammates! Choose from
              Tanks, Mages, Marksmen, Assassins, Supports, etc. to anchor your
              team and be match MVP! New heroes are constantly being released!
            </p>
          </div>
          <hr className="border-b w-2/3 mx-auto md:hidden" />
          {/* box3 */}
          <div className="w-full px-2 py-3 md:px-6">
            {<GiDiamondTrophy size={30} className="mx-auto text-primary" />}
            <h1 className="py-1 text-base font-semibold md:text-lg">
              Fair Fights, Carry Your Team to Victory
            </h1>
            <p className="text-xs font-light text-justify md:text-base ">
              Just like classic MOBAs, there is no hero training or paying for
              stats. Skill and strategy are all you need to be able to win the
              intense competition on this fair and balanced platform. Play to
              Win, not Pay to Win.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
