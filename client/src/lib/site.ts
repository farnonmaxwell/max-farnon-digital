// Central site metadata. Update placeholder values before launch.
export const SITE = {
  name: "Max Farnon Digital",
  tagline: "AI-Powered Solutions for Modern Businesses",
  email: "max@maxfarnondigital.com",
  location: "South Florida",
  calendlyUrl: "https://calendly.com/maxfarnondigital/strategy-call",
  linkedinUrl: "https://www.linkedin.com/in/maxfarnon",
  youtubeUrl: "https://www.youtube.com/@empowerover50",
  twitterUrl: "https://x.com/maxfarnon",
  empowerOver50Url: "https://empowerover50.com",
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
