import React, { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import iconImg from "../assets/Region.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allProducts"}>All Issues</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/myBids"}>Add Issues</NavLink>
          </li>
          <li>
            <NavLink to={"/myBids"}>My Issues</NavLink>
          </li>
          <li>
            <NavLink to={"/myProducts"}>My Contribution</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("signOut successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={iconImg} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <div className="space-x-2">
            <Link to={"/logIn"} className="btn btn-primary">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-primary">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
