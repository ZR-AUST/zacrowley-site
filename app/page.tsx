import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { MetricCard } from "@/components/MetricCard";
import { Section } from "@/components/Section";
import { capabilities } from "@/data/capabilities";
import { homeExperience } from "@/data/experience";
import { outcomes } from "@/data/outcomes";

export default function Home() {
  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="text-sm font-semibold text-[var(--muted)]">
            Strategic Operations | Chief of Staff | Transformation |
            AI-Enabled Workflows
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-normal md:text-7xl">
            Zac Rowley
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--foreground)]">
            I work across strategy, operations, and technical systems to help
            founders and executive teams solve complex commercial and
            operational problems in high-growth and high-ambiguity
            environments.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] md:text-lg">
            My work typically sits at the intersection of operational
            transformation, executive special projects, AI-enabled workflows,
            governance, commercialization, and cross-functional execution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring rounded-md bg-[var(--foreground)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-800"
              href="/resume"
            >
              View Resume
            </Link>
            <Link
              className="focus-ring rounded-md border border-[var(--line)] bg-white px-5 py-3 text-center text-sm font-semibold transition hover:border-neutral-300"
              href="/contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Selected outcomes"
        title="Operational and commercial work with measurable scope."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <MetricCard key={outcome} value={outcome} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Capabilities"
        title="Where strategy, execution, systems, and commercial judgment meet."
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <li
              className="rounded-md border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium"
              key={capability}
            >
              {capability}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Experience snapshot"
        title="Experience across enterprise technology, venture, startups, and transformation."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {homeExperience.map((item) => (
            <ExperienceCard
              context={item.context}
              key={item.organization}
              organization={item.organization}
              role={item.role}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
