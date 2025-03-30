import React, { useState } from "react";

import { Heart, MessageCircle, ThumbsDown } from "lucide-react";
import viewGoal from "../functions/viewGoal";

const PostCard = ({ post }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [a, setA] = useState(0);

  const handleLikeClick = () => {
    setShowPopup(!showPopup);
  };

  const stateUpdate = () => {
    setA(a + 1);
  };

  // const realScoreUpdate = async (userId, like) => {
  //   try {
  //     await fetch("http://localhost:3000/posts/like", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ userId: userId, like: like }),
  //     });
  //   } catch (err) {
  //     console.error("Error:", error);
  //     alert("Failed to like post");
  //   }
  // };

  const realScoreUpdate = async (userId, like) => {
    if (like) {
      post.realScore += 1;
    } else {
      post.realScore -= 1;
      stateUpdate();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg overflow-hidden border border-gray-200 bg-white">
      <div className="p-3">
        <div className="flex items-center mb-1">
          <img
            src={post.userProfileUrl}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <h2 className="ml-2 text-sm font-semibold">{post.username}</h2>
          {post.type === "timeline" && (
            <p className="text-sm font-light ml-1">
              made progress on{" "}
              <a
                onClick={() => viewGoal.f()}
                className="text-blue-700 underline"
              >
                a goal!
              </a>
            </p>
          )}
        </div>
        {post.type === "timeline" && (
          <>
            <input
              type="range"
              value="70"
              readOnly
              className="w-full timeline"
            ></input>
            <div className="flex justify-between font-light text-xs mt-[-10px] mb-2">
              <p>January</p>
              <p>May</p>
            </div>
          </>
        )}
        <p className="text-gray-800 text-sm">{post.caption}</p>
        {post.type === "regular" && (
          <div className="p-1 bg-blue-500 text-white rounded-lg mt-2 inline-block">
            <a href="https://www.instagram.com/p/DHv0RV4KjTJ/" target="_blank" rel="noopener noreferrer">
              Actual Post
            </a>
          </div>
        )}
      </div>
      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full h-100 object-cover"
      />

      <div className="flex items-center justify-between p-4 text-gray-600">
        <div className="flex items-center gap-2 relative">
          {showPopup && (
            <div className="absolute bottom-full left-0 bg-white p-2 rounded-lg shadow-lg w-40 text-center">
              <ul
                onClick={() => {
                  setShowPopup(!showPopup);
                  realScoreUpdate(post.userId, true);
                }}
                className="space-y-2"
              >
                <li className="cursor-pointer text-gray-600 hover:text-gray-900">
                  Respect
                </li>
                <li className="cursor-pointer text-gray-600 hover:text-gray-900">
                  Relatable
                </li>
                <li className="cursor-pointer text-gray-600 hover:text-gray-900">
                  Proud
                </li>
                <li className="cursor-pointer text-gray-600 hover:text-gray-900">
                  Eye Opening
                </li>
                <li className="cursor-pointer text-gray-600 hover:text-gray-900">
                  Real
                </li>
              </ul>
            </div>
          )}
          <Heart className="w-5 h-5 text-red-500" onClick={handleLikeClick} />
          <span>{post.likesCount} Likes</span>
        </div>

        <div className="flex items-center gap-2">
          <ThumbsDown
            className="w-5 h-5 text-red-500"
            onClick={() => {
              realScoreUpdate(post.userId, false);
            }}
          />
          <span>{post.likesCount} Fake</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-gray-500" />
          <span>{post.comments.length} Comments</span>
        </div>
      </div>

      <div className="p-4">
        <span className="text-sm text-gray-500">
          Real Score: {post.realScore}
        </span>
      </div>
    </div>
  );
};
export default PostCard;
