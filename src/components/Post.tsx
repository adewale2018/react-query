import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PostsProps } from "./Posts";

const Post = ({ title, body }: PostsProps) => {
  return (
    <Card className="cursor-pointer">
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
