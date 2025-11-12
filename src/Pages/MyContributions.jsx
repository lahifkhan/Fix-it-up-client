import React, { useEffect, useState } from "react";
import useAxiosInstance from "../Hook/useAxiosInstance";
import useAuth from "../Hook/useAuth";
import Loader from "../Components/Loader";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import NoDataFound from "../Components/NoDataFound";
import useDynamicTitle from "../Hook/useDynamicTitle";

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

  const exportToPdf = () => {
    if (contributions.length === 0) return;
    const doc = new jsPDF();
    const tableCol = [
      "SL No.",
      "Contributor",
      "Title",
      "Category",
      "Amount",
      "Date",
    ];

    const tableRow = contributions.map((cont, index) => [
      index + 1,
      cont.name,
      cont.title,
      cont.category,
      `${cont.PaidAmount} Tk`,
      new Date(cont.date).toLocaleDateString(),
    ]);

    autoTable(doc, {
      head: [tableCol],
      body: tableRow,
    });

    doc.save("my_contributions.pdf");
  };

  useDynamicTitle("My Contribution");

  if (loading) {
    return <Loader></Loader>;
  }
  if (contributions.length === 0) {
    return <NoDataFound></NoDataFound>;
  }
  return (
    <div className="w-11/12 mx-auto mt-8 mb-10">
      <h1 className="text-2xl md:text-3xl text-center text-primary font-bold  mb-6">
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
      <div className="flex justify-center mt-2">
        <button onClick={exportToPdf} className="btn btn-primary ">
          Download As Pdf
        </button>
      </div>
    </div>
  );
};

export default MyContributions;
