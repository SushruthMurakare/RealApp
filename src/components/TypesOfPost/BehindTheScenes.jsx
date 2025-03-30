const BehindTheScenes = ({typeOfPost}) => {
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
            // value={postUrl}
            // onChange={(e) => setPostUrl(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-600 font-medium">
            Write about what actually happened behind the scenes
          </label>
          <textarea
            // value={behindTheScenes}
            // onChange={(e) => setBehindTheScenes(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="3"
          />
          <label className="block text-gray-600 font-medium">Upload Image</label>
          <input type="file" className="w-full p-2 border rounded-md" />
          <label className="block text-gray-600 font-medium">Tag People</label>
      <input
        type="text"
        // value={taggedPeople}
        // onChange={(e) => setTaggedPeople(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter usernames separated by commas"
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
        Post
      </button>
    </div>
)
}

export default BehindTheScenes