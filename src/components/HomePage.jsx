import PostCard from "./PostCard";

export default function HomePage({ posts, stories }) {
  return (
    <div className="flex flex-wrap gap-3 p-2">
      {stories?.stories?.map((story, i) => {
        return (
          <div key={i}>
            <img
              src={story.img}
              alt="Circle Image"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        );
      })}

      {posts.posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
