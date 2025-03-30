import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import user from "../../data/user.json";
import ProfilePostsGrid from "./icons/ProfilePostsGrid";

const AccountPage = ({ goal, setCurrPage }) => {
  console.log(goal);
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-gray-50">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-25 h-25 m-2 rounded-full flex-shrink-0 object-cover border-4 border-gray-300"
        />
        <div className="text-center mb-3">
          <h1 className="text-2xl font-semibold text-gray-800">{user?.name}</h1>
          <p className="text-lg text-gray-500 mb-1">{user?.username}</p>
          <p className="text-sm text-gray-600">Real Score: {user?.realScore}</p>
        </div>

        <div className="flex gap-6">
          <FaFacebook className="w-8 h-8 text-blue-600 cursor-pointer hover:text-blue-800" />
          <FaInstagram className="w-8 h-8 text-pink-600 cursor-pointer hover:text-pink-800" />
          <FaTwitter className="w-8 h-8 text-blue-400 cursor-pointer hover:text-blue-600" />
          <FaGithub className="w-8 h-8 text-gray-800 cursor-pointer hover:text-black" />
        </div>

        <div className="py-3 px-5 w-full">
          <h2 className="w-full mb-1">Ongoing Goals:</h2>
          <div className="flex gap-2 mb-2" onClick={() => setCurrPage(2.5)}>
            <h3 className="text-xs flex-shrink-0">Getting in Shape:</h3>
            <input type="range" value="70" className="w-full timeline"></input>
          </div>
          <div className="flex gap-15">
            <h3 className="text-xs flex-shrink-0">Goal #2:</h3>
            <input type="range" value="20" className="w-full timeline"></input>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto m-3">
          {Array.from({ length: 12 }, (_, index) => (
            <ProfilePostsGrid key={index} />
          ))}
        </div>
      </div>
      <div
        className={
          "absolute top-0 right-[50vw] transition w-100vw h-100" +
          (goal ? " translate-x-[-100vw]" : "")
        }
      >
        test
      </div>
    </>
  );
};

export default AccountPage;
