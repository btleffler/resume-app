import { BlogPost } from "@components/blog/types";

export default function Post ({
  post,
}: {
  post: BlogPost,
}) {
  return (
    <p>{post.content}</p>
  );
}
