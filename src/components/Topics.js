import React from "react";
import TopicBtn from "./TopicBtn";

const Topics = () => {
  const topics = [
    "Trending",
    "Sports",
    "Cars",
    "Music",
    "Football",
    "Stand Up",
    "Pranks",
    "Cartoons",
  ];
  return (
    <div className="flex flex-wrap items-center gap-4 px-5 lg:px-6 pt-2">
      {topics.map((topic) => (
        <TopicBtn topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
