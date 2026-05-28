import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Zac Rowley for strategic operations, transformation, advisory, or special-project work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Zac Rowley"
        description="For strategic operations, transformation, advisory, or special-project work, get in touch."
      />
      <Section title="Contact details">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-[var(--line)] bg-white p-6">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {site.email}
            </p>
          </article>
          <article className="rounded-lg border border-[var(--line)] bg-white p-6">
            <h2 className="text-lg font-semibold">LinkedIn</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {site.linkedin}
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
