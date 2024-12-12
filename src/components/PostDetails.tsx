import { Link, useParams } from 'react-router'

import Post from './Post'
import axios from 'axios'
import { fetchPostDetails } from '@/api/Api'
import { useQuery } from '@tanstack/react-query'

const PostDetails = () => {
  const { postId } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPostDetails(postId),
    // queryFn: async () => {
    //   const post = await axios.get(`http://localhost:4000/posts/${postId}`)
    //   return post.data;
    // }
  });

  if (isLoading) {
    return <h2>Loading data...</h2>;
  }

  if (error) {
    return <h2>Something went wrong!</h2>;
  }
  
  return (
    <div>
      <Link className=' text-green-600' to="/tanstack-posts">Back to posts</Link>
      <h1 className='mt-10 mb-2'>PostDetails Page</h1>
      <Post {...data} />
    </div>
  )
}

export default PostDetails