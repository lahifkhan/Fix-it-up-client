import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import useAxiosInstance from "../Hook/useAxiosInstance";
import { useParams } from "react-router";

const IssueDetails = () => {
  const [issue, setIssue] = useState({});
  const axiosInstance = useAxiosInstance();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axiosInstance.get(`/issues/${id}`).then((data) => {
      console.log(data);
      setIssue(data.data);
    });
  }, [id, axiosInstance]);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-11 gap-5 my-8">
      <div className="left col-span-full md:col-span-8 space-y-5">
        <div className="">
          <div>
            <h1 className="text-3xl font-bold text-primary">{issue.title}</h1>
          </div>
        </div>
        <div className="flex gap-6">
          <p className=" border-r-2  pr-3">
            <span className="text-zinc-500"> Created By</span> <br />{" "}
            <span className="text-primary font-semibold">{issue.email}</span>
          </p>
          <p className="border-r-2  pr-3">
            <span className="text-zinc-500"> Category </span>
            <br />{" "}
            <span className="text-primary font-semibold">{issue.category}</span>
          </p>
        </div>

        <div>
          <img
            className="w-full rounded-lg h-80 object-cover"
            src={issue.image}
            alt=""
          />
          <div className="mt-3 space-y-2">
            <h1 className="text-xl font-bold text-primary">Description</h1>
            <p className="text-zinc-500">{issue.description}</p>
          </div>
        </div>
      </div>

      <div className="right col-span-full md:col-span-3 bg-white shadow-2xl h-fit rounded-lg p-2">
        <p className="p-2 flex items-center gap-2">
          <FaHome className="text-primary" />
          <span className="text-primary font-semibold">location: </span>{" "}
          <span>{issue.location}</span>
        </p>

        <p className="p-2 flex items-center gap-2">
          <MdOutlineDateRange />
          <span className="text-primary font-semibold">Date:</span>{" "}
          <span>{new Date(issue.date).toLocaleString()}</span>
        </p>
        {/* <p className="p-2 flex items-center gap-2 flex-wrap">
          <CgProfile className="text-primary" />
          <span className="text-primary font-semibold">Reported By:</span>{" "}
          <span>{issue.email} </span>
        </p> */}

        <div>
          <h3 className="text-zinc-500 p-2 border-b border-zinc-500">
            Repair Budget
          </h3>
          <div className="flex items-center justify-between p-2">
            <p className="font-bold">{issue.amount} Tk</p>
            <p className="text-sm text-gray-500">Needed</p>
          </div>

          <div className="text-center mt-6">
            <button className="btn btn-primary">
              Pay Clean-Up Contribution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
