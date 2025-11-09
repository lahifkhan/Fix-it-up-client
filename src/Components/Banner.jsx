import React from "react";
import communityImg from "../assets/community.png";

const Banner = () => {
  return (
    <div className="hero-bg">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-10/12 mx-auto">
        <div className="flex-1 space-y-1 pr-16 md:p-0">
          <h1 className=" text-2xl md:text-5xl leading-tight font-bold">
            <span className="text-primary">
              Report Local Issues. Take Action. Improve Your{" "}
            </span>
            <span className="text-gradient-primary">Community</span>
          </h1>
          <p className="text-zinc-500 ">
            Easily report problems in your neighborhood, participate in
            community initiatives, and help make your area safer, cleaner, and
            more sustainable.
          </p>
        </div>

        <div className="flex-1">
          <img className="  w-full" src={communityImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
