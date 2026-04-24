import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Hammer,
  Building2,
  Briefcase,
  Compass,
} from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

/**
 * Home page, product-led hero with dossier panel, product suite grid, audience bands, advisory strip, CTA.
 * Style: navy + ivory + gold, Fraunces display, Inter body, gold underlines and numeric markers.
 */
export default function Home() {
  useMeta({
    title: "Max Farnon Digital, AI-Powered Tools for Small Businesses",
    description:
      "Max Farnon Digital builds AI-powered software for small businesses and tradespeople. A suite of tools for job costing, proposals, lead generation, cash flow, and content, with optional advisory on the side.",
    path: "/",
  });

  const groupIcon: Record<string, React.ReactNode> = {
    "For Contractors & Trades": <Hammer className="h-5 w-5" />,
    "For Business Owners": <Building2 className="h-5 w-5" />,
    "For Agencies & Consultants": <Briefcase className="h-5 w-5" />,
  };

  const featured = [
    PRODUCTS.find((p) => p.id === "job-cost-tracker-pro")!,
    PRODUCTS.find((p) => p.id === "money-in")!,
    PRODUCTS.find((p) => p.id === "service-proposal-builder")!,
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 40% at 85% 0%, color-mix(in oklch, var(--gold) 18%, transparent) 0%, transparent 60%), radial-gradient(ellipse 50% 35% at 0% 100%, color-mix(in oklch, var(--navy) 8%, transparent) 0%, transparent 55%)",
          }}
        />
        <div className="container relative pt-10 md:pt-20 pb-14 md:pb-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <div className="eyebrow fade-up">A product studio, founded by Max Farnon</div>
              <h1 className="display fade-up delay-1 mt-6 text-4xl sm:text-5xl md:text-7xl text-[var(--navy)]">
                AI-powered tools for the people who actually run small businesses.
              </h1>
              <div className="mt-8 h-px w-20 bg-[var(--gold)] fade-up delay-2" />
              <p className="fade-up delay-2 mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                Max Farnon Digital builds a suite of focused SaaS products for contractors, tradespeople, and owner-operators. Job costing, proposals, lead generation, cash flow, and content playbooks, each one designed to pay for itself in a single job or a single week.
              </p>
              <div className="fade-up delay-3 mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[var(--navy)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[var(--navy-soft)] transition-colors"
                >
                  See the product suite
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={SITE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[var(--navy)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--navy)] hover:text-[var(--ivory)] transition-colors"
                >
                  Book a strategy session
                </a>
              </div>
            </div>

            {/* Dossier panel */}
            <aside className="md:col-span-4 fade-up delay-4">
              <div className="border border-[color:color-mix(in_oklch,var(--navy)_15%,transparent)] bg-[var(--card)] rounded-sm p-6 md:p-8">
                <div className="eyebrow">Dossier</div>
                <ul className="mt-6 space-y-6">
                  <li className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl text-[var(--gold)] leading-none w-14">6</span>
                    <span className="text-sm text-[color:color-mix(in_oklch,var(--navy)_80%,transparent)]">
                      Live SaaS products across contractor, owner, and agency workflows.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl text-[var(--gold)] leading-none w-14">30+</span>
                    <span className="text-sm text-[color:color-mix(in_oklch,var(--navy)_80%,transparent)]">
                      Years of operating experience behind every product decision.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl text-[var(--gold)] leading-none w-14">2</span>
                    <span className="text-sm text-[color:color-mix(in_oklch,var(--navy)_80%,transparent)]">
                      Books published, including A Beginner&rsquo;s Guide to AI.
                    </span>
                  </li>
                </ul>
                <div className="mt-8 hairline" />
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                >
                  Read the full background
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow">The product suite</div>
              <h2 className="display mt-4 text-3xl md:text-5xl text-[var(--navy)]">
                Six tools, built for the real jobs small businesses do every week.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)]">
                Every product is shipped, priced transparently, and focused on one job. No enterprise suites, no twelve-month rollouts. Pick the tool that fits, start using it this week.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-8 bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm hover:border-[var(--navy)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[var(--gold)]">{p.num}</span>
                  <span className="flex items-center justify-center h-9 w-9 rounded-sm bg-[color:color-mix(in_oklch,var(--navy)_6%,transparent)] text-[var(--navy)]">
                    {groupIcon[p.group]}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-serif font-semibold text-[var(--navy)]">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_70%,transparent)]">
                  {p.tagline}
                </p>
                <div className="mt-6 inline-flex items-center h-7 px-2.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm bg-[color:color-mix(in_oklch,var(--gold)_22%,transparent)] text-[var(--navy)] w-fit">
                  {p.price}
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">
                  Open product
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
            >
              See all six products and pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[color:color-mix(in_oklch,var(--navy)_4%,transparent)] border-y border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]">
        <div className="container py-16 md:py-24">
          <div className="eyebrow">Who it is for</div>
          <h2 className="display mt-4 text-2xl md:text-4xl text-[var(--navy)] max-w-3xl">
            Built for operators, not enterprises.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Hammer className="h-5 w-5" />,
                title: "Contractors and trades",
                desc: "Job costing, proposals, and lead capture for crews running real work on real job sites.",
              },
              {
                icon: <Building2 className="h-5 w-5" />,
                title: "Owner-operators",
                desc: "Cash flow, franchise analysis, and content playbooks for the owner wearing every hat.",
              },
              {
                icon: <Briefcase className="h-5 w-5" />,
                title: "Agencies and consultants",
                desc: "White-label local lead sites and tooling for shops stacking recurring revenue.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] p-8 rounded-sm"
              >
                <span className="flex items-center justify-center h-9 w-9 rounded-sm bg-[color:color-mix(in_oklch,var(--navy)_6%,transparent)] text-[var(--navy)]">
                  {p.icon}
                </span>
                <h3 className="mt-6 text-xl font-serif font-semibold text-[var(--navy)]">
                  {p.title}
                </h3>
                <div className="mt-4 h-px w-10 bg-[var(--gold)]" />
                <p className="mt-4 text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory strip */}
      <section className="border-b border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="eyebrow">Advisory, on the side</div>
              <h2 className="display mt-4 text-3xl md:text-5xl text-[var(--navy)]">
                Need help choosing the right tools or getting set up?
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)]">
                The products are self-serve and designed to be that way. When a business wants a second set of eyes on the stack, a rollout plan across a team, or a tailored AI workflow built around the suite, that is what the strategy session is for.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <div className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_15%,transparent)] rounded-sm p-8">
                <Compass className="h-6 w-6 text-[var(--gold)]" />
                <h3 className="mt-4 font-serif text-xl text-[var(--navy)]">Strategy session</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                  A focused call to map your workflow, pick the right tools, and leave with a concrete next step. Honest fit assessment included.
                </p>
                <a
                  href={SITE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 h-11 px-5 bg-[var(--navy)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[var(--navy-soft)] transition-colors"
                >
                  Book a strategy session
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Start with a tool, or start with a conversation"
        title="Pick a product. Or book a call."
        description="The tools are live and self-serve. The call is there when you want a second opinion before committing."
      />
    </Layout>
  );
}
