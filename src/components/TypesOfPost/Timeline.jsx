import { useState } from "react";
import NewTimeLine from "../TypesOfTimeLine.jsx/NewTimeline";
import ExistingTimeLine from "../TypesOfTimeLine.jsx/ExistingTimeLine";


const Timeline = ({typeOfPost}) => {
  const [typeSelected, setTypeSelected] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">{typeOfPost}</h2>
      {!typeSelected ? (
        <div className="space-y-4">
          <button
            onClick={() => {setValue(1); setTypeSelected(!typeSelected)}}
            className="w-full py-2 px-4 bg-red-300 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create new timeline
          </button>
          <button
            onClick={() => {setValue(2); setTypeSelected(!typeSelected)}}
            className="w-full py-2 px-4 bg-red-300 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add to existing timeline
          </button>
        </div>
      ) : (typeSelected && value === 1) ? (
        <NewTimeLine />
      ) : (typeSelected && value === 2) ? (
        <ExistingTimeLine />
      ) : null}
    </div>
  );
};

export default Timeline;

