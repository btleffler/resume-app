import Post from '@components/blog/Post';
import collectedPosts from './posts';

export default async function BlogHome() {
  const posts = await collectedPosts();
  const renderedPost = posts[0];

  return (
    <Post postPath={renderedPost} />
  );
}
