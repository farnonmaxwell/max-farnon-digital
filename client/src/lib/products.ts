// Central product catalog for Max Farnon Digital.
// Each MFD product is both a product listing and a portfolio case study.

export type ProductGroup =
  | "For Contractors & Trades"
  | "For Business Owners"
  | "For Agencies & Consultants";

export type Product = {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  url: string;
  group: ProductGroup;
  audience: string;
  capabilities: string[];
  status: "Live";
};

export const PRODUCTS: Product[] = [
  {
    id: "job-cost-tracker-pro",
    num: "01",
    name: "Job Cost Tracker Pro",
    tagline: "Real-time job costing for contractors.",
    description:
      "A lightweight cost tracker that tells contractors whether a job is bleeding money today, not at the end of the month. Logs labor, materials, and overhead against live estimates so the crew can adjust before a job turns into a loss.",
    price: "$35 / month",
    url: "https://jobcostpro-ahakfw2p.manus.space",
    group: "For Contractors & Trades",
    audience: "General contractors, remodelers, and specialty trades running two to twenty active jobs.",
    capabilities: [
      "Live labor, material, and overhead tracking",
      "Estimate vs. actual variance in plain language",
      "Mobile-friendly cost entry from the job site",
      "Daily and weekly margin alerts",
    ],
    status: "Live",
  },
  {
    id: "service-proposal-builder",
    num: "02",
    name: "Service Proposal Builder",
    tagline: "Trade-specific proposals with e-signature.",
    description:
      "Proposal templates built for real trades, with line items, scope language, and terms that close work instead of scaring off buyers. Send, sign, and accept without bouncing between three other tools.",
    price: "$39 / month or $99 one-time",
    url: "https://servpropos-dcpw55j6.manus.space",
    group: "For Contractors & Trades",
    audience: "HVAC, plumbing, electrical, landscaping, and home services operators.",
    capabilities: [
      "Trade-specific templates with editable scopes",
      "Inline e-signature with a time-stamped audit trail",
      "Deposit and payment terms baked in",
      "Auto-fill from repeat customer and line-item libraries",
    ],
    status: "Live",
  },
  {
    id: "local-service-lead-generator",
    num: "03",
    name: "Local Service Lead Generator",
    tagline: "White-label lead sites for any trade and city.",
    description:
      "Spin up a fast, SEO-ready lead-capture site for any trade and city pairing, then hand it off under your own brand. Designed for agencies and operators who resell local lead generation as a service.",
    price: "$500 to $2,000 setup plus $99 / month",
    url: "https://localleadgen-d5cexpuu.manus.space",
    group: "For Agencies & Consultants",
    audience: "Local SEO shops, marketing agencies, and operators stacking service-area assets.",
    capabilities: [
      "One-click spin up for trade plus city pairings",
      "White-label branding and custom domain",
      "Lead routing to CRM, email, or SMS",
      "On-page SEO scaffolding and schema",
    ],
    status: "Live",
  },
  {
    id: "franchise-unit-analyzer",
    num: "04",
    name: "Franchise Unit Analyzer",
    tagline: "Expansion analysis with benchmarks and scoring.",
    description:
      "A structured way to evaluate a new franchise unit before the lease is signed. Runs location, demographic, and operating-cost inputs against benchmarks and returns a readable score with the reasons behind it.",
    price: "$79 one-time or $29 / month",
    url: "https://franchanaly-ubex5pnk.manus.space",
    group: "For Business Owners",
    audience: "Multi-unit operators, franchisees evaluating expansion, and franchise consultants.",
    capabilities: [
      "Location and demographic scoring",
      "Cost and payback modeling",
      "Side-by-side comparison of candidate units",
      "Exportable report for partners and lenders",
    ],
    status: "Live",
  },
  {
    id: "money-in",
    num: "05",
    name: "Money In, Cash Flow Command Center",
    tagline: "Invoice tracking, AI risk scoring, and collection automation.",
    description:
      "Pulls your open invoices into one view, scores which ones are likely to go late, and runs polite, automated follow-ups so money actually shows up. Built for owners who are tired of chasing payments on a Saturday.",
    price: "$19 to $29 / month",
    url: "https://moneyinapp-e3e4y6re.manus.space",
    group: "For Business Owners",
    audience: "Service businesses, consultancies, and small firms carrying more than a handful of open invoices.",
    capabilities: [
      "Unified invoice and aging view",
      "AI risk scoring on likely late payers",
      "Scheduled, tone-tuned reminder sequences",
      "Weekly cash-in forecast",
    ],
    status: "Live",
  },
  {
    id: "ai-content-marketplace",
    num: "06",
    name: "AI Content Systems Marketplace",
    tagline: "Content playbooks for business owners.",
    description:
      "A library of content playbooks that business owners can actually run, not theory decks. Each playbook includes prompts, templates, and a publishing cadence tuned for a specific audience and channel.",
    price: "$47 to $197 per playbook",
    url: "https://aicontenthub-b6rnknnz.manus.space",
    group: "For Business Owners",
    audience: "Owner-operators and solo marketers who publish on YouTube, LinkedIn, or email.",
    capabilities: [
      "Ready-to-run prompts and templates",
      "Channel-specific publishing cadences",
      "Repurposing flows across video, audio, and text",
      "New playbooks added on a regular cadence",
    ],
    status: "Live",
  },
];

export const PRODUCT_GROUPS: ProductGroup[] = [
  "For Contractors & Trades",
  "For Business Owners",
  "For Agencies & Consultants",
];

// EO50 brand products, listed for context only. They are a separate brand.
export const EO50_PRODUCTS = [
  "Second Act Navigator",
  "Caregiver Hub",
  "AI Resume Rewriter",
  "Second Act Academy",
  "Coaching Booking Platform",
  "Benefits Engine",
  "Scam Shield",
  "Encore Launch Navigator",
] as const;
