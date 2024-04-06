import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const postsDirectory = dirname(fileURLToPath(import.meta.url));

export default async function collectedPosts(): Promise<string[]> {
  const dirContent = await readdir(postsDirectory);

  return dirContent.map((file) => join(postsDirectory, file));
};
