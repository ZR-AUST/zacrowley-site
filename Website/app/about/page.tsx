import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Zac Rowley",
  description:
    "About Zac Rowley, a strategic operator across technology, operations, commercial problem solving, and transformation.",
  path: "/about",
});

const operatingStyle = [
  "Systems thinker",
  "Commercially pragmatic",
  "High-trust executive operator",
  "Technically fluent",
  "Strong in ambiguity",
  "Calm under pressure",
  "Outcome-oriented",
  "Able to bridge technical, operational, commercial, and executive stakeholders",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Strategic Operator Across Technology, Operations, and Transformation"
        description="I work best in environments where the problems are unclear, the systems are messy, and the stakes are commercially meaningful."
      />
      <Section title="Professional narrative">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          <p>
            Across venture-backed startups, enterprise environments, operational
            investigations, and transformation initiatives, my role has
            typically been to identify root causes, improve visibility, align
            stakeholders, and execute practical solutions.
          </p>
          <p>
            The common thread is operating where strategy, technical systems,
            commercial constraints, and execution all need to be understood
            together. I help turn complex operating environments into clearer
            decisions, better workflows, and more reliable execution.
          </p>
        </div>
      </Section>
      <Section title="Operating style">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {operatingStyle.map((item) => (
            <li
              className="rounded-md border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
