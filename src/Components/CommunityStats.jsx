import React from "react";
import { FaUsers, FaTasks } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";

const CommunityStats = () => {
  return (
    <div className="py-16 bg-base-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
        Community Stats
      </h2>

      <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-4 gap-8 ">
        {/* Register Stats */}
        <div className="flex flex-col justify-center items-center text-center shadow-lg  p-8 bg-white dark:bg-base-200 hover:scale-105 transition-transform duration-300 rounded-2xl">
          <FaUsers className="text-4xl text-primary" />
          <h3 className="text-lg font-semibold mt-3 text-primary ">
            Total Registered Users
          </h3>
          <p className="text-3xl font-bold mt-2 text-zinc-500 ">1,245</p>
        </div>

        {/* issues stat */}
        <div className="flex flex-col justify-center items-center text-center shadow-lg rounded-2xl p-8 bg-white dark:bg-base-200 hover:scale-105 transition-transform duration-300">
          <FaTasks className="text-4xl text-primary" />
          <h3 className="text-lg font-semibold mt-3 text-primary ">
            Total Issues Reported
          </h3>
          <p className="text-3xl font-bold mt-2 text-zinc-500 ">582</p>
        </div>

        {/* resloved stat */}
        <div className="flex flex-col justify-center items-center text-center shadow-lg rounded-2xl p-8 bg-white dark:bg-base-200 hover:scale-105 transition-transform duration-300">
          <AiOutlineCheckCircle className="text-4xl text-green-500" />
          <h3 className="text-lg font-semibold mt-3 text-primary ">
            Issues Resolved
          </h3>
          <p className="text-3xl  mt-2 text-zinc-500 font-bold ">410</p>
        </div>

        {/*  pending stat */}
        <div className="flex flex-col justify-center items-center text-center shadow-lg rounded-2xl p-8 bg-white dark:bg-base-200 hover:scale-105 transition-transform duration-300">
          <MdOutlinePendingActions className="text-4xl text-yellow-500" />
          <h3 className="text-lg font-semibold text-primary mt-3">
            Pending Issues
          </h3>
          <p className="text-3xl font-bold text-zinc-500 mt-2">172</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;
