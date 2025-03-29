import PostCard from "./Postcard";
import postsData from "../../data/posts.json";

export default function HomePage() {
  console.log({ a: postsData.posts });
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {postsData.posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
