import { BlogPost } from "@components/blog/types";

export default function BlogNav ({
  posts,
}: {
  posts: BlogPost[],
}) {
  const links = posts.map(({ date, title }, idx) => (
    <li key={idx}>
      <a href={`${date}/${title}`}>
        {title}
      </a>
    </li>
  ));

  return (
    <div role="navigation">
      <ol>
        {links}
      </ol>
    </div>
  );
}
