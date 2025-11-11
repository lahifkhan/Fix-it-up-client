import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import iconImg from "../assets/Region.png";
import toast from "react-hot-toast";
import NavbarLoading from "./NavbarLoading";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "  border-b-2 border-b-primary" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "  border-b-2 border-b-primary" : ""
          }
          to={"/allIssue"}
        >
          All Issues
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/addIssues"
              className={({ isActive }) =>
                isActive ? "  border-b-2 border-b-primary" : ""
              }
            >
              Add Issues
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "  border-b-2 border-b-primary" : ""
              }
              to={"/myIssue"}
            >
              My Issues
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "  border-b-2 border-b-primary" : ""
              }
              to={"/myContribution"}
            >
              My Contribution
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("signOut successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  if (loading) {
    return <NavbarLoading></NavbarLoading>;
  }

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
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="rounded-full w-8 h-8 m-1"
            >
              <img
                referrerPolicy="no-referrer"
                className="rounded-full"
                src={user.photoURL}
                alt=""
              />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
            >
              <div className="card-body">
                <p className="text-primary font-semibold">{user.email}</p>
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />
                <button
                  onClick={handleSignOut}
                  className="btn object-contain btn-primary"
                >
                  SignOut
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to={"/login"} className="btn btn-primary">
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
