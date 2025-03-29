import React, { useState } from "react";

import { Heart, MessageCircle, ThumbsDown } from "lucide-react";
import viewGoal from "../functions/viewGoal";

const PostCard = ({ post }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLikeClick = () => {
    setShowPopup(!showPopup);
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
          <input type="range" value="70" className="w-full timeline"></input>
        )}
        <p className="text-gray-800 text-sm mb-2">{post.caption}</p>
        {post.type === "regular" && (
          <div className="p-1 bg-blue-500 text-white rounded-lg inline-block">
            <a href="https://www.instagram.com/p/DHwCk7jRSyp/?utm_source=ig_web_copy_link">
              Actual Post
            </a>
          </div>
        )}
      </div>
      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full h-56 object-cover"
      />

      <div className="flex items-center justify-between p-4 text-gray-600">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" onClick={handleLikeClick} />
          <span>{post.likesCount} Likes</span>
        </div>
        <div className="flex items-center gap-2">
          <ThumbsDown className="w-5 h-5 text-red-500" />
          <span>{post.likesCount} Fake</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-gray-500" />
          <span>{post.comments.length} Comments</span>
          {showPopup && (
            <div className="absolute left-0 bottom-10 bg-white p-2 rounded-lg shadow-lg w-40 text-center">
              <ul
                onClick={() => setShowPopup(!showPopup)}
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
