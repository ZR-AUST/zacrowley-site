import Link from "next/link";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="text-sm font-semibold">Zac Rowley</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
            Strategic operations, executive special projects, operational
            transformation, and AI-enabled workflows.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          {navItems.map((item) => (
            <Link
              className="focus-ring text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
