import React from "react";
import { CiLocationOn } from "react-icons/ci";

const IssueCard = ({ issue }) => {
  const { title, description, category, location, image } = issue;
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
        <h2 className="card-title font-bold text-xl">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-secondary">{description}</p>
        <div className="card-actions justify-end flex flex-col">
          <div className="badge badge-dash badge-primary">{category}</div>
          <div className="badge badge-dash badge-primary">
            <CiLocationOn />
            {location}
          </div>
        </div>
        <button className="btn btn-secondary">See Details</button>
      </div>
    </div>
  );
};

export default IssueCard;
