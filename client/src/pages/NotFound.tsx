import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-9">
            <div className="eyebrow">Error 404</div>
            <h1 className="display mt-4 text-5xl md:text-7xl text-[var(--navy)]">
              That page has wandered off.
            </h1>
            <div className="mt-6 h-px w-16 bg-[var(--gold)]" />
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
              The URL you followed either moved or never existed. From here, the homepage is
              probably the shortest route back to what you were looking for.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 h-12 px-6 bg-[var(--navy)] text-[var(--ivory)] font-semibold text-sm rounded-sm hover:bg-[var(--navy-soft)] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 border border-[var(--navy)] text-[var(--navy)] font-semibold text-sm rounded-sm hover:bg-[var(--navy)] hover:text-[var(--ivory)] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
