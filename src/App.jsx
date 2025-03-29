import { useState } from "react";
import HomePage from "./components/HomePage";
import HomeIcon from "./components/icons/HomeIcon";
import LightBulbIcon from "./components/icons/LightBulbIcon";
import AccountIcon from "./components/icons/AccountIcon";
import RealsPage from "./components/RealsPage";
import AccountPage from "./components/AccountPage";

function App() {
  const [currPage, setCurrPage] = useState(0);
  // 0 = home page
  // 1 = reals page
  // 2 = account page

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-grow bg-gray-100 overflow-y-auto overflow-x-hidden">
        {currPage === 0 ? (
          <HomePage />
        ) : currPage === 1 ? (
          <RealsPage />
        ) : (
          <AccountPage />
        )}
      </div>
      <div className="flex justify-evenly items-center h-14 flex-shrink-0 border-t-[1px] border-t-gray-200">
        <div onClick={() => setCurrPage(0)} className="h-12 w-12 p-2">
          <HomeIcon fill={currPage === 0} />
        </div>
        <div onClick={() => setCurrPage(1)} className="h-12 w-12 p-2">
          <LightBulbIcon fill={currPage === 1} />
        </div>
        <div onClick={() => setCurrPage(2)} className="h-12 w-12 p-2">
          <AccountIcon fill={currPage === 2} />
        </div>
      </div>
    </div>
  );
}

export default App;
