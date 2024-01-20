import { readFile, lstat } from "fs/promises";
import { basename, join } from "path";
import { BlogPost } from "./types";
import { Stats } from "fs";

export default class PostCollector {
  content: string;
  date: Date;
  directory: string;
  lastUpdated: Date;
  meta: Object;
  stats: Stats;
  title: string;

  contentFile = 'content.md';
  metaFile = 'meta.json';

  constructor (directory: string) {
    this.directory = directory;

    this.collect();
  }

  async collect () : Promise<PostCollector> {
    await Promise.all([
      this.collectContent(),
      this.collectMeta(),
      this.collectStats(),
    ]);

    return this;
  }

  async collectContent (): Promise<string> {
    if (this.content) {
      return this.content;
    }

    try {
      const content = await readFile(this.contentPath);

      this.content = content.toString();
    } catch (e) {
      this.content = '[NO CONTENT]';

      console.error('Error loading post content', (e as Error).stack, {
        contentPath: this.contentPath,
      });
    }

    return this.content;
  }

  async collectMeta (): Promise<Object> {
    if (this.meta) {
      return this.meta;
    }

    try {
      const meta = await readFile(this.metaPath);

      this.meta = JSON.parse(meta.toString()) as Object;
    } catch (e) {
      this.meta = {};

      console.error('Error loading post meta', (e as Error).stack, {
        metaPath: this.metaPath,
      });
    }

    return this.meta;
  }

  async collectStats () : Promise<Stats> {
    this.stats = await lstat(this.directory);

    return this.stats;
  }

  async toPost () : Promise<BlogPost> {
    await this.collect();

    return {
      date: this.meta?.date || this.stats?.birthtime,
      lastUpdated: this.meta?.lastUpdated || this.stats?.mtime,
      content: this.content,
      title: this.meta?.title || basename(this.directory),
    };
  }

  get contentPath (): string {
    return join(this.directory, this.contentFile);
  }

  get metaPath (): string {
    return join(this.directory, this.metaFile);
  }
}
