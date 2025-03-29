import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import user from "../../data/user.json";
import ProfilePostsGrid from "./icons/ProfilePostsGrid";

const AccountPage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-50">
      <div className="mb-6">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-25 h-25 rounded-full object-cover border-4 border-gray-300"
        />
      </div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">{user?.name}</h1>
        <p className="text-lg text-gray-500">{user?.username}</p>
        <p className="text-sm text-gray-600 mt-2">
          Real Score: {user?.realScore}
        </p>
      </div>

      <div className="flex gap-6">
        <FaFacebook className="w-8 h-8 text-blue-600 cursor-pointer hover:text-blue-800" />
        <FaInstagram className="w-8 h-8 text-pink-600 cursor-pointer hover:text-pink-800" />
        <FaTwitter className="w-8 h-8 text-blue-400 cursor-pointer hover:text-blue-600" />
        <FaGithub className="w-8 h-8 text-gray-800 cursor-pointer hover:text-black" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto m-3">
        {Array.from({ length: 12 }, (_, index) => (
          <ProfilePostsGrid key={index} />
        ))}
      </div>
    </div>
  );
};

export default AccountPage;
