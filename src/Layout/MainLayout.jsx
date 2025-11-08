import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Banner from "../Components/Banner";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
