// import BlogNav from '@components/blog/BlogNav';
import Post from '@components/blog/Post';
import collectedPosts from './posts';

export default async function BlogHome() {
  const posts = await collectedPosts();
  const renderedPost = posts[0];

  return (
    <span>Hullo from blog.</span>
  );
}
