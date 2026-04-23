import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useMeta } from "@/hooks/useMeta";
import { sortedPosts, type PostCategory } from "@/lib/posts";

const CATEGORIES: (PostCategory | "All")[] = [
  "All",
  "AI for Business",
  "Content Strategy",
  "Digital Operations",
  "Case Studies",
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  useMeta({
    title: "Journal",
    description:
      "Writing on AI for business, content strategy, digital operations, and case studies from Max Farnon Digital.",
    path: "/blog",
  });

  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const all = sortedPosts();

  const featured = all.find((p) => p.featured) ?? all[0];
  const rest = useMemo(() => {
    const withoutFeatured = all.filter((p) => p.slug !== featured?.slug);
    if (category === "All") return withoutFeatured;
    return withoutFeatured.filter((p) => p.category === category);
  }, [all, featured, category]);

  return (
    <Layout>
      <PageHeader
        eyebrow="Journal"
        title="Notes on AI, content, and quiet operations."
        description="Occasional writing on the work we do, the tools we like, and the honest tradeoffs that come with running a modern business."
      />

      {/* Featured post */}
      {featured && (
        <section className="container pb-6">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm overflow-hidden hover:border-[var(--navy)] transition-colors"
          >
            <div className="grid md:grid-cols-12">
              <div
                aria-hidden="true"
                className="md:col-span-5 min-h-[220px] md:min-h-full relative flex items-center justify-center bg-[var(--navy)] text-[var(--ivory)] p-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, color-mix(in oklch, var(--gold) 35%, transparent) 0%, transparent 55%), radial-gradient(circle at 20% 85%, color-mix(in oklch, var(--ivory) 20%, transparent) 0%, transparent 40%)",
                }}
              >
                <div className="relative">
                  <div className="eyebrow text-[var(--gold)]">Featured</div>
                  <div className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                    {featured.category}
                  </div>
                  <div className="mt-6 text-xs tracking-widest uppercase text-[color:color-mix(in_oklch,var(--ivory)_70%,transparent)]">
                    Image placeholder, feature artwork goes here
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between bg-[var(--card)]">
                <div>
                  <div className="eyebrow">{featured.category}</div>
                  <h2 className="display mt-4 text-3xl md:text-4xl text-[var(--navy)] group-hover:text-[var(--navy-soft)]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs text-[color:color-mix(in_oklch,var(--navy)_65%,transparent)]">
                  <div className="flex items-center gap-4">
                    <span>{formatDate(featured.date)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {featured.readingMinutes} min read
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[var(--navy)] font-medium group-hover:text-[var(--gold)] transition-colors">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Category tabs */}
      <section className="container pt-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`inline-flex items-center h-9 px-4 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border ${
                category === c
                  ? "bg-[var(--navy)] text-[var(--ivory)] border-[var(--navy)]"
                  : "bg-transparent text-[var(--navy)] border-[color:color-mix(in_oklch,var(--navy)_20%,transparent)] hover:border-[var(--navy)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Post grid */}
      <section className="container py-10 pb-20">
        {rest.length === 0 ? (
          <div className="py-16 border border-dashed border-[color:color-mix(in_oklch,var(--navy)_20%,transparent)] rounded-sm text-center text-sm text-[color:color-mix(in_oklch,var(--navy)_60%,transparent)]">
            No posts in this category yet. Check back soon.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-8 hover:border-[var(--navy)] transition-colors"
              >
                <div className="eyebrow">{p.category}</div>
                <h3 className="mt-4 text-xl font-serif font-semibold text-[var(--navy)] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)] line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-auto pt-8 flex items-center justify-between text-xs text-[color:color-mix(in_oklch,var(--navy)_60%,transparent)]">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {p.readingMinutes} min
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--navy)] font-medium group-hover:text-[var(--gold)] transition-colors">
                    Read
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
