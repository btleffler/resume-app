import { parse as YAMLparse } from "yaml";
import { readFile, lstat } from "fs/promises";
import { basename } from "path";
import { parse as MDparse } from "marked";

export default async function Post ({
  postPath,
}: {
  postPath: string,
}) {
  const [rawPost, stats] = await Promise.all([readFile(postPath), lstat(postPath)]);
  const parsedPost = YAMLparse(rawPost.toString());
  const date = parsedPost['last updated'] || parsedPost.date || stats.mtime || stats.birthtime;

  const post = {
    title: parsedPost.title || basename(postPath, '.yml'),
    date: new Date(date),
    content: MDparse(parsedPost.content),
  };

  return (
    <section role="document">
      <h1>{post.title}</h1>
      <h2>{post.date.toLocaleDateString()}</h2>
      <p>{post.content}</p>
    </section>
  );
}
