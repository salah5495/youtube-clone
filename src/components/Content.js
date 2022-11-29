import React from "react";
import profile from "../assets/profile.avif";
import thumbnail from "../assets/thumbnail.jpg";
import ContentCard from "./ContentCard";

const Content = () => {
  const videos = [
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022  ",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
  ];
  return (
    <div className="px-5 lg:px-6 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    gap-4">
      {videos.map((video) => (
        <ContentCard
          photo={video.photo}
          title={video.title}
          profile={video.profile}
        />
      ))}
    </div>
  );
};

export default Content;
