// Central site metadata. Update placeholder values before launch.
export const SITE = {
  name: "Max Farnon Digital",
  tagline: "AI-Powered Tools for Small Businesses and the People Who Run Them",
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
  { href: "/services", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
