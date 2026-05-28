type ListCardProps = {
  title: string;
  items: string[];
};

export function ListCard({ title, items }: ListCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
