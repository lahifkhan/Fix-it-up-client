import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hook/useAxiosInstance";

const AllIssue = () => {
  const [allIssue, setAllIssue] = useState([]);
  const [loading, setloading] = useState(false);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    setloading(true);
    axiosInstance.get("/issues").then((data) => {
      console.log(data.data);
      setAllIssue(data.data);
      setloading(false);
    });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }
  return <div></div>;
};

export default AllIssue;
