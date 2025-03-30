import PostCard from "./PostCard";

export default function HomePage({ posts, stories }) {
  return (
    <>
      <div className="flex p-3 pb-1 gap-3 overflow-x-auto no-scrollbar">
        {stories?.stories?.map((story, i) => {
          return (
            <div
              key={i}
              className="[background:linear-gradient(45deg,#28de52_15%,#0cc5ed_75%);] w-16 h-16 flex-shrink-0 rounded-full p-[2px]"
            >
              <div className="bg-white rounded-full h-full w-full p-[2px]">
                <img
                  src={"../../" + story.profileImgUrl}
                  alt="Circle Image"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
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
