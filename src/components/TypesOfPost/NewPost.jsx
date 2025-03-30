const NewPost = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">New Post</h2>
      <>
        <label className="block text-gray-600 font-medium">
          What's on your mind really ?
        </label>
        <textarea
        //   value={behindTheScenes}
        //   onChange={(e) => setBehindTheScenes(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="3"
        />
      </>
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
    </div>
  );
};

export default NewPost;
