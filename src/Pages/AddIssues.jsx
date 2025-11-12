import { useState } from "react";
import useAuth from "../Hook/useAuth";
import useAxiosInstance from "../Hook/useAxiosInstance";
import toast from "react-hot-toast";
import Loader from "../Components/Loader";
import useDynamicTitle from "../Hook/useDynamicTitle";

const AddIssues = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosInstance();
  const [loading, setloading] = useState(false);
  console.log(user);
  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const amount = Number(e.target.amount.value);
    const email = e.target.email.value;
    const date = new Date();
    const status = "ongoing";
    console.log({
      title,
      category,
      location,
      description,
      image,
      amount,
      email,
      date,
      status,
    });
    const newIssue = {
      title,
      category,
      location,
      description,
      image,
      amount,
      email,
      date,
      status,
    };

    axiosInstance.post("/issues", newIssue).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        setloading(false);
        toast.success("Issue added successfully");
      }
    });
  };
  useDynamicTitle("Add Issue");

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl my-6">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">
            Add New Issue
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* title */}
              <div>
                <label className="label font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Enter the title of issue"
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="label font-medium">Category</label>
                <select
                  name="category"
                  required
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
            {/* location */}
            <div>
              <label className="label font-medium">Location</label>
              <input
                type="text"
                name="location"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter location of issues"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="2"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 "
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="flex gap-1">
              {/* image of issue */}
              <div>
                <label className="label font-medium">Image</label>
                <input
                  type="url"
                  name="image"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="https://image.com/image.png"
                />
              </div>

              {/* ammount to fix issue */}
              <div className="flex-1">
                <label className="label font-medium">Amount</label>
                <input
                  type="number"
                  name="amount"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Tk"
                />
              </div>
            </div>
            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={`${user.email}`}
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full btn-primary"
            >
              Add Issue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIssues;
