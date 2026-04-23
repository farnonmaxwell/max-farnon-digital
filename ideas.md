# Max Farnon Digital, Design Brainstorm

The brief asks for a professional, modern, clean site that is "not flashy," built around navy/dark blue plus white plus a gold (or teal) accent. Three distinct stylistic directions follow. I drew each from a slightly different philosophical well so the contrast is clear.

<response>
<text>

## Idea 1, "Boardroom Editorial"

**Design Movement.** Swiss editorial meets contemporary boutique consultancy (think McKinsey Quarterly crossed with Stripe's marketing pages and the editorial calm of The Browser). Typography-led, grid-driven, quietly confident.

**Core Principles.**
1. Content is the hero; type and whitespace carry the weight.
2. Strict modular grid with intentional asymmetry (left-aligned long-form columns, offset captions, numbered sections).
3. Restraint over decoration. No gradients on buttons, no drop shadows on cards, no glassmorphism.
4. Every visual element must serve reading, scanning, or hierarchy.

**Color Philosophy.** A single deep navy (near-black indigo) as the authoritative voice, warm off-white (#F7F5EF) as the page, and a muted antique gold (#C9A24B) used sparingly for numerals, rules, and one-word emphasis. The goal is composure, the tone a Savile Row suit rather than a Vegas sign.

**Layout Paradigm.** Twelve-column grid with a persistent left gutter reserved for section numbers and small captions. Hero uses a two-column split: oversized display headline on the left, short positioning paragraph with numeric metadata on the right. Sections are separated by hairline rules, never blocks of color.

**Signature Elements.**
- Numbered section markers (01, 02, 03) in gold, serif numerals.
- Hairline horizontal rules at 1px, always in navy at 15 percent opacity.
- "Pull quote" style testimonials set in a contrasting serif.

**Interaction Philosophy.** Interactions whisper. Links underline on hover with a 200ms ease. Buttons shift color, not size. No bouncing, no scaling cards.

**Animation.** Subtle fade-and-rise on section entry (12px, 500ms, cubic-bezier(0.22, 1, 0.36, 1)). A slow horizontal rule draw on first reveal. Nothing loops.

**Typography System.** Display: Fraunces (serif, variable, for hero and section numerals). Body: Inter (400, 500, 600). Ratio 1.25 (major third). Generous line-height of 1.65 on body copy.

</text>
<probability>0.06</probability>
</response>

<response>
<text>

## Idea 2, "Midnight Atelier"

**Design Movement.** Dark-mode-first premium SaaS with a craft undertone. References: Linear, Vercel, Arc Browser marketing, and the quieter end of Apple keynotes.

**Core Principles.**
1. Dark canvas as default. Light mode is the alternate, not the primary.
2. Subtle depth via soft inner glows and 1px luminous borders rather than heavy shadows.
3. Metric-forward storytelling. Numbers are the headline, not the supporting act.
4. Every surface has a purpose and a quiet gradient.

**Color Philosophy.** Background is a deep navy-black (#0B1020) layered over a near-black base (#070914). Cards float on a slightly lifted navy (#121832). Accent is a warm champagne gold (#E8C88A) used on CTAs and key metrics. Text is off-white (#E7EAF2) with muted slate (#8A94AB) for secondary copy.

**Layout Paradigm.** Full-bleed sections with an internal 1200px max-width. Hero spans the viewport with a soft radial navy glow behind the headline. Services presented as a three-card horizontal stack on desktop, stacked on mobile, with luminous 1px borders and interior padding of 2rem.

**Signature Elements.**
- Luminous hairline borders on all cards (1px, 10% white).
- "Aurora" radial gradient in hero and CTA sections (navy to indigo to a breath of gold).
- Animated dotted grid in the far background of the hero, 4% opacity.

**Interaction Philosophy.** Pointer-responsive. Cards lift 2px and borders brighten on hover. Buttons have a gentle gold glow on focus. Smooth anchor scrolling with an easing curve that feels mechanical, not playful.

**Animation.** Staggered entry on service cards (80ms per card). Headline splits by word and rises 8px with opacity fade. Hover interactions complete in 180ms.

**Typography System.** Display: DM Sans (700, for headlines). Body: Inter (400, 500). Numerals: JetBrains Mono for metrics (KPIs, years in business). Clear separation between "human copy" and "machine-precise numbers."

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Idea 3, "Atlantic Brief"

**Design Movement.** Modern print-inspired consultancy site. Imagine if The Atlantic, Monocle, and a top-tier independent AI consultancy collaborated on a single page.

**Core Principles.**
1. Generous whitespace and confident serifs for headlines; clean sans for body.
2. Left-anchored compositions with deliberate negative space to the right.
3. Gold used only as a functional accent: underlines, metric callouts, and the single CTA color.
4. Images are replaced by structured data blocks, callout cards, and iconography.

**Color Philosophy.** Page is warm ivory (#FAF7F1). Primary is a deep naval blue (#0E2A47). Secondary is a softer sea-navy (#1E3A5F) used for muted surfaces. Accent is a refined gold (#B8862F) used for underlines, metric digits, and the primary CTA.

**Layout Paradigm.** Asymmetric left-weighted layouts. Hero headline sits in the left two-thirds with a compact "dossier" panel on the right listing three credentials (years of experience, engagements shipped, AI tools integrated). Services appear as a vertical list of wide cards, each with a small serif numeral, a headline, a paragraph, and a "Best for" tag.

**Signature Elements.**
- Gold underline animations on primary links.
- "Dossier" sidebars on hero, about, and case study pages.
- Small-caps labels (letter-spacing 0.12em) for section eyebrows.

**Interaction Philosophy.** Interactions feel editorial. Link underlines draw from left to right on hover. Cards don't move; their borders shift from hairline gray to navy. Buttons transition from ivory with navy text to navy with ivory text.

**Animation.** Fade-and-rise on scroll with 24px offset, 600ms. Underline draw animation on hover (220ms). Gold numeral counters animate once when in view.

**Typography System.** Display: Fraunces (variable serif, 500 and 700) for H1/H2 and section numerals. Body: Inter (400, 500) for paragraphs. Eyebrows in Inter uppercase, 12px, letter-spacing 0.14em. Ratio 1.333.

</text>
<probability>0.07</probability>
</response>

## Selected Direction

**Idea 3, "Atlantic Brief."** It best matches the brief's requirements: professional, modern, clean, not flashy, navy plus white plus gold, editorial credibility for a consultancy founded by someone with thirty-plus years of business experience. It also reads as trustworthy on mobile, avoids the AI-slop defaults (centered everything, purple gradients, generic rounded cards), and gives Max's written voice room to breathe.
