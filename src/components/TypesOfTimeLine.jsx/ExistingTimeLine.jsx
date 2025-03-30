const ExistingTimeLine = () => {
    const timelines = [
      { title: "Completing Some Course", progress: 45 },
      { title: "Learning to Drive", progress: 60 },
      { title: "Buying a Car", progress: 10 },
    ];
  
    return (
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Existing Timelines</h2>
        <div className="space-y-4">
          {timelines.map((timeline, index) => (
            <button
              key={index}
              className="w-full py-3 px-4 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{timeline.title}</span>
                <span className="text-sm text-gray-600">{timeline.progress}%</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExistingTimeLine;
  