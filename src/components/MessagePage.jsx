import React from 'react';

const MessagePage = () => {
  // Example list of users, their messages, and image URLs
  const usersMessages = [
    { username: "Elon Musk", message: "Hey! How's it going?", imageUrl: "../../data/profiles/Elon.png" },
    { username: "Mark Zukerberg", message: "Let me know if you need help with the project!", imageUrl: "../../data/profiles/Mark.png" },
    { username: "Neal Mohan", message: "Just wanted to check in on how you're doing.", imageUrl: "../../data/profiles/Mohan.png" },
    { username: "Sudar Pichai", message: "Are we still on for the meeting tomorrow?", imageUrl: "../../data/profiles/Sundar.png" }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages</h2>

      {/* Loop through users and display their messages */}
      <div className="space-y-4">
        {usersMessages.map((user, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <div className="flex items-center mb-2">
              {/* User image */}
              <img src={user.imageUrl} alt={user.username} className="w-10 h-10 rounded-full mr-4" />
              <div className="flex justify-between items-center w-full">
                <span className="font-medium text-gray-800">{user.username}</span>
                <span className="text-sm text-gray-500">Just now</span>
              </div>
            </div>
            <p className="text-gray-700">{user.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagePage;
