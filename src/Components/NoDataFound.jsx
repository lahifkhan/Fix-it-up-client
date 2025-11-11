import React from "react";

const NoDataFound = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center min-h-[80vh] ">
      <div className="bg-base-100 shadow-2xl rounded-2xl p-4 flex flex-col items-center">
        <img
          src="https://i.ibb.co.com/ZpSmZ94F/9276421.jpg"
          alt="No Data Found"
          className="w-48 md:w-64 mb-4  h-auto object-contain rounded-xl"
        />
        <div className="text-center">
          <h1 className="text-xl font-semibold  ">No Data Found</h1>
          <p className="text-secondary">
            It looks like there's nothing to show here right now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoDataFound;
