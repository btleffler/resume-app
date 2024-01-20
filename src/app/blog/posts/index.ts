import PostCollector from "@components/blog/PostCollector";
import { lstat, readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const postsDirectory = dirname(fileURLToPath(import.meta.url));

export default async function collectedPosts(): Promise<PostCollector[]> {
  const dirContent = await readdir(postsDirectory);

  return await Promise.all(
    dirContent
      .map((path) => join(postsDirectory, path))
      .filter(async (path) => {
        try {
          const stats = await lstat(path);

          return stats.isDirectory();
        } catch (e) {
          return false;
        }
      })
      .map(async (postDirectory) => new PostCollector(postDirectory))
  );
};
