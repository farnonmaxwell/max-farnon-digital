/**
 * CMS-ready post source. Today, posts live as typed data.
 * To migrate to markdown or a headless CMS later, keep the Post shape identical
 * and swap the data loader (e.g., import.meta.glob for markdown, or a fetch call).
 */
export type PostCategory =
  | "AI for Business"
  | "Content Strategy"
  | "Digital Operations"
  | "Case Studies";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  author: string;
  date: string; // ISO date
  readingMinutes: number;
  featured?: boolean;
  /** Markdown body. Kept simple here; upgrade to a markdown renderer when needed. */
  body: string;
};

export const posts: Post[] = [
  {
    slug: "where-ai-actually-saves-time",
    title: "Where AI Actually Saves Time in a Small Business",
    excerpt:
      "Most AI advice is written for the Fortune 500. Here is what genuinely moves the needle when you have a team of twelve, not twelve thousand.",
    category: "AI for Business",
    author: "Max Farnon",
    date: "2026-03-18",
    readingMinutes: 7,
    featured: true,
    body: `
## The short version

AI will not replace your team. It will, if you use it carefully, give them back the one thing small businesses rarely have: a little breathing room.

## Where the wins are hiding

After a year of working with small and mid-size businesses, the same patterns keep showing up. The wins are rarely glamorous; they are usually about removing friction from something that already works.

1. Customer support triage, not replacement.
2. Weekly reporting that writes a first draft of itself.
3. Meeting notes that actually get distributed.
4. Internal knowledge bases that are searchable for once.

## What to avoid

Resist the urge to "AI everything." If a process is not documented, do not automate it; you will simply automate the chaos. Write the playbook first, then ask where AI can quietly carry some of the load.

## The honest caveat

Every engagement I have seen has included at least one experiment that did not work. That is fine. Budget ten to twenty percent of the effort for things that will fail; that is where the real learning lives.
`,
  },
  {
    slug: "content-systems-for-solo-operators",
    title: "Content Systems for Solo Operators",
    excerpt:
      "A single recording, four channels, one operator. Here is how to design a content pipeline that survives a busy week.",
    category: "Content Strategy",
    author: "Max Farnon",
    date: "2026-02-24",
    readingMinutes: 6,
    body: `
## The operator problem

If you are a founder, a consultant, or a creator running your own show, your content strategy is constrained by one thing: your time. Everything else follows from that.

## A working pipeline

The system we use for Empower Over 50 starts with a single long-form recording every week. From there:

- The recording becomes a YouTube video, lightly edited.
- The same audio becomes a podcast episode with show notes.
- The transcript feeds the first draft of a newsletter.
- Short edits go to social, tuned by hand rather than automated blindly.

## Where AI fits

AI is excellent for the second draft. It is not a replacement for editorial judgment, and it does not understand why a particular sentence matters to you. Treat it like a fast, slightly opinionated intern who still needs your review.
`,
  },
  {
    slug: "dashboards-you-actually-use",
    title: "Dashboards You Actually Use",
    excerpt:
      "Most business dashboards are read once and forgotten. A few habits make the difference between a chart that gathers dust and a number that shapes decisions.",
    category: "Digital Operations",
    author: "Max Farnon",
    date: "2026-01-30",
    readingMinutes: 5,
    body: `
## The dashboard graveyard

Every business has one: the Notion page, the Looker Studio link, the Metabase board that nobody has opened in three months. Beautiful, thorough, and completely ignored.

## Three rules for dashboards that survive

1. One page, no tabs. If it does not fit, it is not a dashboard; it is a report.
2. Each number should be tied to a decision a specific person makes weekly.
3. The story on the page should change when the business changes; if the numbers always look the same, you are measuring the wrong things.

## The habit, not the tool

The tool matters less than the ritual. A thirty-minute Monday review, with two or three people in the room, beats the most sophisticated dashboard that nobody opens.
`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function sortedPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
