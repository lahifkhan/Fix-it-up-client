import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { auth } from "../Firebase/Firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const { createUser, updateUser, signWithGoogle, setUser, setloading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(displayName, photoURL, email, password);

    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    // regular expression
    if (!regEx.test(password)) {
      setError(
        "Password must include uppercase, lowercase, and be at least 6 chars."
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateUser(displayName, photoURL)
          .then(() => {
            console.log(res.user);
            toast.success("Accout created Successfully");
            setUser({ ...auth.currentUser });
            navigate("/");
            setloading(false);
          })
          .catch((err) => {
            console.log(err.message);
            toast.error(err.code);
          });
      })
      .catch((err) => {
        toast.error(err.code);
        console.log(err.message);
      });
  };

  const handleGoogleSign = () => {
    signWithGoogle()
      .then((res) => {
        toast.success("Accounts created Successfully");
        setUser(res.user);
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(err.code);
      });
  };
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-9">
        <div className="card-body">
          <h1 className="text-center font-bold text-xl text-primary">
            Sign Up Now
          </h1>
          <form onSubmit={handleFormSubmit}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input placeholder:text-gray-400"
                placeholder="Your Name"
                name="name"
                required
              />

              {/* photo */}
              <label className="label">Photo</label>
              <input
                type="text"
                className="input placeholder:text-gray-400"
                placeholder="Phot Url"
                name="photo"
                required
              />

              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input placeholder:text-gray-400"
                placeholder="Email"
                name="email"
              />

              {/* password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input placeholder:text-gray-400"
                  placeholder="Password"
                  name="password"
                />
                {error && <p className="text-red-400">{error}</p>}
                <button
                  onClick={handleShowPass}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button className="btn btn-secondary mt-4">Register</button>

              <div className="flex flex-col text-center space-y-2">
                <p className=" font-semibold text-accent">Or</p>
                <button
                  onClick={handleGoogleSign}
                  className="btn flex items-center gap-1 bg-black text-white"
                  type="button"
                >
                  {" "}
                  <FcGoogle size={24} />
                  Continue With Google
                </button>
              </div>
            </fieldset>
          </form>

          <p>
            Already have account?{" "}
            <Link className="text-blue-500" to={"/logIn"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
