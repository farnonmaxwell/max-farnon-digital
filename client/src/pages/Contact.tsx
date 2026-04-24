import { useState } from "react";
import { Mail, Linkedin, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useMeta } from "@/hooks/useMeta";
import { SITE } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  useMeta({
    title: "Contact",
    description:
      "Get in touch with Max Farnon Digital. Send a message, book a strategy call, or connect on LinkedIn.",
    path: "/contact",
  });

  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // If Formspree endpoint is still the placeholder, short-circuit with a friendly success
    // so the form can be demoed without live wiring. Replace SITE.formspreeEndpoint to enable.
    const isPlaceholder = SITE.formspreeEndpoint.includes("your-form-id");
    setStatus("submitting");

    if (isPlaceholder) {
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      toast.success("Message received. We will reply within one business day.");
      form.reset();
      return;
    }

    try {
      const res = await fetch(SITE.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        toast.success("Message sent. We will reply within one business day.");
        form.reset();
      } else {
        setStatus("error");
        toast.error("Something went wrong. Please try email instead.");
      }
    } catch {
      setStatus("error");
      toast.error("Network error. Please try email instead.");
    }
  }

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Let&rsquo;s start a useful conversation."
        description="Tell us a little about your business and what you are trying to solve. We will reply within one business day, typically sooner."
      />

      <section className="container pb-12">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Form */}
          <div className="md:col-span-7">
            {status === "success" ? (
              <div className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-10">
                <CheckCircle2 className="h-8 w-8 text-[var(--gold)]" />
                <h2 className="display mt-4 text-2xl md:text-3xl text-[var(--navy)]">
                  Thank you. Your message is on its way.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                  We will reply within one business day. In the meantime, feel free to book a time
                  directly using the scheduler below.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 h-11 px-5 border border-[var(--navy)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--navy)] hover:text-[var(--ivory)] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-6 md:p-10"
              >
                <div className="eyebrow">Send a message</div>
                <h2 className="display mt-3 text-2xl md:text-3xl text-[var(--navy)]">
                  Write to us.
                </h2>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" type="text" required autoComplete="name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                  <Field label="Company" name="company" type="text" autoComplete="organization" />
                  <div>
                    <label className="eyebrow text-[var(--navy)]" htmlFor="service">
                      Reason for reaching out
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue="product-question"
                      className="mt-2 h-11 w-full bg-transparent border border-[color:color-mix(in_oklch,var(--navy)_18%,transparent)] px-3 text-sm text-[var(--navy)] rounded-sm focus:outline-none focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--gold)]/40"
                    >
                      <option value="product-question">Question about a specific product</option>
                      <option value="strategy-session">Book a strategy session</option>
                      <option value="white-label">White-label or reseller inquiry</option>
                      <option value="press-partnerships">Press, podcast, or partnership</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="eyebrow text-[var(--navy)]" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you trying to solve?"
                    className="mt-2 w-full bg-transparent border border-[color:color-mix(in_oklch,var(--navy)_18%,transparent)] p-3 text-sm text-[var(--navy)] rounded-sm focus:outline-none focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--gold)]/40 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-8 inline-flex items-center gap-2 h-12 px-6 bg-[var(--navy)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[var(--navy-soft)] transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="mt-4 text-xs text-[color:color-mix(in_oklch,var(--navy)_60%,transparent)]">
                  By submitting, you agree to be contacted about your inquiry. We will not share
                  your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact details */}
          <aside className="md:col-span-5 space-y-6">
            <div className="bg-[var(--card)] border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] rounded-sm p-8">
              <div className="eyebrow">Direct</div>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-1 text-[var(--gold)] shrink-0" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[var(--navy)] font-medium hover:text-[var(--gold)] transition-colors"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="h-4 w-4 mt-1 text-[var(--gold)] shrink-0" />
                  <a
                    href={SITE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--navy)] font-medium hover:text-[var(--gold)] transition-colors"
                  >
                    LinkedIn / Max Farnon
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-[var(--gold)] shrink-0" />
                  <span className="text-[var(--navy)]">{SITE.location}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--navy)] text-[var(--ivory)] rounded-sm p-8">
              <div className="eyebrow text-[var(--gold)]">Book directly</div>
              <h3 className="mt-3 font-serif text-2xl">
                Grab a 30-minute strategy session.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--ivory)_80%,transparent)]">
                Pick a time that works for you. No prep required.
              </p>
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 h-11 px-5 bg-[var(--gold)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--gold-soft)] transition-colors"
              >
                Open scheduler
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="eyebrow">Schedule a call</div>
              <h2 className="display mt-4 text-3xl md:text-5xl text-[var(--navy)]">
                Pick a time below.
              </h2>
            </div>
            <div className="md:col-span-4 text-sm text-[color:color-mix(in_oklch,var(--navy)_70%,transparent)] leading-relaxed">
              Calls are held over Zoom. You will receive a confirmation and a brief intake form
              after you book.
            </div>
          </div>

          <div className="mt-10 rounded-sm overflow-hidden border border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] bg-[var(--card)]">
            {/*
              Calendly embed (placeholder URL in SITE.calendlyUrl).
              When the real Calendly link is available, it will load inside this iframe.
            */}
            <iframe
              title="Calendly scheduling"
              src={SITE.calendlyUrl}
              className="w-full min-h-[720px] bg-[var(--card)]"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-[color:color-mix(in_oklch,var(--navy)_55%,transparent)]">
            Scheduler not loading? Visit{" "}
            <a
              href={SITE.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--gold)] decoration-2 underline-offset-4 hover:text-[var(--gold)]"
            >
              the booking page
            </a>{" "}
            directly.
          </p>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-[var(--navy)]" htmlFor={name}>
        {label}
        {required && <span className="text-[var(--gold)] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 h-11 w-full bg-transparent border border-[color:color-mix(in_oklch,var(--navy)_18%,transparent)] px-3 text-sm text-[var(--navy)] rounded-sm focus:outline-none focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--gold)]/40"
      />
    </div>
  );
}
