import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaArrowLeft,
} from "react-icons/fa";
import user from "../../data/user.json";

const AccountPage = ({ goal, setCurrPage }) => {
  return (
    <>
      <div className="overflow-hidden bg-gray-150">
        <div className="p-2 flex flex-col items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-25 h-25 m-1 rounded-full flex-shrink-0 object-cover border-4 border-gray-300"
          />
          <div className="text-center mb-3">
            <h1 className="text-2xl font-semibold text-gray-800">
              {user?.name}
            </h1>
            <p className="text-lg text-gray-500 mb-1">{user?.username}</p>
            <p className="text-sm text-gray-600">
              Real Score: {user?.realScore}
            </p>
          </div>

          <div className="flex gap-6 mb-2">
            <FaFacebook className="w-8 h-8 text-blue-600 cursor-pointer hover:text-blue-800" />
            <FaInstagram className="w-8 h-8 text-pink-600 cursor-pointer hover:text-pink-800" />
            <FaTwitter className="w-8 h-8 text-blue-400 cursor-pointer hover:text-blue-600" />
            <FaGithub className="w-8 h-8 text-gray-800 cursor-pointer hover:text-black" />
          </div>

          <div className="p-3 pt-2 w-full bg-gray-50 border-[1px] border-gray-300 rounded-md">
            <h2 className="w-full mb-1">Ongoing Goals:</h2>
            <div
              className="flex gap-2 mb-2 justify-end"
              onClick={() => setCurrPage(2.5)}
            >
              <h3 className="text-xs">Getting in Shape:</h3>
              <input
                type="range"
                value="70"
                readOnly
                className="w-[50vw] timeline flex-shrink-0"
              ></input>
            </div>
            <div className="flex gap-2 justify-end">
              <h3 className="text-xs text-nowrap">Completing a Course:</h3>
              <input
                type="range"
                value="20"
                readOnly
                className="w-[50vw] timeline flex-shrink-0"
              ></input>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 gap-1 w-full">
          {user.posts.map((url) => (
            <img src={url} className="w-full h-36 object-cover"></img>
          ))}
        </div>
      </div>

      {/* Goal side page thingy */}
      <div
        onScroll={(e) => e.preventDefault()}
        className={
          "fixed top-0 left-[100vw] transition w-dvw h-[calc(100vh-56px)] flex flex-col gap-2 overflow-hidden bg-gray-100 p-4" +
          (goal ? " [transform:translate(-100vw)]" : "")
        }
      >
        <div className="flex items-center gap-1">
          <div onClick={() => setCurrPage(2)} className="w-10 h-10 p-2">
            <FaArrowLeft className="w-full h-full" />
          </div>
          <img
            src={user.profileImage}
            className="w-9 h-9 rounded-full flex-shrink-0 object-cover border-4 border-gray-300"
          />
          <h1 className="text-xl font-semibold">Getting in Shape:</h1>
        </div>
        <div className="h-full w-full overflow-y-auto flex-grow p-2">
          <div className="w-full h-36 flex items-center justify-end">
            <p className="text-xs font-light">March 28, 2025</p>
            <svg className="h-full mx-8 flex-shrink-0" viewBox="0 0 4 24">
              <circle cx="2" cy="12" r="1.5" fill="#63cbeb"></circle>
              <line
                stroke="#63cbeb"
                strokeWidth="1"
                x1="2"
                y1="12"
                x2="2"
                y2="24"
              />
            </svg>
            <img
              src="data/pictures/workout1.png"
              className="h-32 w-32 object-cover flex-shrink-0 rounded-md"
            ></img>
          </div>
          <div className="w-full h-36 flex items-center justify-end">
            <p className="text-xs font-light">March 12, 2025</p>
            <svg className="h-full mx-8 flex-shrink-0" viewBox="0 0 4 24">
              <circle cx="2" cy="12" r="1.5" fill="#63cbeb"></circle>
              <line
                stroke="#63cbeb"
                strokeWidth="1"
                x1="2"
                y1="0"
                x2="2"
                y2="24"
              />
            </svg>
            <img
              src="data/pictures/workout2.png"
              className="h-32 w-32 object-cover flex-shrink-0 rounded-md"
            ></img>
          </div>
          <div className="w-full h-36 flex items-center justify-end">
            <p className="text-xs font-light">March 9, 2025</p>
            <svg className="h-full mx-8 flex-shrink-0" viewBox="0 0 4 24">
              <circle cx="2" cy="12" r="1.5" fill="#63cbeb"></circle>
              <line
                stroke="#63cbeb"
                strokeWidth="1"
                x1="2"
                y1="0"
                x2="2"
                y2="24"
              />
            </svg>
            <img
              src="data/pictures/workout3.png"
              className="h-32 w-32 object-cover flex-shrink-0 rounded-md"
            ></img>
          </div>
          <div className="w-full h-36 flex items-center justify-end">
            <p className="text-xs font-light">February 27, 2025</p>
            <svg className="h-full mx-8 flex-shrink-0" viewBox="0 0 4 24">
              <circle cx="2" cy="12" r="1.5" fill="#63cbeb"></circle>
              <line
                stroke="#63cbeb"
                strokeWidth="1"
                x1="2"
                y1="0"
                x2="2"
                y2="24"
              />
            </svg>
            <img
              src="data/pictures/workout4.png"
              className="h-32 w-32 object-cover flex-shrink-0 rounded-md"
            ></img>
          </div>
          <div className="w-full h-36 flex items-center justify-end">
            <p className="text-xs font-light">February 20, 2025</p>
            <svg className="h-full mx-8 flex-shrink-0" viewBox="0 0 4 24">
              <circle cx="2" cy="12" r="1.5" fill="#63cbeb"></circle>
              <line
                stroke="#63cbeb"
                strokeWidth="1"
                x1="2"
                y1="0"
                x2="2"
                y2="12"
              />
            </svg>
            <img
              src="data/pictures/workout5.png"
              className="h-32 w-32 object-cover flex-shrink-0 rounded-md"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
