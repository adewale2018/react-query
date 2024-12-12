import axios from "axios";

export const fetchPosts = async () => {
  const res = await axios.get("http://localhost:4000/posts");
  if(res.status === 200) {
    return res.data
  }
};

export const fetchPostDetails = async (postId: string) => {
  const res = await axios.get(`http://localhost:4000/posts/${postId}`);
  if(res.status === 200) {
    return res.data
  }
};
