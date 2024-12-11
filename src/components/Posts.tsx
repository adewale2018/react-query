import { useEffect, useState } from "react";

import { Link } from "react-router";
import Post from "./Post";
import axios from "axios";

export interface PostsProps {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/posts");
      if (res.status === 200) {
        setLoading(false);
        setPosts(res.data);
      }
      console.log("RES", res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading data...</h2>;
  }

  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="space-y-5">
      <h1>Traditional Methods of Fetching</h1>
      <p>Go to TanStack Method here.. <Link to="/tanstack-posts">TanStack</Link></p>
      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
