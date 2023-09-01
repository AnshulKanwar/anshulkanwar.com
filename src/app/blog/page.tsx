import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  if (posts.length === 0) return <div>No posts yet!</div>;

  return (
    <div>
      <h1 className="text-xl sm:text-4xl font-bold mb-10">Blog</h1>
      <div className="flex flex-col gap-5">
        {posts.map(({ title, date, excerpt, url }) => (
          <div key={url}>
            <div className="flex justify-between">
              <Link href={url} className="text-white font-semibold hover:underline">
                <h2>{title}</h2>
              </Link>
              <span>{format(parseISO(date), "LLLL d, yyyy")}</span>
            </div>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
