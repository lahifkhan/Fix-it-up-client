import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hook/useAxiosInstance";
import AllIssueCard from "../Components/AllIssueCard";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdCategory, MdClear, MdOutlinePendingActions } from "react-icons/md";
import Loader from "../Components/Loader";
import useDynamicTitle from "../Hook/useDynamicTitle";

const AllIssue = () => {
  const [allIssue, setAllIssue] = useState([]);
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const axiosInstance = useAxiosInstance();

  useDynamicTitle("All Issues");

  useEffect(() => {
    setloading(true);

    let url = "/filterIssue?";
    if (category) {
      url += `category=${category}&`;
    }
    if (status) {
      url += `status=${status}`;
    }

    axiosInstance.get(url).then((data) => {
      setAllIssue(data.data);
      setloading(false);
    });
  }, [category, status, axiosInstance]);

  const handleClear = () => {
    setCategory("");
    setStatus("");
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="mb-8 w-11/12 mx-auto">
      <h1 className="text-center font-bold text-2xl md:text-3xl text-primary mt-20 mb-8">
        All Issues
      </h1>
      <div>
        <div>
          <div className="flex flex-wrap items-center justify-end gap-3 mb-6 p-3 bg-base-100 shadow-md rounded-lg">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <MdCategory className="text-primary text-xl" />
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="select select-bordered select-sm rounded-full"
              >
                <option value="">All Categories</option>
                <option value="Garbage"> Garbage</option>
                <option value="Illegal Construction">
                  Illegal Construction
                </option>
                <option value="Broken Public Property">
                  Broken Public Property
                </option>
                <option value="Road Damage">Road Damage</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 items-center">
              <MdOutlinePendingActions className="text-primary text-xl" />
              <select
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="select select-bordered select-sm rounded-full"
              >
                <option value="">All Status</option>
                <option value="ongoing">Ongoing</option>
                <option value="ended">Ended</option>
              </select>
            </div>

            <div className="flex gap-1">
              <button
                onClick={handleClear}
                className="btn btn-sm btn-outline rounded-full"
              >
                <MdClear />
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {allIssue.map((issue) => (
          <AllIssueCard issue={issue}></AllIssueCard>
        ))}
      </div>
    </div>
  );
};

export default AllIssue;
