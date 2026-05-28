import Link from "next/link";
import { navItems } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(251,251,250,0.92)] backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <Link className="focus-ring text-sm font-semibold tracking-wide" href="/">
          Zac Rowley
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.slice(1).map((item) => (
            <Link
              className="focus-ring text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="focus-ring rounded-md border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-neutral-300"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
