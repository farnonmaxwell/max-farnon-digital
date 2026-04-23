import { Link } from "wouter";
import {
  ArrowRight,
  Sparkles,
  LayoutDashboard,
  Radio,
  Quote,
} from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";
import { SITE } from "@/lib/site";

/**
 * Home page, editorial hero with dossier panel, three service pillars, social proof strip, CTA.
 * Style: navy + ivory + gold, Fraunces display, Inter body, gold underlines and numeric markers.
 */
export default function Home() {
  useMeta({
    title: "Max Farnon Digital, AI-Powered Solutions for Modern Businesses",
    description:
      "A digital consultancy and AI solutions agency. Decades of business experience combined with cutting-edge AI expertise, helping modern businesses adopt AI with clarity.",
    path: "/",
  });

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
              <div className="eyebrow fade-up">A digital consultancy, founded by Max Farnon</div>
              <h1 className="display fade-up delay-1 mt-6 text-4xl sm:text-5xl md:text-7xl text-[var(--navy)]">
                AI-Powered Solutions for Modern Businesses.
              </h1>
              <div className="mt-8 h-px w-20 bg-[var(--gold)] fade-up delay-2" />
              <p className="fade-up delay-2 mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                Three decades of business operations experience, combined with cutting-edge AI
                expertise. Max Farnon Digital helps small and mid-size businesses put AI to work
                without the complexity, the jargon, or the hype.
              </p>
              <div className="fade-up delay-3 mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[var(--navy)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[var(--navy-soft)] transition-colors"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[var(--navy)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--navy)] hover:text-[var(--ivory)] transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Dossier panel */}
            <aside className="md:col-span-4 fade-up delay-4">
              <div className="border border-[color:color-mix(in_oklch,var(--navy)_15%,transparent)] bg-[var(--card)] rounded-sm p-6 md:p-8">
                <div className="eyebrow">Dossier</div>
                <ul className="mt-6 space-y-6">
                  <li className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl text-[var(--gold)] leading-none w-14">30+</span>
                    <span className="text-sm text-[color:color-mix(in_oklch,var(--navy)_80%,transparent)]">
                      Years in business operations and management.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl text-[var(--gold)] leading-none w-14">3</span>
                    <span className="text-sm text-[color:color-mix(in_oklch,var(--navy)_80%,transparent)]">
                      Service pillars: AI strategy, content systems, digital operations.
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

      {/* Service pillars */}
      <section className="border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow">What we do</div>
              <h2 className="display mt-4 text-3xl md:text-5xl text-[var(--navy)]">
                Three pillars, built for businesses that want results, not buzzwords.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)]">
                Every engagement begins with the same question: where does AI save meaningful time
                or money, and where is it simply noise? Here is where we focus.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: <Sparkles className="h-5 w-5" />,
                title: "AI Strategy & Implementation",
                desc: "Tool audits, workflow automation, and custom AI assistants that quietly pay for themselves.",
                href: "/services#ai-strategy",
              },
              {
                num: "02",
                icon: <Radio className="h-5 w-5" />,
                title: "Content & Brand Systems",
                desc: "YouTube, podcast, and newsletter systems for thought leaders and audience-building brands.",
                href: "/services#content-systems",
              },
              {
                num: "03",
                icon: <LayoutDashboard className="h-5 w-5" />,
                title: "Digital Operations",
                desc: "Dashboards, CRM integrations, and workflow design for teams drowning in manual work.",
                href: "/services#digital-operations",
              },
            ].map((p) => (
              <Link
                key={p.num}
                href={p.href}
                className="group relative flex flex-col p-8 bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm hover:border-[var(--navy)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[var(--gold)]">{p.num}</span>
                  <span className="flex items-center justify-center h-9 w-9 rounded-sm bg-[color:color-mix(in_oklch,var(--navy)_6%,transparent)] text-[var(--navy)]">
                    {p.icon}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-serif font-semibold text-[var(--navy)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_70%,transparent)]">
                  {p.desc}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-[color:color-mix(in_oklch,var(--navy)_4%,transparent)] border-y border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]">
        <div className="container py-16 md:py-24">
          <div className="eyebrow">In good company</div>
          <h2 className="display mt-4 text-2xl md:text-4xl text-[var(--navy)] max-w-3xl">
            Trusted by founders, operators, and teams that prefer craft over clutter.
          </h2>

          {/* Client logos placeholder row */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "Client Logo",
              "Client Logo",
              "Client Logo",
              "Client Logo",
              "Client Logo",
              "Client Logo",
            ].map((label, i) => (
              <div
                key={i}
                className="h-16 flex items-center justify-center border border-dashed border-[color:color-mix(in_oklch,var(--navy)_20%,transparent)] text-[11px] font-medium tracking-widest uppercase text-[color:color-mix(in_oklch,var(--navy)_55%,transparent)] rounded-sm"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Max brings a rare combination: real operating experience and a clear-eyed view of where AI actually helps. No hype, just working systems.",
                name: "Operator Testimonial",
                role: "Founder, placeholder brand",
              },
              {
                quote:
                  "We stopped guessing and started shipping. The workflows he set up saved our team days every month within the first quarter.",
                name: "Team Testimonial",
                role: "COO, placeholder company",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] p-8 rounded-sm"
              >
                <Quote className="h-5 w-5 text-[var(--gold)]" />
                <blockquote className="mt-4 font-serif text-lg md:text-xl text-[var(--navy)] leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold text-[var(--navy)]">{t.name}</div>
                  <div className="text-[color:color-mix(in_oklch,var(--navy)_60%,transparent)]">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
