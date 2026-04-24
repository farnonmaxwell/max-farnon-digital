import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

/**
 * Editorial sticky header, left-anchored logo, right-aligned nav with gold underline on active.
 * Collapses to a full-screen sheet on mobile.
 */
export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--ivory)]/90 backdrop-blur-md border-b border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center h-9 w-9 rounded-sm bg-[var(--navy)] text-[var(--ivory)] font-serif font-semibold text-lg">
            M
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif font-semibold text-[var(--navy)] text-lg">
              Max Farnon
            </span>
            <span className="eyebrow text-[10px] -mt-0.5">Digital</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? location === "/"
                : location.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  active
                    ? "text-[var(--navy)]"
                    : "text-[color:color-mix(in_oklch,var(--navy)_70%,transparent)] hover:text-[var(--navy)]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[var(--gold)]" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center h-10 px-5 text-sm font-semibold bg-[var(--navy)] text-[var(--ivory)] hover:bg-[var(--navy-soft)] transition-colors rounded-sm"
          >
            Book a session
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 flex items-center justify-center text-[var(--navy)]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:color-mix(in_oklch,var(--navy)_12%,transparent)] bg-[var(--ivory)]">
          <nav className="container flex flex-col py-4">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? location === "/"
                  : location.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-base font-medium border-b border-[color:color-mix(in_oklch,var(--navy)_8%,transparent)] flex items-center justify-between ${
                    active ? "text-[var(--navy)]" : "text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center h-11 px-5 text-sm font-semibold bg-[var(--navy)] text-[var(--ivory)] rounded-sm"
            >
              Book a session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
