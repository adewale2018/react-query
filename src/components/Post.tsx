import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PostsProps } from "./Posts";
import { useNavigate } from "react-router";

const Post = ({ title, body, id }: PostsProps) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/post-details/${id}`)}  className="cursor-pointer">
      <CardHeader>
        <CardTitle className='uppercase text-sky-700 font-mono font-light'>{title}</CardTitle>
      </CardHeader>
      <CardDescription>
        <CardContent>{body}</CardContent>
      </CardDescription>
      <CardFooter>Nice</CardFooter>
    </Card>
  );
};

export default Post;
