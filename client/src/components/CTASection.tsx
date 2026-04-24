import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

/**
 * Shared end-of-page CTA. Navy panel, ivory type, single gold rule, two actions.
 */
export default function CTASection({
  eyebrow = "Ready when you are",
  title = "Pick a product, or book a session.",
  description = "The product suite is live and self-serve. If you would rather talk through the right starting point first, a thirty-minute strategy session is on the table.",
}: Props) {
  return (
    <section className="container py-16 md:py-24">
      <div className="relative overflow-hidden rounded-sm bg-[var(--navy)] text-[var(--ivory)] px-6 py-14 md:px-14 md:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 10%, var(--gold) 0, transparent 40%), radial-gradient(circle at 10% 90%, var(--ivory) 0, transparent 35%)",
          }}
        />
        <div className="relative grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow text-[color:var(--gold)]">{eyebrow}</div>
            <h2 className="display mt-4 text-3xl md:text-5xl">{title}</h2>
            <div className="mt-6 h-px w-16 bg-[var(--gold)]" />
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--ivory)_80%,transparent)]">
              {description}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
            <a
              href={SITE.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[var(--gold)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--gold-soft)] transition-colors"
            >
              Book a strategy session
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[color:color-mix(in_oklch,var(--ivory)_30%,transparent)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[color:color-mix(in_oklch,var(--ivory)_8%,transparent)] transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
