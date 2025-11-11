import React, { useEffect, useRef, useState } from "react";
import useAxiosInstance from "../Hook/useAxiosInstance";
import useAuth from "../Hook/useAuth";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const MyIssue = () => {
  const [issues, setIssues] = useState([]);
  const axiosInstance = useAxiosInstance();
  const [selectedIssue, setSelectedIssue] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [loading, setloading] = useState(false);
  const modalRef = useRef();
  const { user } = useAuth();

  useEffect(() => {
    setloading(true);
    axiosInstance.get(`/issues?email=${user.email}`).then((data) => {
      console.log(data.data);
      setIssues(data.data);
      setloading(false);
    });
  }, [refetch, user.email, axiosInstance]);

  const handleOpenUpdateModal = (issue) => {
    modalRef.current.showModal();
    setSelectedIssue(issue);
  };

  const handleUpdate = (e) => {
    setloading(true);
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;

    const description = e.target.description.value;

    const amount = Number(e.target.amount.value);

    const status = e.target.status.value;
    console.log({
      title,
      category,
      description,
      amount,
      status,
    });
    const newIssue = {
      title,
      category,
      description,
      amount,
      status,
    };

    axiosInstance.put(`/issues/${selectedIssue._id}`, newIssue).then((data) => {
      console.log(data.data);

      setRefetch(!refetch);
      if (data.data.modifiedCount) {
        setloading(false);
        Swal.fire({
          title: "Successfully Updated",
          icon: "success",
          draggable: true,
        });
        modalRef.current.close();
      }
    });
  };

  const handleIssueDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/issues/${id}`).then((data) => {
          console.log(data.data);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setRefetch(!refetch);
        });
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-11/12 mx-auto mt-8 mb-10">
      <h1 className="text-4xl text-center font-bold  mb-6">
        My Issues{" "}
        <span className="text-gradient-primary">({issues.length})</span>
      </h1>

      <div className="overflow-x-auto shadow-lg bg-base-100  rounded-2xl">
        <table className="table table-zebra">
          {/* head of tables */}
          <thead className=" text-white bg-primary text-sm">
            <tr>
              <th>SL No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {issues.map((issue, index) => (
              <tr key={issue._id} className="hover:bg-base-300">
                <td className="font-semibold">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 md:w-12">
                        <img
                          src={issue.image}
                          alt={issue.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{issue.title}</p>
                      <p className="text-xs  truncate md:w-40 text-secondary">
                        {issue.description.slice(0, 40)}...
                      </p>
                    </div>
                  </div>
                </td>
                <td>{issue.category}</td>
                <td>{issue.location}</td>
                <td>{issue.amount} Tk</td>
                <td>
                  {issue.status === "ongoing" ? (
                    <div className="badge badge-warning">{issue.status}</div>
                  ) : (
                    <div className="badge badge-success">{issue.status}</div>
                  )}
                </td>
                <td>{new Date(issue.date).toLocaleDateString()}</td>
                <td>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleOpenUpdateModal(issue)}
                      className="btn btn-xs"
                    >
                      <FaEdit />
                      Update
                    </button>
                    <button
                      onClick={() => handleIssueDelete(issue._id)}
                      className="btn btn-error btn-xs  text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modla */}
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              {/* title */}
              <div>
                <label className="label font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedIssue?.title}
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Enter the title of issue"
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="label font-medium">Category</label>
                <select
                  name="category"
                  defaultValue={selectedIssue?.category}
                  className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Garbage">Garbage</option>
                  <option value="Illegal Construction">
                    Illegal Construction
                  </option>
                  <option value="Broken Public Property">
                    Broken Public Property
                  </option>
                  <option value="Road Damage">Road Damage</option>
                </select>
              </div>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                defaultValue={selectedIssue.description}
                rows="2"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 "
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* ammount to fix issue */}
            <div>
              <label className="label font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                defaultValue={selectedIssue?.amount}
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Tk"
              />
            </div>

            {/* status */}
            <div>
              <label className="label font-medium">Status</label>
              <select
                name="status"
                defaultValue={selectedIssue?.status}
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="ongoing">Ongoing</option>
                <option value="ended">Ended</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full btn-primary"
            >
              Update
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyIssue;
