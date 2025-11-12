import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const VolunteerCta = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-2xl   shadow-xl">
        <div className="max-w-3xl mx-auto space-y-6 px-4">
          <FaHandsHelping className="text-6xl mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            Join Our <span className="text-yellow-300">Clean Drive</span> Today!
          </h2>
          <p className="text-lg  leading-relaxed">
            Be part of the movement to make our community cleaner, greener, and
            safer. Every helping hand makes a difference — together, we can
            restore our surroundings!
          </p>

          <button className="btn btn-primary btn-wide   text-white mt-4 rounded-full">
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCta;
