type ExperienceCardProps = {
  organization: string;
  role: string;
  context: string;
};

export function ExperienceCard({
  organization,
  role,
  context,
}: ExperienceCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm">
      <p className="text-sm font-semibold text-[var(--muted)]">{organization}</p>
      <h3 className="mt-2 text-xl font-semibold leading-7">{role}</h3>
      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{context}</p>
    </article>
  );
}
