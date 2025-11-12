import React from "react";
import Hero from "../Components/Hero";
import CategoryCard from "../Components/CategoryCard";
import garbageIcon from "../assets/icons8-garbage-64.png";
import constructionIcon from "../assets/icons8-construction-50.png";
import propertyIcon from "../assets/icons8-property-64.png";
import roadIcon from "../assets/icons8-road-64.png";
import Banner from "../Components/Banner";
import IssueCard from "../Components/IssueCard";
import LatestIssue from "./LatestIssue";
import useDynamicTitle from "../Hook/useDynamicTitle";
import CommunityStats from "../Components/CommunityStats";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Garbage",
      description: "Report garbage buildup in your neighborhood.",
      // optionally add an icon or image path
      icon: garbageIcon,
    },
    {
      id: 2,
      title: "Illegal Construction",
      description: "Report unauthorized construction activities.",
      icon: constructionIcon,
    },
    {
      id: 3,
      title: "Broken Public Property",
      description: "Report damaged public facilities or infrastructure.",
      icon: propertyIcon,
    },
    {
      id: 4,
      title: "Road Damage",
      description: "Report potholes, cracks, or damaged roads.",
      icon: roadIcon,
    },
  ];

  useDynamicTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Hero></Hero>
      </div>

      <div className="mt-20 mb-8">
        <h1 className="text-2xl font-bold md:text-3xl text-center text-primary">
          Category
        </h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  items-center mt-8 gap-8 justify-around">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat}></CategoryCard>
          ))}
        </div>
      </div>

      <LatestIssue></LatestIssue>

      <CommunityStats></CommunityStats>
    </div>
  );
};

export default Home;
