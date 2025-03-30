import PostCard from "./PostCard";

export default function HomePage({ posts, stories }) {
  return (
    <>
      <div className="flex p-3 pb-0 gap-3 overflow-x-auto no-scrollbar">
        {stories?.stories?.map((story, i) => {
          return (
            <div key={i} className="flex-shrink-0">
              <div className="[background:linear-gradient(45deg,#28de52_15%,#0cc5ed_75%);] w-16 mb-1 h-16 rounded-full p-[2px]">
                <div className="bg-white rounded-full h-full w-full p-[2px]">
                  <img
                    src={"../../" + story.profileImgUrl}
                    alt="Circle Image"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-[10px] text-center text-ellipsis w-16 overflow-hidden">
                {story.username}
              </p>
            </div>
          );
        })}
      </div>
      <div className="p-[6px]">
        {posts.posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </>
  );
}
