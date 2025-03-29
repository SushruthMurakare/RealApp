import React from "react";

import { Heart, MessageCircle } from "lucide-react"; 

const PostCard = ({ post }) => {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg overflow-hidden border border-gray-200 bg-white">
      <div className="flex items-center p-4">
        <img
          src={post.profileImage || "https://via.placeholder.com/40"}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="ml-2 text-lg font-semibold">{post.username}</h2>
      </div>
      
      <div className="p-4">
        <p className="text-gray-800">{post.caption}</p>
      </div>

      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full h-56 object-cover"
      />

      <div className="flex items-center justify-between p-4 text-gray-600">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span>{post.likesCount} Likes</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-gray-500" />
          <span>{post.comments.length} Comments</span>
        </div>
      </div>

      <div className="p-4">
        <span className="text-sm text-gray-500">Real Score: {post.realScore}</span>
      </div>
    </div>
  );
};
export default PostCard;
