const NewPostPopUpOptions = ({ setValue }) => {
  return (
    <div className="z-10 absolute left-1/2 bottom-13 bg-white p-2 rounded-lg shadow-lg! w-40 text-center transform -translate-x-1/2">
      <ul className="space-y-2">
        {["Behind the scenes", "Truth about Trends", "Timeline", "Others"].map(
          (item) => (
            <li
              key={item}
              onClick={() => setValue(item)}
              className="cursor-pointer text-gray-600 hover:text-gray-900"
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default NewPostPopUpOptions;
