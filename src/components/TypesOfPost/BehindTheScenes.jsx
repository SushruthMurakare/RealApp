import { useState, onChange } from "react";
import { PhotoshopDetection } from "../PhotoshopDetection";
// import fs from "fs";
// import path from "path";
const BehindTheScenes = ({typeOfPost, addPost}) => {
const [actualPostUrl, setPostUrl] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [taggedPeople, setTaggedPeople] = useState("");
const [base64Image, setBase64Image] = useState(""); 
  
// Handle post creation (this is the function used when the "Post" button is clicked)
const handlePostCreation = () => {
  console.log("Post created with:");
  console.log("Actual Post URL:", actualPostUrl);
  console.log("Description:", description);
  console.log("Image (Base64):", base64Image);
  console.log("Tagged People:", taggedPeople);
  console.log({actualPostUrl,description, image, taggedPeople })
  addPost({userProfileUrl: 'data/pictures/friendship.jpg', type: '', username: 'Lena_Young', instaLink: actualPostUrl, caption: description, imageUrl: `data/pictures/${image.name}`, userProfileUrl : `data/pictures/${image.name}`,  userId : 1, realScore: 0, comments :[{},{},{}]})
  createPost(actualPostUrl, description, base64Image, taggedPeople);
};

const encodeImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // Remove `data:image/...;base64,` prefix
    reader.onerror = (error) => reject(error);
  });
};

const handleImageChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    setImage(file);
    try {
      const base64 = await encodeImageToBase64(file);
      setBase64Image(base64);
    } catch (error) {
      console.error("Error encoding image:", error);
    }
  }
};

// Function that creates the post and checks if the image is edited with Photoshop
function createPost(actualPostUrl, description, image, taggedPeople) {
  if (!actualPostUrl || !description || !image) {
    console.log("Error: All fields must be filled.");
    return;
  }
  const imageUrl = `data:image/jpeg;base64,${image}`;

  console.log("Post created with the following data:");
  console.log("Actual Post URL:", actualPostUrl);
  console.log("Description:", description);
  console.log("ImageUrl:",  imageUrl);
  console.log("Tagged People:", taggedPeople);

  // PhotoshopDetection logic (assuming it's a promise-based function)
  PhotoshopDetection(false, imageUrl).then((isPhotoshop) => {
    if (!isPhotoshop) {
      console.log("Image is edited with Photoshop. Rejecting the post.");
      // Handle rejection logic (like showing an error to the user)
    } else {
      console.log("Image is not edited with Photoshop. Proceeding with post creation.");
      // Proceed with your post creation logic here (e.g., send the data to a server)
    }
  });
}

return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">
        {typeOfPost}
      </h2>
          <label className="block text-gray-600 font-medium">
            Provide the URL to the actual post
          </label>
          <input
            type="text"
            value={actualPostUrl}
            onChange={(e) => setPostUrl(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-600 font-medium">
            Write about what actually happened behind the scenes
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="3"
          />
          <label className="block text-gray-600 font-medium">Upload Image</label>
          <input type="file" 
          className="w-full p-2 border rounded-md" 
          onChange={handleImageChange}
          />
          <label className="block text-gray-600 font-medium">Tag People</label>
      <input
        type="text"
        value={taggedPeople}
        onChange={(e) => setTaggedPeople(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter usernames separated by commas"
      />
      <button onClick={handlePostCreation} className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
        Post
      </button>
    </div>
)
}

export default BehindTheScenes