import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { consultingCapabilities } from "@/data/capabilities";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Consulting",
  description:
    "Strategic operations, executive special projects, operational transformation, AI workflow integration, and founder support from Zac Rowley.",
  path: "/consulting",
});

const idealClients = [
  "Founder-led businesses",
  "Venture-backed companies",
  "Operationally complex businesses",
  "Companies implementing AI-enabled workflows",
  "Businesses facing commercial, operational, or governance complexity",
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        title="Strategic Operations and AI-Enabled Transformation Support"
        description="Practical support for founders, CEOs, and leadership teams navigating operational complexity, commercial ambiguity, and technical change."
      />
      <Section
        title="Consulting and advisory focus"
        description="Support typically sits close to the executive team: clarifying priorities, improving operating visibility, building workflows, and helping move complex work from analysis to execution."
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {consultingCapabilities.map((item) => (
            <li
              className="rounded-md border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Ideal clients">
        <ul className="grid gap-4 md:grid-cols-2">
          {idealClients.map((item) => (
            <li
              className="rounded-lg border border-[var(--line)] bg-white p-5 text-base font-medium"
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
