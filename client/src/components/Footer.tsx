import { Link } from "wouter";
import { Linkedin, Youtube, Twitter, ArrowUpRight } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

/**
 * Footer: four columns on desktop (brand, nav, connect, empower). Navy background, ivory type.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-[var(--navy)] text-[var(--ivory)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex items-center justify-center h-10 w-10 rounded-sm bg-[var(--ivory)] text-[var(--navy)] font-serif font-semibold text-lg">
                M
              </span>
              <span className="font-serif text-xl font-semibold">Max Farnon Digital</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[color:color-mix(in_oklch,var(--ivory)_75%,transparent)]">
              A small product studio building AI-powered SaaS tools for contractors, tradespeople, and owner-operators. Advisory on the side, when you want it.
            </p>
            <p className="mt-4 text-sm text-[color:color-mix(in_oklch,var(--ivory)_70%,transparent)]">
              {SITE.location}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-[color:var(--gold)]">Navigate</div>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color:color-mix(in_oklch,var(--ivory)_85%,transparent)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-[color:var(--gold)]">Connect</div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={SITE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[color:color-mix(in_oklch,var(--ivory)_85%,transparent)] hover:text-[var(--gold)] transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[color:color-mix(in_oklch,var(--ivory)_85%,transparent)] hover:text-[var(--gold)] transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={SITE.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[color:color-mix(in_oklch,var(--ivory)_85%,transparent)] hover:text-[var(--gold)] transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-[color:color-mix(in_oklch,var(--ivory)_85%,transparent)] hover:text-[var(--gold)] transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-[color:var(--gold)]">Also</div>
            <a
              href={SITE.empowerOver50Url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 group inline-flex flex-col gap-1 text-sm text-[color:color-mix(in_oklch,var(--ivory)_90%,transparent)] hover:text-[var(--gold)] transition-colors"
            >
              <span className="flex items-center gap-1.5">
                Founder of Empower Over 50
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="text-xs text-[color:color-mix(in_oklch,var(--ivory)_60%,transparent)]">
                Work, identity, and community after 50.
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[color:color-mix(in_oklch,var(--ivory)_15%,transparent)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[color:color-mix(in_oklch,var(--ivory)_60%,transparent)]">
          <div>&copy; {year} Max Farnon Digital. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">
              Privacy
            </Link>
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
