import React from "react";

const NavbarLoading = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm animate-pulse">
        {/* logo */}
        <div className="navbar-start flex items-center gap-3">
          <div className="skeleton  w-8 h-8 rounded-full"></div>
          <div className="skeleton h-4  rounded w-24"></div>
        </div>
        {/* bars */}
        <div className="navbar-center hidden lg:flex gap-6">
          <div className="skeleton h-4 w-12 rounded"></div>
          <div className="skeleton w-16 rounded h-4 "></div>
          <div className="skeleton w-20 rounded h-4"></div>
          <div className="skeleton h-4 rounded w-14 "></div>
        </div>
        {/* profile */}
        <div className="navbar-end  flex gap-3 items-center ">
          <div className="skeleton h-8 w-8 rounded-full"></div>
          <div className="skeleton w-20 rounded-md  h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLoading;
