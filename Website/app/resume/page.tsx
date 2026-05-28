import type { Metadata } from "next";
import { ListCard } from "@/components/ListCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { capabilities } from "@/data/capabilities";
import { education, technicalStack } from "@/data/education";
import { experience } from "@/data/experience";
import { outcomes } from "@/data/outcomes";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description:
    "Zac Rowley resume for strategic operations, Chief of Staff, operational transformation, AI workflows, and commercial problem solving.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <PageHero
        title="Zac Rowley Resume: Strategic Operations, Chief of Staff, and AI Transformation"
        description="A search-readable resume covering strategy, operations, technical systems, venture, commercialization, transformation, and AI-enabled workflow experience."
      />
      <Section title="Summary">
        <p className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
          Strategic operator working across strategy, operations, and technical
          systems to help founders and executive teams solve complex commercial
          and operational problems in high-growth and high-ambiguity
          environments.
        </p>
      </Section>
      <Section title="Selected outcomes">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
            <li
              className="rounded-md border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Capabilities">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <li className="text-sm leading-6 text-[var(--muted)]" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Experience">
        <div className="grid gap-5">
          {experience.map((item) => (
            <article
              className="rounded-lg border border-[var(--line)] bg-white p-6"
              key={item.organization}
            >
              <h2 className="text-xl font-semibold">{item.organization}</h2>
              <p className="mt-2 text-sm font-semibold text-[var(--muted)]">
                {item.role}
              </p>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {item.context}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Education and technical stack">
        <div className="grid gap-5 md:grid-cols-2">
          <ListCard title="Education" items={education} />
          <ListCard title="Technical stack" items={technicalStack} />
        </div>
      </Section>
    </>
  );
}
