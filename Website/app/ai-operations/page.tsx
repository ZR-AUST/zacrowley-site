import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { aiCapabilities } from "@/data/capabilities";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Operations",
  description:
    "AI-enabled operational workflows and business transformation support focused on visibility, analysis, automation, and executive decision-making.",
  path: "/ai-operations",
});

export default function AiOperationsPage() {
  return (
    <>
      <PageHero
        title="AI-Enabled Operational Workflows and Business Transformation"
        description="This is not about generic AI adoption. It is about using AI to improve operational visibility, accelerate analysis, reduce manual work, and support better executive decision-making."
      />
      <Section
        title="Practical AI workflow capability"
        description="The useful work is usually closer to operations than marketing: structuring messy information, speeding up analysis, reducing repetitive review, and making leadership decisions better supported by evidence."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiCapabilities.map((item) => (
            <li
              className="rounded-lg border border-[var(--line)] bg-white p-5 text-sm font-medium leading-6"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="How the work is framed">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          <p>
            AI-enabled operations work starts with the business problem: where
            information is fragmented, where manual review is slowing the team
            down, where executives lack visibility, or where repeatable
            workflows can improve the quality of decisions.
          </p>
          <p>
            The output is not a generic AI strategy deck. It is clearer
            operating data, better analysis, practical workflow design, and
            improved decision support for commercial and operational priorities.
          </p>
        </div>
      </Section>
    </>
  );
}
