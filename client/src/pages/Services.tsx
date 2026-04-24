import { ArrowUpRight, ArrowRight, Check, Hammer, Building2, Briefcase, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";
import { SITE } from "@/lib/site";
import { PRODUCTS, PRODUCT_GROUPS, type ProductGroup } from "@/lib/products";

const groupMeta: Record<ProductGroup, { icon: React.ReactNode; blurb: string; anchor: string }> = {
  "For Contractors & Trades": {
    icon: <Hammer className="h-5 w-5" />,
    blurb: "Tools that live on the job site and in the truck, not in a boardroom.",
    anchor: "contractors-trades",
  },
  "For Business Owners": {
    icon: <Building2 className="h-5 w-5" />,
    blurb: "Cash flow, analysis, and content systems for the owner wearing every hat.",
    anchor: "business-owners",
  },
  "For Agencies & Consultants": {
    icon: <Briefcase className="h-5 w-5" />,
    blurb: "White-label tooling you can resell under your own brand.",
    anchor: "agencies-consultants",
  },
};

export default function Services() {
  useMeta({
    title: "Products",
    description:
      "The Max Farnon Digital product suite. Six AI-powered SaaS tools for contractors, business owners, and agencies, each priced transparently and shipped live.",
    path: "/services",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="Products"
        title="A focused product suite for small businesses."
        description="Six live SaaS products, each built for a specific job. Pick the one that fits, start using it this week, and skip the enterprise sales cycle."
      />

      <section className="container pb-8">
        <div className="flex flex-wrap gap-3">
          {PRODUCT_GROUPS.map((g) => (
            <a
              key={g}
              href={`#${groupMeta[g].anchor}`}
              className="inline-flex items-center gap-2 h-9 px-4 text-xs font-semibold tracking-wide uppercase border border-[color:color-mix(in_oklch,var(--navy)_20%,transparent)] text-[var(--navy)] hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--ivory)] rounded-sm transition-colors"
            >
              <span className="text-[var(--gold)]">{groupMeta[g].icon}</span>
              {g}
            </a>
          ))}
          <a
            href="#advisory"
            className="inline-flex items-center gap-2 h-9 px-4 text-xs font-semibold tracking-wide uppercase border border-[color:color-mix(in_oklch,var(--navy)_20%,transparent)] text-[var(--navy)] hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--ivory)] rounded-sm transition-colors"
          >
            <span className="text-[var(--gold)]"><Compass className="h-4 w-4" /></span>
            Advisory
          </a>
        </div>
      </section>

      {PRODUCT_GROUPS.map((g, gi) => {
        const items = PRODUCTS.filter((p) => p.group === g);
        return (
          <section
            key={g}
            id={groupMeta[g].anchor}
            className={`scroll-mt-24 ${gi > 0 ? "border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]" : ""}`}
          >
            <div className="container py-16 md:py-24">
              <div className="grid md:grid-cols-12 gap-10 items-end">
                <div className="md:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center h-10 w-10 rounded-sm bg-[color:color-mix(in_oklch,var(--navy)_6%,transparent)] text-[var(--navy)]">
                      {groupMeta[g].icon}
                    </span>
                    <div className="eyebrow">{g}</div>
                  </div>
                  <h2 className="display mt-6 text-3xl md:text-4xl text-[var(--navy)]">
                    {groupMeta[g].blurb}
                  </h2>
                </div>
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {items.map((p) => (
                  <article
                    key={p.id}
                    className="group relative flex flex-col bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-8 md:p-10 hover:border-[var(--navy)] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl text-[var(--gold)] leading-none">
                        {p.num}
                      </span>
                      <span className="inline-flex items-center h-6 px-2.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm bg-[color:color-mix(in_oklch,var(--gold)_22%,transparent)] text-[var(--navy)]">
                        Live
                      </span>
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-semibold text-[var(--navy)]">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[color:color-mix(in_oklch,var(--navy)_70%,transparent)]">
                      {p.tagline}
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-[var(--navy)]">
                      {p.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {p.capabilities.map((c, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1 flex items-center justify-center h-4 w-4 rounded-full bg-[color:color-mix(in_oklch,var(--gold)_22%,transparent)] text-[var(--navy)] shrink-0">
                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                          <span className="text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_85%,transparent)]">
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 hairline" />

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="eyebrow">Price</div>
                        <div className="mt-1 font-serif text-xl text-[var(--navy)]">
                          {p.price}
                        </div>
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-11 px-5 bg-[var(--navy)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[var(--navy-soft)] transition-colors"
                      >
                        Open product
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="mt-6 border-l-2 border-[var(--gold)] pl-4">
                      <div className="eyebrow">Best for</div>
                      <p className="mt-1 text-sm text-[color:color-mix(in_oklch,var(--navy)_80%,transparent)]">
                        {p.audience}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Advisory section */}
      <section
        id="advisory"
        className="scroll-mt-24 border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]"
      >
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center h-10 w-10 rounded-sm bg-[color:color-mix(in_oklch,var(--navy)_6%,transparent)] text-[var(--navy)]">
                  <Compass className="h-5 w-5" />
                </span>
                <div className="eyebrow">Advisory</div>
              </div>
              <h2 className="display mt-6 text-3xl md:text-4xl text-[var(--navy)]">
                Need help choosing the right tools or getting set up?
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)]">
                The products are self-serve by design. When you want a second set of eyes on the stack, a rollout plan across a small team, or a tailored AI workflow built around the suite, book a strategy session.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[var(--navy)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[var(--navy-soft)] transition-colors"
                >
                  Book a strategy session
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[var(--navy)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--navy)] hover:text-[var(--ivory)] transition-colors"
                >
                  Send a message
                </a>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-7">
              <div className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-8">
                <div className="eyebrow">What a session covers</div>
                <ul className="mt-6 space-y-4">
                  {[
                    "A candid look at your current stack, workflows, and pain points",
                    "A shortlist of which MFD products or outside tools actually fit",
                    "A rollout plan for your team, with priorities and a realistic timeline",
                    "Optional follow-on hands-on setup, priced per engagement",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex items-center justify-center h-5 w-5 rounded-full bg-[color:color-mix(in_oklch,var(--gold)_22%,transparent)] text-[var(--navy)] shrink-0">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-base leading-relaxed text-[var(--navy)]">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 hairline" />
                <p className="mt-6 text-sm text-[color:color-mix(in_oklch,var(--navy)_70%,transparent)]">
                  Sessions are capped each quarter so every engagement gets real attention. If we are not the right fit, we will say so on the call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Start anywhere"
        title="Pick a product, or pick a time."
        description="Everything in the suite is live and self-serve. If you would rather talk through the right starting point, a thirty-minute session is the fastest path."
      />
    </Layout>
  );
}
