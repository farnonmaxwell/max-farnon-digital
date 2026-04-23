import { User } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";

const values = [
  {
    num: "01",
    title: "Human-first AI",
    desc: "Technology serves people, not the other way around. Every system we build keeps a human in the loop on decisions that matter.",
  },
  {
    num: "02",
    title: "Practical over theoretical",
    desc: "We skip the framework theater. If a tool does not save time, money, or stress within a reasonable window, it does not make the cut.",
  },
  {
    num: "03",
    title: "Results over buzzwords",
    desc: "Dashboards, not decks. We measure what matters and we report honestly, including when something is not working yet.",
  },
];

export default function About() {
  useMeta({
    title: "About Max Farnon",
    description:
      "Three decades of business operations and management experience, now focused on helping modern businesses use AI as a force multiplier.",
    path: "/about",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="About"
        title="A working operator who finally found a force multiplier."
        description="Max Farnon Digital is a small consultancy with a clear remit: help modern businesses put AI to work in ways that are boring, measurable, and honestly useful."
      />

      <section className="container pb-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          {/* Headshot placeholder */}
          <div className="md:col-span-4">
            <div className="relative">
              <div className="aspect-[4/5] w-full bg-[color:color-mix(in_oklch,var(--navy)_6%,transparent)] border border-[color:color-mix(in_oklch,var(--navy)_15%,transparent)] rounded-sm flex flex-col items-center justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--navy)] text-[var(--ivory)]">
                  <User className="h-7 w-7" />
                </div>
                <div className="mt-4 eyebrow">Image Placeholder</div>
                <div className="mt-1 text-xs text-[color:color-mix(in_oklch,var(--navy)_60%,transparent)]">
                  Replace with professional headshot
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-serif text-sm text-[var(--gold)]">M.F.</span>
                <span className="text-xs text-[color:color-mix(in_oklch,var(--navy)_65%,transparent)]">
                  Photographed in South Florida.
                </span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-8 space-y-6 text-[17px] leading-[1.75] text-[var(--navy)]">
            <p>
              Max Farnon spent more than thirty years running, building, and fixing businesses.
              Operations, management, marketing systems, people, numbers, and the unglamorous
              middle ground where most real work gets done.
            </p>
            <p>
              After a career disruption in his mid-fifties, Max did what many people over 50 feel
              pressured to avoid; he started again, this time with a new toolkit. The tools were
              AI, automation, and a set of hard-won opinions about what actually moves a business
              forward.
            </p>
            <p>
              Max Farnon Digital is the result: a consultancy that sits at the intersection of AI,
              content, and operations. We work with founders and teams who are tired of the hype
              cycle and want a pragmatic partner who has been in their seat. No moonshots; no
              magic; just systems that work on a Tuesday morning.
            </p>
            <p>
              In addition to client work, Max writes books, including{" "}
              <span className="italic">A Beginner&rsquo;s Guide to AI</span>, and leads{" "}
              <a
                href="https://empowerover50.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:text-[var(--gold)] transition-colors"
              >
                Empower Over 50
              </a>
              , a platform for people navigating work, identity, and community after fifty.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] mt-16">
        <div className="container py-16 md:py-24">
          <div className="eyebrow">Values</div>
          <h2 className="display mt-4 text-3xl md:text-5xl text-[var(--navy)] max-w-3xl">
            How we decide what to build, and what to leave alone.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.num}
                className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] p-8 rounded-sm"
              >
                <div className="font-serif text-3xl text-[var(--gold)]">{v.num}</div>
                <h3 className="mt-4 text-xl font-serif font-semibold text-[var(--navy)]">
                  {v.title}
                </h3>
                <div className="mt-4 h-px w-10 bg-[var(--gold)]" />
                <p className="mt-4 text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Let&rsquo;s talk"
        title="If any of this sounds like your kind of partner, we should meet."
        description="A short call is the fastest way to see if we are a fit. Bring your messy spreadsheets and your best questions."
      />
    </Layout>
  );
}
