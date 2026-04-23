type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="container pt-14 md:pt-20 pb-10 md:pb-14">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-10 lg:col-span-9">
          <div className="eyebrow fade-up">{eyebrow}</div>
          <h1 className="display fade-up delay-1 mt-4 text-4xl md:text-6xl text-[var(--navy)]">
            {title}
          </h1>
          {description && (
            <>
              <div className="mt-6 h-px w-16 bg-[var(--gold)] fade-up delay-2" />
              <p className="fade-up delay-2 mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:color-mix(in_oklch,var(--navy)_75%,transparent)]">
                {description}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
