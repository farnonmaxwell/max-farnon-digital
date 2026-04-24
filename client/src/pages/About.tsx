import { User } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";

const values = [
  {
    num: "01",
    title: "Built by an operator",
    desc: "Every product starts from a problem I have personally lived inside a small business, not a pitch deck. If it would not help a real owner on a Tuesday morning, it does not ship.",
  },
  {
    num: "02",
    title: "Priced to pay for itself",
    desc: "Small businesses do not need another enterprise contract. Tools are priced so one saved hour, one closed proposal, or one recovered invoice covers the month.",
  },
  {
    num: "03",
    title: "Advisory without the agency",
    desc: "Strategy sessions exist for people who want a second opinion or a rollout plan. They are not the main offer, and they never turn into a twelve-month retainer by default.",
  },
];

export default function About() {
  useMeta({
    title: "About Max Farnon",
    description:
      "Max Farnon is a product builder and AI strategist focused on small businesses. Thirty years operating experience, now channelled into a suite of SaaS tools.",
    path: "/about",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="About"
        title="From agency owner to product builder."
        description="Max Farnon Digital used to be an agency. It is now a small product studio that ships AI-powered tools for the people who actually run small businesses, with advisory on the side."
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
                <div className="mt-4 eyebrow">Portrait</div>
                <div className="mt-1 text-xs text-[color:color-mix(in_oklch,var(--navy)_60%,transparent)]">
                  Professional headshot coming soon
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-serif text-sm text-[var(--gold)]">M.F.</span>
                <span className="text-xs text-[color:color-mix(in_oklch,var(--navy)_65%,transparent)]">
                  Writing from Pennsylvania, New York, Florida, and Cheshire.
                </span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-8 space-y-6 text-[17px] leading-[1.75] text-[var(--navy)]">
            <p>
              Max Farnon spent more than thirty years running, building, and fixing small and mid-size businesses. Operations, management, marketing, people, numbers, and the unglamorous middle ground where most real work gets done.
            </p>
            <p>
              A career disruption in his mid-fifties forced a rebuild. Instead of reopening the same agency model, Max leaned into what he had been quietly learning for years: AI, automation, and the belief that small businesses deserve the same operating leverage that enterprises quietly buy for themselves.
            </p>
            <p>
              Max Farnon Digital today is a small product studio. It ships a focused suite of SaaS tools for contractors, tradespeople, and owner-operators, with a sister line of products under the Empower Over 50 brand. The work he does for clients now sits behind the products, not in place of them.
            </p>
            <p>
              Consulting and advisory are still offered, but only as a side door. The main offer is the tools. When a business wants a second set of eyes on the stack, a rollout plan, or a tailored AI workflow, a strategy session is the fastest way in.
            </p>
            <p>
              Outside the studio, Max writes books, including{" "}
              <span className="italic">A Beginner&rsquo;s Guide to AI</span> and{" "}
              <span className="italic">Coming Home After 50</span>, records music from a home studio in Pennsylvania, and runs{" "}
              <a
                href="https://empowerover50.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--navy)] underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:text-[var(--gold)] transition-colors"
              >
                Empower Over 50
              </a>
              , a platform and product line for people navigating work, identity, and community after fifty.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] mt-16">
        <div className="container py-16 md:py-24">
          <div className="eyebrow">Operating principles</div>
          <h2 className="display mt-4 text-3xl md:text-5xl text-[var(--navy)] max-w-3xl">
            How we decide what to ship, and what to leave on the cutting room floor.
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
        title="Questions about the tools, or about getting set up?"
        description="A short call is the fastest way to see if any of this fits your situation. Bring your messy spreadsheets and your best questions."
      />
    </Layout>
  );
}
