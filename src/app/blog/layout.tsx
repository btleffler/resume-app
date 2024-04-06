import type { Metadata } from 'next';
import { ReactNode } from 'react';
import BlogNav from '@components/blog/BlogNav';
import './blog.css';
import collectedPosts from './posts';

export const metadata: Metadata = {
  title: 'Ben Leffler - Blog',
  description: 'Senior Software Engineer',
};

export default async function BlogLayout({
  children,
}: {
  children: ReactNode
}) {
  const posts = await collectedPosts();
  
  return (
    <main
      className="min-h-screen pl-12 pr-12">
      <BlogNav collectors={posts} />
      {children}
    </main>
  );
}
