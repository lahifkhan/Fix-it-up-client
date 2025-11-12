import React from "react";
import img404 from "../assets/vecteezy_404-landing-page_6549647.jpg";

const PageNotFound = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center min-h-[80vh] ">
      <div className="bg-base-100 shadow-2xl rounded-2xl p-4 flex flex-col items-center">
        <img
          src={img404}
          alt="Page Not Found"
          className="w-64 md:w-2xl mb-4  h-auto object-contain rounded-xl"
        />
        <div className="text-center">
          <h1 className="text-xl font-bold  ">Page Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
