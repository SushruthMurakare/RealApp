import { useState } from "react";
import BehindTheScenes from "./TypesOfPost/BehindTheScenes";
import TruthAboutTrends from "./TypesOfPost/TruthAboutTrends";
import Timeline from "./TypesOfPost/Timeline";
import NewPostScreen from "./TypesOfPost/NewPost";

const NewPost = ({ typeOfPost }) => {
  return (
    <>
      {typeOfPost === "Behind the scenes" ? (
        <BehindTheScenes typeOfPost={typeOfPost} />
      ) : typeOfPost === "Truth about Trends" ? (
        <TruthAboutTrends typeOfPost={typeOfPost} />
      ) : typeOfPost === "Timeline" ? (
        <Timeline typeOfPost={typeOfPost} />
      ) : (
        <NewPostScreen />
      )}
    </>
  );
};

export default NewPost;
