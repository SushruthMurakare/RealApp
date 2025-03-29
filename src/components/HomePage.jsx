import PostCard from "./PostCard";

export default function HomePage({ posts, stories }) {
  console.log("Home", stories);
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {stories?.stories?.map((story) => {
        return (
          <div>
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
