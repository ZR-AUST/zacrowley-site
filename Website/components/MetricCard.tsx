type MetricCardProps = {
  value: string;
};

export function MetricCard({ value }: MetricCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm">
      <p className="text-lg font-semibold leading-7 text-[var(--foreground)]">
        {value}
      </p>
    </article>
  );
}
