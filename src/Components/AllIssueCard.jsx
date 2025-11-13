import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDonate } from "react-icons/fa";
import { Link } from "react-router";

const AllIssueCard = ({ issue }) => {
  const { title, description, category, location, image, amount } = issue;
  return (
    <div className="card bg-base-100  shadow-2xl  hover:scale-105 transition-transform duration-300">
      <figure className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 "
        />
      </figure>{" "}
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <p className="text-secondary">
          {description.length > 40
            ? description.slice(0, 40) + "..."
            : description}
        </p>
        <div className="card-actions justify-end flex flex-col">
          <div className="badge badge-dash badge-primary">{category}</div>
          <div className="badge badge-dash badge-primary">
            <CiLocationOn />
            {location}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <Link to={`/issues/${issue._id}`} className="btn btn-primary">
            See Details
          </Link>
          <div className="flex items-center gap-1 font-bold badge badge-outline">
            <FaDonate />
            {amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllIssueCard;
