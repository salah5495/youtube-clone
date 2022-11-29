import React from "react";

const TopicBtn = ({ topic }) => {
  return (
    <div className="bg-gray-100 hover:bg-gray-500 hover:text-white rounded-full ">
      <p className="py-1 px-3">{topic}</p>
    </div>
  );
};

export default TopicBtn;
