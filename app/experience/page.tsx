import type { Metadata } from "next";
import { ListCard } from "@/components/ListCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { experience } from "@/data/experience";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Zac Rowley's experience across Apple, venture capital, startups, operational transformation, and AI-enabled commercial workflows.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Experience Across Apple, Venture Capital, Startups, and Operational Transformation"
        description="Structured work across enterprise technology, high-growth startups, venture assessment, commercial operations, and forensic transformation workflows."
      />
      <div className="divide-y divide-[var(--line)]">
        {experience.map((item) => (
          <Section
            description={item.context}
            key={item.organization}
            title={item.organization}
          >
            <div className="grid gap-5 lg:grid-cols-3">
              <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Role</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[var(--foreground)]">
                  {item.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {item.context}
                </p>
              </article>
              <ListCard
                title="Key responsibilities"
                items={item.responsibilities}
              />
              <ListCard title="Selected outcomes" items={item.outcomes} />
            </div>
            {item.technologies ? (
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-[var(--muted)]">
                  Technologies and stakeholders
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <li
                      className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-sm text-[var(--muted)]"
                      key={tech}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Section>
        ))}
      </div>
    </>
  );
}
