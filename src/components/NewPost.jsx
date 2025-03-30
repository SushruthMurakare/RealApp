import { useState } from "react";

const NewPost = ({ typeOfPost }) => {
  const [postUrl, setPostUrl] = useState("");
  const [behindTheScenes, setBehindTheScenes] = useState("");
  const [realScore, setRealScore] = useState(50);
  const [taggedPeople, setTaggedPeople] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">{typeOfPost}</h2>

      <label className="block text-gray-600 font-medium">Provide the URL to the actual post</label>
      <input 
        type="text" 
        value={postUrl} 
        onChange={(e) => setPostUrl(e.target.value)} 
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />

      <label className="block text-gray-600 font-medium">Write about what actually happened behind the scenes</label>
      <textarea 
        value={behindTheScenes} 
        onChange={(e) => setBehindTheScenes(e.target.value)} 
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
        rows="3"
      />

      <label className="block text-gray-600 font-medium">Upload Image</label>
      <input type="file" className="w-full p-2 border rounded-md" />

      <label className="block text-gray-600 font-medium">How much real score would you like to provide?</label>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={realScore} 
        onChange={(e) => setRealScore(e.target.value)} 
        className="w-full" 
      />
      <p className="text-sm text-gray-500">Selected Score: {realScore}</p>

      <p className="text-xs text-red-500">
        Disclaimer: If the real score you provide is greater than the overall average real score this post gets, your post will gradually start to fade away from your followers' feed.
      </p>

      <label className="block text-gray-600 font-medium">Tag People</label>
      <input 
        type="text" 
        value={taggedPeople} 
        onChange={(e) => setTaggedPeople(e.target.value)} 
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Enter usernames separated by commas"
      />

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
        Post
      </button>
    </div>
  );
};

export default NewPost;
