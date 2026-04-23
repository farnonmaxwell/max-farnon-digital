import { Link, useRoute } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import { Streamdown } from "streamdown";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";
import { getPost, sortedPosts } from "@/lib/posts";
import NotFound from "./NotFound";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getPost(slug);

  useMeta({
    title: post ? post.title : "Post not found",
    description: post?.excerpt,
    path: `/blog/${slug}`,
  });

  if (!post) return <NotFound />;

  const related = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <Layout>
      <article className="container pt-14 md:pt-20 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:color-mix(in_oklch,var(--navy)_70%,transparent)] hover:text-[var(--gold)] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Journal
        </Link>

        <div className="mt-8 grid md:grid-cols-12 gap-10">
          <header className="md:col-span-10 lg:col-span-9">
            <div className="eyebrow">{post.category}</div>
            <h1 className="display mt-4 text-4xl md:text-6xl text-[var(--navy)]">{post.title}</h1>
            <div className="mt-6 h-px w-16 bg-[var(--gold)]" />
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[color:color-mix(in_oklch,var(--navy)_65%,transparent)]">
              <span className="font-medium text-[var(--navy)]">{post.author}</span>
              <span>{formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readingMinutes} min read
              </span>
            </div>
          </header>
        </div>

        <div className="mt-12 grid md:grid-cols-12 gap-10">
          <div
            className="md:col-span-8 lg:col-span-7 md:col-start-1
              prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[var(--navy)] prose-headings:font-semibold
              prose-p:text-[var(--navy)] prose-p:leading-[1.85]
              prose-li:text-[var(--navy)]
              prose-strong:text-[var(--navy)]
              prose-a:text-[var(--navy)] prose-a:underline prose-a:decoration-[var(--gold)] prose-a:decoration-2 prose-a:underline-offset-4
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-10
            "
          >
            <Streamdown>{post.body.trim()}</Streamdown>
          </div>

          <aside className="md:col-span-4 lg:col-span-4 lg:col-start-9">
            <div className="sticky top-24 border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-6 bg-[var(--card)]">
              <div className="eyebrow">More reading</div>
              <ul className="mt-5 space-y-5">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="block group">
                      <div className="text-[10px] uppercase tracking-wider text-[var(--gold)] font-semibold">
                        {r.category}
                      </div>
                      <div className="mt-1 font-serif font-semibold text-[var(--navy)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                        {r.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <CTASection
        eyebrow="Want the next one in your inbox?"
        title="Let&rsquo;s talk about your project."
        description="If something in this post sparked a question about your own business, that is often the best time to compare notes."
      />
    </Layout>
  );
}
