import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import useAxiosInstance from "../Hook/useAxiosInstance";
import { useNavigate, useParams } from "react-router";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import Loader from "../Components/Loader";
import PageNotFound from "../Components/PageNotFound";

const IssueDetails = () => {
  const [issue, setIssue] = useState({});
  const [contributions, setContributions] = useState([]);
  const axiosInstance = useAxiosInstance();
  const [refetch, setRefetch] = useState(false);
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  const modalRef = useRef();
  const { user } = useAuth();
  //   console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    setloading(true);
    axiosInstance
      .get(`/issues/${id}`)
      .then((data) => {
        setIssue(data.data);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.error(err);

        if (err.response?.status === 404 || err.response?.status === 400) {
          toast.error("Invalid or missing issue!");
          navigate("/pageNotFound");
        }
      });
  }, [id, axiosInstance, navigate]);

  const handleModal = () => {
    modalRef.current.showModal();
  };

  useEffect(() => {
    setloading(true);
    axiosInstance.get(`/issueContribution/${id}`).then((data) => {
      setloading(false);
      console.log(data.data);
      setContributions(data.data);
    });
  }, [axiosInstance, id, refetch]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setloading(true);
    const title = e.target.title.value;
    const PaidAmount = e.target.amount.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const adress = e.target.adress.value;
    const date = new Date();
    const issueId = issue._id;
    const category = issue.category;
    const contributorImage = user.photoURL;

    console.log({
      title,
      PaidAmount,
      name,
      email,
      phone,
      adress,
      date,
      issueId,
      category,
      contributorImage,
    });

    const newContribution = {
      title,
      PaidAmount,
      name,
      email,
      phone,
      adress,
      date,
      issueId,
      category,
      contributorImage,
    };

    axiosInstance.post("/contribute", newContribution).then((data) => {
      //   console.log(data.data);
      setloading(false);
      if (data.data.insertedId) {
        toast.success("Thanks for your contribution");
        setRefetch(!refetch);
        modalRef.current.close();
      }
    });
  };
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="w-11/12 mx-auto grid grid-cols-11 gap-5 my-8">
        <div className="left col-span-full md:col-span-8 space-y-5">
          <div className="">
            <div>
              <h1 className="text-3xl font-bold text-primary">{issue.title}</h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <p className=" border-r-2  pr-3">
              <span className="text-zinc-500"> Created By</span> <br />{" "}
              <span className="text-primary font-semibold">{issue.email}</span>
            </p>
            <p className="border-r-2  pr-3">
              <span className="text-zinc-500"> Category </span>
              <br />{" "}
              <span className="text-primary font-semibold">
                {issue.category}
              </span>
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
            <span className="text-zinc-500">{issue.location}</span>
          </p>

          <p className="p-2 flex items-center gap-2">
            <MdOutlineDateRange className="text-primary" />
            <span className="text-primary font-semibold">Date:</span>{" "}
            <span className="text-zinc-500">
              {new Date(issue.date).toLocaleString()}
            </span>
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
              <p className="font-bold text-primary">{issue.amount} Tk</p>
              <p className="text-zinc-500">Needed</p>
            </div>

            <div className="text-center mt-6">
              <button onClick={handleModal} className="btn btn-primary">
                Pay Clean-Up Contribution
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto my-4">
        <h1 className="text-xl font-bold text-primary mb-3">Contribution</h1>
        {contributions.length ? (
          <div className="overflow-x-auto shadow-lg bg-base-100  rounded-2xl">
            <table className="table table-zebra">
              {/* head of tables */}
              <thead className=" text-white bg-primary text-sm">
                <tr>
                  <th>SL No.</th>
                  <th>Contributor</th>
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
                              referrerPolicy="no-referrer"
                              src={cont.contributorImage}
                              alt={cont.name}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">{cont.name}</p>
                        </div>
                      </div>
                    </td>

                    <td>{cont.PaidAmount} Tk</td>
                    <td>{new Date(cont.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-xl text-center font-semibold">
            No Contributions Yet!
          </h1>
        )}
      </div>

      {/* modal */}
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* title */}
            <div>
              <label className="label font-medium">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={issue?.title}
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter the title of issue"
              />
            </div>

            {/* Category Dropdown */}
            {/* <div>
              <label className="label font-medium">Category</label>
              <select
                name="category"
                defaultValue={issue?.category}
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
            </div> */}

            {/* Description Textarea */}
            {/* <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                defaultValue={issue.description}
                rows="2"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 "
                placeholder="Enter description"
              ></textarea>
            </div> */}

            {/* ammount to fix issue */}
            <div>
              <label className="label font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Tk"
              />
            </div>

            {/* contributor name */}
            <div>
              <label className="label font-medium">Contributor Name</label>
              <input
                type="text"
                name="name"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                defaultValue={user.displayName}
              />
            </div>

            {/* contrubutor email */}

            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                defaultValue={user.email}
              />
            </div>
            {/* contributor phone number */}
            <div>
              <label className="label font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              />
            </div>
            {/* Adress */}
            <div>
              <label className="label font-medium">Adress</label>
              <input
                type="text"
                name="adress"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full btn-primary"
            >
              Save
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

export default IssueDetails;
