import { Check, Sparkles, Radio, LayoutDashboard } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useMeta } from "@/hooks/useMeta";

const services = [
  {
    id: "ai-strategy",
    num: "01",
    icon: <Sparkles className="h-5 w-5" />,
    title: "AI Strategy & Implementation",
    lede: "Help businesses identify where AI can save time and money, then build the systems that deliver.",
    bullets: [
      "AI tool audits across your existing stack",
      "Workflow automation for repeatable, high-volume tasks",
      "Custom AI assistants trained on your own documents and processes",
      "Change management and team enablement so adoption actually sticks",
    ],
    bestFor: "Small to mid-size businesses ready to adopt AI without the hand-waving.",
  },
  {
    id: "content-systems",
    num: "02",
    icon: <Radio className="h-5 w-5" />,
    title: "Content & Brand Systems",
    lede: "Content machines for people who would rather publish than fiddle with software.",
    bullets: [
      "YouTube channel strategy, from positioning to publishing cadence",
      "Podcast production systems, recording through distribution",
      "Newsletter automation and list growth",
      "Editorial calendar development and SEO-driven blog strategy",
    ],
    bestFor: "Personal brands, thought leaders, and businesses building an audience.",
  },
  {
    id: "digital-operations",
    num: "03",
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Digital Operations",
    lede: "The quiet back-office work that turns scattered effort into a running system.",
    bullets: [
      "Dashboard and analytics setup for the metrics that matter",
      "CRM integration across sales, marketing, and support",
      "Email marketing system design and automation",
      "Project management and workflow design for growing teams",
    ],
    bestFor: "Businesses drowning in manual processes and ready to stop.",
  },
];

export default function Services() {
  useMeta({
    title: "Services",
    description:
      "Three service pillars at Max Farnon Digital: AI Strategy and Implementation, Content and Brand Systems, and Digital Operations.",
    path: "/services",
  });

  return (
    <Layout>
      <PageHeader
        eyebrow="Services"
        title="Practical AI, working systems, measurable results."
        description="Every engagement is scoped around a single question: where can AI and better systems save meaningful time or money? Here is how we help, across three focused pillars."
      />

      <section className="container pb-8">
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-2 h-9 px-4 text-xs font-semibold tracking-wide uppercase border border-[color:color-mix(in_oklch,var(--navy)_20%,transparent)] text-[var(--navy)] hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--ivory)] rounded-sm transition-colors"
            >
              <span className="text-[var(--gold)]">{s.num}</span>
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 ${i > 0 ? "border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]" : ""}`}
        >
          <div className="container py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-5xl text-[var(--gold)] leading-none">
                    {s.num}
                  </span>
                  <span className="flex items-center justify-center h-10 w-10 rounded-sm bg-[color:color-mix(in_oklch,var(--navy)_6%,transparent)] text-[var(--navy)]">
                    {s.icon}
                  </span>
                </div>
                <h2 className="display mt-6 text-3xl md:text-4xl text-[var(--navy)]">
                  {s.title}
                </h2>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                  {s.lede}
                </p>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <ul className="space-y-4">
                  {s.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <span className="mt-1 flex items-center justify-center h-5 w-5 rounded-full bg-[color:color-mix(in_oklch,var(--gold)_22%,transparent)] text-[var(--navy)] shrink-0">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-base leading-relaxed text-[var(--navy)]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-l-2 border-[var(--gold)] pl-5">
                  <div className="eyebrow">Best for</div>
                  <p className="mt-2 text-base font-medium text-[var(--navy)]">
                    {s.bestFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        eyebrow="Start small, move fast"
        title="Not sure which pillar fits?"
        description="Most engagements start with a ninety-minute diagnostic. We map your current workflows, identify two or three high-leverage opportunities, and recommend a pragmatic next step."
      />
    </Layout>
  );
}
