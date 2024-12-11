import { Link } from "react-router";
import Post from "./Post";
import { PostsProps } from "./Posts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const TanStackPosts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const posts = await axios.get("http://localhost:4000/posts");
      return posts.data;
    },
  });

  if (isLoading) {
    return <h2>Loading data...</h2>;
  }

  if (error) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div>
      <h1>TanStack Methods of Fetching</h1>
      <p>
        Go to Traditional Method here.. <Link to="/posts">Old way</Link>
      </p>
      {data?.map((post: PostsProps) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default TanStackPosts;