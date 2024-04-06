export default function BlogNav ({
  posts,
}: {
  posts: string[],
}) {
  const links = posts.map(async (path, idx) => {
    const { date, title } = await path.toPost();

    return (<li key={idx}>
      <a href={`${date}/${title}`}>
        {title}
      </a>
    </li>);
  });

  return (
    <div role="navigation">
      <ol>
        {links}
      </ol>
    </div>
  );
}
