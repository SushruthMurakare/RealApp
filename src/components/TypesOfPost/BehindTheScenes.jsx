import { useState, onChange } from "react";
import { PhotoshopDetection } from "../PhotoshopDetection";
const BehindTheScenes = ({typeOfPost}) => {
const [actualPostUrl, setPostUrl] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [taggedPeople, setTaggedPeople] = useState("");
  
// Handle post creation (this is the function used when the "Post" button is clicked)
const handlePostCreation = () => {
  // Validate that all necessary fields are filled
  if (!actualPostUrl || !description || !image || !taggedPeople) {
    console.log("Error: All fields must be filled.");
    return;
  }

  createPost(actualPostUrl, description, image, taggedPeople);
};

// Function that creates the post and checks if the image is edited with Photoshop
function createPost(actualPostUrl, description, image, taggedPeople) {
  if (!actualPostUrl || !description || !image || !taggedPeople) {
    console.log("Error: All fields must be filled.");
    return;
  }
  const imageUrl = URL.createObjectURL(image); // Create a URL for the image file
  console.log("Post created with the following data:");
  console.log("Actual Post URL:", actualPostUrl);
  console.log("Description:", description);
  console.log("ImageUrl:",  imageUrl);
  console.log("Tagged People:", taggedPeople);

  // PhotoshopDetection logic (assuming it's a promise-based function)
  PhotoshopDetection(true, imageUrl).then((isPhotoshop) => {
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
          onChange={(e) => setImage(e.target.files[0])}
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