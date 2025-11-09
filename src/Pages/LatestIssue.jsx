import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hook/useAxiosInstance";
import IssueCard from "../Components/IssueCard";

const LatestIssue = () => {
  const [latestIssues, setLatestIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    axiosInstance.get("/latestIssue").then((data) => {
      console.log(data.data);
      setLatestIssues(data.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>loadin ....</p>;
  }
  return (
    <div>
      <h1 className="text-center font-bold text-2xl md:text-5xl text-primary mt-20 mb-8">
        Latest Issues
      </h1>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {latestIssues.map((issue) => (
          <IssueCard key={issue._id} issue={issue}></IssueCard>
        ))}
      </div>
    </div>
  );
};

export default LatestIssue;
