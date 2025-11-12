import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import Lottie from "lottie-react";
import volunteerAin from "../volunter.json";

const VolunteerCta = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-2xl shadow-xl">
        <div className="max-w-3xl mx-auto space-y-6 px-4">
          {/* Lottie animation with fixed size */}
          <div className="flex justify-center items-center">
            <Lottie
              animationData={volunteerAin}
              loop
              className="w-52 md:w-72 h-auto"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            Join Our <span className="text-yellow-300">Clean Drive</span> Today!
          </h2>

          <p className="text-lg leading-relaxed opacity-90">
            Be part of the movement to make our community cleaner, greener, and
            safer. Every helping hand makes a difference — together, we can
            restore our surroundings!
          </p>

          <button className="btn btn-wide bg-white text-primary border-0 font-semibold mt-6 hover:bg-yellow-300 hover:text-black rounded-full">
            <FaHandsHelping className="mr-2 text-xl" />
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCta;
