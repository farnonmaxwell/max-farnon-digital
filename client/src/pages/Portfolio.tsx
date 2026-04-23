import { ArrowRight, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";

type CaseStudy = {
  num: string;
  title: string;
  tagline: string;
  challenge: string;
  approach: string;
  results: string[];
  tech: string[];
  status: "Live" | "In Progress" | "Coming Soon";
  href?: string;
};

const caseStudies: CaseStudy[] = [
  {
    num: "01",
    title: "Empower Over 50",
    tagline: "A content ecosystem for people navigating work and identity after fifty.",
    challenge:
      "Build a credible public platform from scratch, across YouTube, podcast, newsletter, and community, with a single operator and a finite number of hours each week.",
    approach:
      "Designed an AI-augmented content pipeline that turns a single long-form recording into a YouTube video, a podcast episode, a newsletter, and short social edits. Editorial stays human; repetitive production work is automated.",
    results: [
      "Launched across four channels in under a quarter",
      "Weekly publishing cadence sustained by a single operator",
      "Community foundations in place for future membership and programs",
    ],
    tech: ["YouTube", "Descript", "Beehiiv", "Notion", "ChatGPT", "Claude", "Zapier"],
    status: "Live",
    href: "https://empowerover50.com",
  },
  {
    num: "02",
    title: "Second Act Navigator",
    tagline: "An AI-powered career assessment tool for adults 50 and over.",
    challenge:
      "Give professionals over fifty a private, honest way to explore a career reset, without surrendering their story to generic personality tests or opaque algorithms.",
    approach:
      "Designed a structured assessment flow that combines a values and strengths inventory with a guided AI conversation. Outputs include a personalized next-step plan and suggested roles, with the user always in control of the narrative.",
    results: [
      "Prototype shipped with end-to-end assessment flow",
      "Guided AI conversation tuned for reflection, not prescription",
      "Roadmap prepared for coaching and community integrations",
    ],
    tech: ["Next.js", "OpenAI", "Supabase", "Tailwind", "Vercel"],
    status: "In Progress",
  },
  {
    num: "03",
    title: "Your Project Here",
    tagline: "Placeholder for an upcoming client engagement.",
    challenge:
      "Reserved slot for an upcoming case study. Recent engagements have focused on small teams adopting AI for customer operations, content production, and reporting.",
    approach:
      "Typical engagements start with a ninety-minute diagnostic, followed by a focused four to eight week build, followed by a light-touch retainer for iteration.",
    results: [
      "Metrics captured from day one",
      "Documentation and team enablement included",
      "Handover designed so your team can own the system",
    ],
    tech: ["To be confirmed with the client"],
    status: "Coming Soon",
  },
];

function StatusPill({ status }: { status: CaseStudy["status"] }) {
  const styles: Record<CaseStudy["status"], string> = {
    Live: "bg-[color:color-mix(in_oklch,var(--gold)_22%,transparent)] text-[var(--navy)]",
    "In Progress": "bg-[color:color-mix(in_oklch,var(--navy)_10%,transparent)] text-[var(--navy)]",
    "Coming Soon":
      "bg-transparent text-[color:color-mix(in_oklch,var(--navy)_60%,transparent)] border border-dashed border-[color:color-mix(in_oklch,var(--navy)_25%,transparent)]",
  };
  return (
    <span
      className={`inline-flex items-center h-6 px-2.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function Portfolio() {
  useMeta({
    title: "Case Studies",
    description:
      "A selection of work from Max Farnon Digital, including Empower Over 50 and Second Act Navigator.",
    path: "/portfolio",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="Case Studies"
        title="Selected work, honest outcomes."
        description="A small, deliberately chosen set of engagements. Each one represents a different slice of what Max Farnon Digital tends to do best: content ecosystems, AI-assisted products, and quiet operational infrastructure."
      />

      <section className="container pb-8">
        <div className="space-y-8 md:space-y-10">
          {caseStudies.map((c) => (
            <article
              key={c.num}
              className="group bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-8 md:p-12 hover:border-[var(--navy)] transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl text-[var(--gold)] leading-none">
                      {c.num}
                    </span>
                    <StatusPill status={c.status} />
                  </div>
                  <h2 className="display mt-6 text-2xl md:text-3xl text-[var(--navy)]">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_72%,transparent)]">
                    {c.tagline}
                  </p>
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                    >
                      Visit project
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <div className="md:col-span-8 space-y-6">
                  <div>
                    <div className="eyebrow">Challenge</div>
                    <p className="mt-2 text-[var(--navy)] leading-relaxed">{c.challenge}</p>
                  </div>
                  <div className="hairline" />
                  <div>
                    <div className="eyebrow">Approach</div>
                    <p className="mt-2 text-[var(--navy)] leading-relaxed">{c.approach}</p>
                  </div>
                  <div className="hairline" />
                  <div>
                    <div className="eyebrow">Results</div>
                    <ul className="mt-3 space-y-2">
                      {c.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                          <span className="text-[var(--navy)]">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hairline" />
                  <div>
                    <div className="eyebrow flex items-center gap-2">
                      <Layers className="h-3.5 w-3.5" /> Technologies
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center h-7 px-3 text-xs font-medium text-[var(--navy)] bg-[color:color-mix(in_oklch,var(--navy)_5%,transparent)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Next engagement"
        title="There is room on the roster."
        description="We take on a small number of engagements each quarter so every client gets real attention. If the fit looks right, we will say so. If it does not, we will say that too."
      />
    </Layout>
  );
}
