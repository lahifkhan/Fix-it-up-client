import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hook/useAxiosInstance";
import useAuth from "../Hook/useAuth";
import Loader from "../Components/Loader";

const MyContributions = () => {
  const [contributions, setContributions] = useState([]);
  const axiosInstance = useAxiosInstance();
  const [loading, setloading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setloading(true);
    axiosInstance.get(`/contributions?email=${user.email}`).then((data) => {
      console.log(data.data);
      setContributions(data.data);
      setloading(false);
    });
  }, [axiosInstance, user.email]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-11/12 mx-auto mt-8 mb-10">
      <h1 className="text-2xl md:text-3xl text-center font-bold  mb-6">
        My Contributions
        <span className="text-gradient-primary">({contributions.length})</span>
      </h1>
      <div className="overflow-x-auto shadow-lg bg-base-100  rounded-2xl">
        <table className="table table-zebra">
          {/* head of tables */}
          <thead className=" text-white bg-primary text-sm">
            <tr>
              <th>SL No.</th>
              <th>Contributor</th>

              <th>Title</th>
              <th>Category</th>

              <th>Amount</th>

              <th>Date</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {contributions.map((cont, index) => (
              <tr key={cont._id} className="hover:bg-base-300">
                <td className="font-semibold">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 md:w-12">
                        <img
                          src={cont.contributorImage}
                          alt={cont.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{cont.name}</p>
                    </div>
                  </div>
                </td>
                <td>{cont.title}</td>
                <td>{cont.category}</td>

                <td>{cont.PaidAmount} Tk</td>

                <td>{new Date(cont.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContributions;
