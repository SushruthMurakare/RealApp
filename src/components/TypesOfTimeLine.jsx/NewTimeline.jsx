import { useState } from "react";

const NewTimeLine = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeToComplete, setTimeToComplete] = useState("");
  const [sacrifice, setSacrifice] = useState("");
  const [treat, setTreat] = useState("");
  const [image, setImage] = useState(null);
  const [inviteFriend, setInviteFriend] = useState(false);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a New Timeline</h2>
      <form className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-gray-600 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-gray-600 font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
            rows="4"
          />
        </div>

        {/* Time to Complete */}
        <div>
          <label htmlFor="timeToComplete" className="block text-gray-600 font-medium">
            Time to Complete
          </label>
          <input
            type="text"
            id="timeToComplete"
            value={timeToComplete}
            onChange={(e) => setTimeToComplete(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter time (e.g., 30 days)"
          />
        </div>

        {/* Invite Friend */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="inviteFriend"
            checked={inviteFriend}
            onChange={(e) => setInviteFriend(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="inviteFriend" className="text-gray-600 font-medium">
            Invite a friend to challenge or join
          </label>
        </div>

        {/* Sacrifice */}
        <div>
          <label htmlFor="sacrifice" className="block text-gray-600 font-medium">
            Sacrifice if not achieved before timeline
          </label>
          <textarea
            id="sacrifice"
            value={sacrifice}
            onChange={(e) => setSacrifice(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter sacrifice"
            rows="3"
          />
        </div>

        {/* Treat */}
        <div>
          <label htmlFor="treat" className="block text-gray-600 font-medium">
            Treat if achieved the goal
          </label>
          <textarea
            id="treat"
            value={treat}
            onChange={(e) => setTreat(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter treat"
            rows="3"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-gray-600 font-medium">
            Upload an image post
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {image && (
            <div className="mt-4">
              <img src={image} alt="Uploaded preview" className="w-full h-auto rounded-md" />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Timeline
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTimeLine;
