import { ArrowUpRight, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";
import { PRODUCTS, EO50_PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export default function Portfolio() {
  useMeta({
    title: "Portfolio",
    description:
      "The Max Farnon Digital product portfolio. Six live SaaS products plus the Empower Over 50 product line, a separate brand focused on work and identity after fifty.",
    path: "/portfolio",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="Portfolio"
        title="The work is the product suite."
        description="Every tool in the catalog is a live, shipping product. Each card below is both a portfolio piece and a link you can open right now."
      />

      <section className="container pb-8">
        <div className="space-y-8 md:space-y-10">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-8 md:p-12 hover:border-[var(--navy)] transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl text-[var(--gold)] leading-none">
                      {p.num}
                    </span>
                    <span className="inline-flex items-center h-6 px-2.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm bg-[color:color-mix(in_oklch,var(--gold)_22%,transparent)] text-[var(--navy)]">
                      Live
                    </span>
                  </div>
                  <h2 className="display mt-6 text-2xl md:text-3xl text-[var(--navy)]">
                    {p.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)]">
                    {p.tagline}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                  >
                    Visit product
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <div>
                    <div className="eyebrow">What it does</div>
                    <p className="mt-2 text-[var(--navy)] leading-relaxed">{p.description}</p>
                  </div>
                  <div className="hairline" />
                  <div>
                    <div className="eyebrow">Who it serves</div>
                    <p className="mt-2 text-[var(--navy)] leading-relaxed">{p.audience}</p>
                  </div>
                  <div className="hairline" />
                  <div>
                    <div className="eyebrow">Capabilities</div>
                    <ul className="mt-3 space-y-2">
                      {p.capabilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                          <span className="text-[var(--navy)]">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hairline" />
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="eyebrow flex items-center gap-2">
                      <Layers className="h-3.5 w-3.5" /> Pricing
                    </div>
                    <div className="font-serif text-lg text-[var(--navy)]">{p.price}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EO50 brand block */}
      <section className="border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] mt-16">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow">Sister brand</div>
              <h2 className="display mt-4 text-3xl md:text-5xl text-[var(--navy)]">
                Empower Over 50 product line.
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)]">
                Empower Over 50 is a separate brand, but shares the same product-led mindset. It ships tools for people navigating work, identity, and community after fifty. Listed here for context.
              </p>
            </div>
            <div className="md:col-span-5">
              <a
                href={SITE.empowerOver50Url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 border border-[var(--navy)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--navy)] hover:text-[var(--ivory)] transition-colors"
              >
                Visit Empower Over 50
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {EO50_PRODUCTS.map((name) => (
              <div
                key={name}
                className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-5"
              >
                <div className="font-serif text-base font-semibold text-[var(--navy)]">{name}</div>
                <div className="mt-2 text-xs text-[color:color-mix(in_oklch,var(--navy)_65%,transparent)]">
                  Empower Over 50
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Want to go deeper on one of these"
        title="Book a quick call and we will walk it through."
        description="Any of the products above can be demoed live in thirty minutes, with a candid view of whether it actually fits your situation."
      />
    </Layout>
  );
}
