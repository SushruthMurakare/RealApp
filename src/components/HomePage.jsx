import PostCard from "./Postcard";
import postsData from "../../data/posts.json";
import stories from '../../data/stories.json'

export default function HomePage() {
  console.log(stories.stories);
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* {stories.stories.map((item) => {
        {console.log(item.img)}
        <div>
        <img
          src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}
          alt="Circle Image"
          class="w-10 h-10 rounded-full object-cover"
        />``
      </div>
      })} */}
      {/* <div>
        <img
          src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}
          alt="Circle Image"
          class="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div>
        <img
          src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}
          alt="Circle Image"
          class="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div>
        <img
          src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}
          alt="Circle Image"
          class="w-10 h-10 rounded-full object-cover"
        />
      </div> */}
      {postsData.posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
