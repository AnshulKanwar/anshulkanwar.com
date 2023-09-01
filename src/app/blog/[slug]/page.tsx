import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article>
      <h1 className="text-xl sm:text-4xl font-bold mb-10">{post.title}</h1>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="mt-3">{post.excerpt}</div>
      <div className="mt-10 prose prose-zinc !prose-invert">
        <MDXContent />
      </div>
    </article>
  );
}
