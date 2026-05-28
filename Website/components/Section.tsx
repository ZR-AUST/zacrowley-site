type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-normal text-[var(--foreground)] md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
