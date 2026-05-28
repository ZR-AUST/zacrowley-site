export type Experience = {
  organization: string;
  role: string;
  context: string;
  responsibilities: string[];
  outcomes: string[];
  technologies?: string[];
};

export const experience: Experience[] = [
  {
    organization: "Apple",
    role: "Human Factors Engineer, Worldwide Hardware Engineering",
    context:
      "Built APAC operational testing infrastructure supporting early wearable and health technology initiatives.",
    responsibilities: [
      "Established operational processes for hardware research and human factors testing.",
      "Coordinated cross-functional testing activity across engineering, operations, and regional stakeholders.",
      "Improved data capture, quality control, participant operations, and reporting workflows.",
    ],
    outcomes: [
      "Established 3 APAC Apple R&D labs.",
      "Captured 80,000+ operational datasets.",
      "Supported early wearable and health technology initiatives with reliable regional infrastructure.",
    ],
    technologies: [
      "Hardware research",
      "Human factors",
      "Operational data",
      "Engineering operations",
    ],
  },
  {
    organization: "Aerologix",
    role: "Chief of Staff / Strategic Operations",
    context:
      "Supported scale-up of drone operations and aerial intelligence platform, including commercialization, governance, and special projects.",
    responsibilities: [
      "Supported executive priorities across strategy, commercial operations, governance, and execution.",
      "Built operating visibility across pilots, customers, platform activity, and field operations.",
      "Contributed to commercialization and operational planning for a national drone pilot network.",
    ],
    outcomes: [
      "Supported a 40,000+ drone pilot operational network.",
      "Improved executive visibility across operational and commercial priorities.",
      "Helped translate technical platform capability into commercial and operational workflows.",
    ],
    technologies: [
      "Drone operations",
      "Aerial intelligence",
      "Governance",
      "Commercial operations",
    ],
  },
  {
    organization: "VU Venture Partners",
    role: "Principal to Venture Partner",
    context:
      "Assessed startups and supported early-stage investment deployment across healthtech, fintech, AI, and mobility.",
    responsibilities: [
      "Reviewed startup opportunities across markets, teams, products, traction, and financing context.",
      "Prepared investment analysis, diligence materials, and commercial viewpoints for decision-making.",
      "Worked across sectors where technical depth and commercial judgment both mattered.",
    ],
    outcomes: [
      "Assessed 3,000+ startups.",
      "Supported early-stage investment deployment across multiple sectors.",
      "Built pattern recognition across venture-backed operating models and commercialization paths.",
    ],
    technologies: ["Healthtech", "Fintech", "AI", "Mobility", "Venture capital"],
  },
  {
    organization: "Mint Invest",
    role: "Consultant, Product, Revenue & Operations",
    context:
      "Supported CEO across revenue, product, analytics, and operations in a property technology and buyers agent environment.",
    responsibilities: [
      "Supported product, revenue, analytics, and operational priorities across the business.",
      "Built commercial analysis and operating visibility to support leadership decisions.",
      "Worked across customer, transaction, and operational workflows.",
    ],
    outcomes: [
      "Closed or supported $7.5M+ transactions in 8 months.",
      "Improved commercial reporting and operating cadence.",
      "Supported practical execution across revenue, product, and operations.",
    ],
    technologies: ["Property technology", "Revenue operations", "Analytics", "CRM"],
  },
  {
    organization: "Strategic Operations & Forensic Transformation",
    role: "Operational Transformation and Investigation Workflows",
    context:
      "Led AI-enabled commercial audit and forensic financial investigation workflows supporting executive and legal decision-making.",
    responsibilities: [
      "Structured fragmented operational and financial records into decision-ready analysis.",
      "Used AI-enabled workflows to accelerate document review, reconciliation, and issue identification.",
      "Translated complex records into clear executive and legal-facing summaries.",
    ],
    outcomes: [
      "Analyzed 6 years of enterprise operational records.",
      "Supported executive and legal decision-making with structured evidence and analysis.",
      "Reduced manual review burden across commercial audit and investigation workflows.",
    ],
    technologies: [
      "AI-assisted analysis",
      "Document extraction",
      "Financial reconciliation",
      "Executive reporting",
    ],
  },
  {
    organization: "BCG / Digital Ventures",
    role: "Strategy, Venture, and Operations Exposure",
    context:
      "Worked around venture-building, commercial strategy, and operational problem solving in high-ambiguity settings.",
    responsibilities: [
      "Supported structured thinking across venture, product, and commercial questions.",
      "Contributed to analysis and execution planning across ambiguous business problems.",
      "Worked with stakeholders balancing strategic, technical, and operational constraints.",
    ],
    outcomes: [
      "Built operating range across advisory, startup, and corporate venture environments.",
      "Strengthened ability to move from analysis to practical execution.",
    ],
    technologies: ["Venture building", "Commercial strategy", "Product strategy"],
  },
  {
    organization: "Road Smart Fleet",
    role: "Operations, Systems, and Commercial Support",
    context:
      "Supported operational and commercial work in a fleet and road safety environment.",
    responsibilities: [
      "Worked across operational systems, customer needs, and commercial delivery.",
      "Improved visibility into workflows, process issues, and business priorities.",
      "Supported practical execution where reliability and stakeholder alignment mattered.",
    ],
    outcomes: [
      "Built experience across operationally complex service delivery environments.",
      "Supported clearer execution across systems, operations, and commercial requirements.",
    ],
    technologies: ["Fleet operations", "Road safety", "Operational systems"],
  },
];

export const homeExperience = experience.slice(0, 5);
