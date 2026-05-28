import { site } from "@/lib/site";

const contactFields = {
  ...(site.email.includes("@") ? { email: site.email } : {}),
  ...(site.linkedin.startsWith("https://") ? { sameAs: [site.linkedin] } : {}),
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zac Rowley",
  url: site.url,
  ...contactFields,
  jobTitle:
    "Strategic Operator, Chief of Staff, Operations and AI Workflow Advisor",
  knowsAbout: [
    "Strategic operations",
    "Chief of Staff",
    "Operational transformation",
    "AI-enabled workflows",
    "Executive special projects",
    "Commercial analysis",
    "Governance analysis",
    "Venture capital",
    "Startup operations",
    "Technical systems",
  ],
  description:
    "Zac Rowley works across strategy, operations, and technical systems to help founders and executive teams solve complex commercial and operational problems in high-growth and high-ambiguity environments.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en-AU",
  publisher: {
    "@type": "Person",
    name: "Zac Rowley",
  },
};
