import React from "react";

const CategoryCard = ({ cat }) => {
  return (
    <div className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden h-full">
      <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-6 left-7 text-white text-2xl">{cat.id}</p>
      </div>
      <div className="fill-violet-500 w-12">
        <img src={cat.icon} alt="" />
      </div>
      <h1 className="font-bold text-xl">{cat.title}</h1>
      <p className="text-secondary leading-6">{cat.description}</p>
    </div>
  );
};

export default CategoryCard;
