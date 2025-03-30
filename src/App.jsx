import { useEffect, useRef, useState } from "react";
import HomePage from "./components/HomePage";
import HomeIcon from "./components/icons/HomeIcon";
import LightBulbIcon from "./components/icons/LightBulbIcon";
import AccountIcon from "./components/icons/AccountIcon";
import MessageIcon from "./components/icons/MessageIcon";
import RealsPage from "./components/RealsPage";
import AccountPage from "./components/AccountPage";
import MessagePage from "./components/MessagePage";
import viewGoal from "./functions/viewGoal";
import NewPost from "./components/NewPost";
import NewPostPopUpOptions from "./components/NewPostPopUp";
import PlusIcon from "./components/icons/PlusIcon";

function App() {
  const [currPage, setCurrPage] = useState(0);
  const [posts, setPosts] = useState(null);
  const [stories, setStories] = useState(null);
  const [newPostPop, setNewPostPop] = useState(false);
  const [typeOfPost, setTypeofPost] = useState("");
  const scrollDiv = useRef(null);

  // 0 = home page
  // 1 = reals page
  // 2 = account page
  // 2.5 = account page showing goal
  // 3 = messaging page

  viewGoal.f = () => {
    setCurrPage(2.5);
  };

  useEffect(() => {
    fetch("http://localhost:3000/posts").then((response) =>
      response.json().then((data) => {
        setPosts(data);
      })
    );
    fetch("http://localhost:3000/stories").then((response) =>
      response.json().then((data) => {
        setStories(data);
      })
    );
  }, []);

  // scroll to the top when switching pages
  useEffect(() => {
    scrollDiv.current.scrollTop = 0;
  }, [currPage]);

  const newPostSelection = (type) => {
    setTypeofPost(type);
    setNewPostPop(!newPostPop);
    setCurrPage(4);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div
        ref={scrollDiv}
        className="flex-grow bg-gray-100 overflow-y-auto overflow-x-hidden"
      >
        {newPostPop && (
          <NewPostPopUpOptions
            setValue={(type) => {
              if (type !== undefined) {
                newPostSelection(type);
              } else {
                setNewPostPop(false);
              }
            }}
          />
        )}
        {posts === null ? (
          <p className="text-center p-4">Loading...</p>
        ) : currPage === 0 ? (
          <HomePage posts={posts} stories={stories} />
        ) : currPage === 1 ? (
          <RealsPage />
        ) : currPage === 2 ? (
          <AccountPage setCurrPage={setCurrPage} />
        ) : currPage === 2.5 ? (
          <AccountPage setCurrPage={setCurrPage} goal />
        ) : currPage === 4 ? (
          <NewPost typeOfPost={typeOfPost} />
        ) : (
          <MessagePage />
        )}
      </div>
      <div className="flex justify-evenly items-center h-14 flex-shrink-0 border-t-[1px] border-t-gray-200">
        <div onClick={() => setCurrPage(0)} className="h-12 w-12 p-2">
          <HomeIcon fill={currPage === 0} />
        </div>
        <div onClick={() => setCurrPage(1)} className="h-12 w-12 p-2">
          <LightBulbIcon fill={currPage === 1} />
        </div>
        <div
          onClick={() => setNewPostPop(!newPostPop)}
          className="h-12 w-12 p-2"
        >
          <PlusIcon fill={currPage === 4} />
        </div>
        <div onClick={() => setCurrPage(2)} className="h-12 w-12 p-2">
          <AccountIcon fill={currPage === 2 || currPage === 2.5} />
        </div>
        <div onClick={() => setCurrPage(3)} className="h-12 w-12 p-2">
          <MessageIcon fill={currPage === 3} />
        </div>
      </div>
    </div>
  );
}

export default App;
