# CrowdPrints Website — Enhanced Build Plan

## Project Summary
A production-grade, two-page React website for **CrowdPrints** — a custom bulk printing business serving corporates, events, and communities across India. The site must feel premium, confident, and distinctly designed — not generic.

**Client:** Harsh Kharde (CrowdPrints)
**Dev:** Bhushan Gadekar
**Target audience:** Corporate HR/admin, event organizers, educational institutions, community groups

---

## Design Direction — "Editorial Bold"

### Concept
Clean white sections punctuated by rich **ink-black** (with a dark green tint) full-bleed hero and CTA sections. Bold, geometric typography paired with warm accents. The aesthetic references premium print culture — confident, precise, and crafted.

### Mood
> Think Moleskine catalogue meets a modern Indian D2C brand. Professional enough for a Fortune 500 procurement manager. Exciting enough for an event organizer.

### What makes it unforgettable
- **Oversized typography** in the hero — the headline commands attention
- **Full-bleed product images** with smooth hover overlays
- **Staggered scroll-reveal animations** on every section
- **A running USP ticker** (infinite marquee) between hero and products — energetic, distinct
- **Stats strip** with large animated counters — builds instant trust

---

## Brand Identity

| Token | Value | Usage |
|-------|-------|-------|
| `--orange` | `#E85A2A` | CTAs, highlights, accents |
| `--teal` | `#3BB8CC` | Secondary accents, tags, links |
| `--ink` | `#0D1B1B` | Hero bg, footer bg, dark sections |
| `--cream` | `#F7F4EF` | Products section bg, warm off-white |
| `--white` | `#FFFFFF` | Cards, clean sections |
| `--gray` | `#6B7280` | Body copy, descriptions |
| `--border` | `rgba(0,0,0,0.07)` | Card borders, dividers |

---

## Typography

**Chosen fonts (Google Fonts):**

| Role | Font | Weights | Rationale |
|------|------|---------|-----------|
| Display / Headings | `Syne` | 700, 800 | Geometric, modern, slightly futuristic — distinctive without being flashy |
| Body / UI | `DM Sans` | 400, 500, 600 | Humanist, clean, very readable at all sizes |

**Type scale (rem):**
- Hero H1: `clamp(3rem, 6vw, 5.5rem)` — commanding
- Section H2: `clamp(1.75rem, 3.5vw, 2.75rem)`
- Card title: `1.1rem`
- Body: `0.95rem` / `1rem`
- Label/tag: `0.75rem`

**Typography rules enforced via `bencium-typography` skill:**
- Proper curly quotes `"…"` `'…'`
- Em dashes `—` not hyphens
- No orphaned words in headings
- Line-height 1.1–1.15 for headings, 1.65 for body

---

## Skills Used During Development

| Skill | When invoked |
|-------|-------------|
| `frontend-design` | Overall aesthetic direction + component design |
| `bencium-typography` | Enforce typographic correctness across all text |
| `vercel-react-best-practices` | React component patterns, performance |
| `simplify` / `code-reviewer` | Post-build code quality pass |

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Build tool | **Vite 5** | Fast HMR, zero config |
| Framework | **React 18** | Component reuse, SPA routing |
| Router | **React Router v6** | Client-side navigation |
| Styling | **Tailwind CSS v3** + CSS custom properties | Utility speed + design token control |
| Animations | **Framer Motion** | Scroll reveals, page transitions, marquee |
| Icons | **Lucide React** | Clean, consistent SVG icons |
| Fonts | **Google Fonts** (Syne + DM Sans) | No CDN overhead beyond fonts |

---

## File Structure

```
crowdprints/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── plan.md
├── public/
│   └── images/
│       ├── logo.png
│       ├── bags.png
│       ├── bottles.png
│       ├── gift-kits.png
│       ├── stationery.png
│       ├── cards-badges.png
│       └── apparel.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css           ← global resets, CSS variables, base styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── FeatureCard.jsx
    │   ├── StatCard.jsx
    │   └── Marquee.jsx
    └── pages/
        ├── Home.jsx
        └── Enquiry.jsx
```

---

## Pages

---

### Page 1 — `Home.jsx`

#### Section 1 — Navbar
- Fixed/sticky at top
- **Default state:** transparent bg, white text (sits on dark hero)
- **Scrolled state:** frosted glass (`backdrop-blur`) + white bg, dark text — animated transition
- Left: Logo (PNG)
- Center/Right: nav links — Products, Why Us
- Far right: "Get a Quote" pill button (orange)
- Mobile: hamburger icon → full-screen slide-down drawer

#### Section 2 — Hero (full viewport height)
- Background: `--ink` (`#0D1B1B`) with a very subtle noise/grain texture overlay
- Decorative: faint teal radial glow behind headline
- **Badge:** pill label — "Your Print Partner For Every Occasion"
- **H1:** "Custom Bulk Printing — For Corporates, Events & Communities" (Syne 800, oversized, multi-line with color break on keyword)
- **Sub-copy:** One punchy line in DM Sans
- **Two buttons:** "Get a Free Quote" (orange, filled) + "Explore Products" (ghost/outline)
- **Scroll indicator:** subtle animated downward chevron at bottom center
- Entrance: staggered Framer Motion fade-up on badge → H1 → sub-copy → buttons

#### Section 3 — USP Ticker / Marquee
- Background: `--orange`
- Infinite horizontal marquee — repeating: ✦ Premium Quality · ✦ Durable Prints · ✦ Pan-India Delivery · ✦ Bulk Order Discounts · ✦ 500+ Happy Clients · ✦ Fast Turnaround ·
- White text, DM Sans 600, all-caps, 0.85rem
- Subtle pause-on-hover behavior

#### Section 4 — Products
- Background: `--cream`
- Section label: "Our Products" (teal, uppercase, small)
- H2: "Everything You Need, Branded Your Way"
- Sub: "6 product categories. One trusted partner."
- **3-column responsive grid** (→ 2-col → 1-col on mobile)
- **ProductCard design:**
  - Image fills top 55% of card — `object-fit: cover`, aspect-ratio `4/3`
  - On hover: image zooms slightly (scale 1.05, smooth), a semi-transparent dark overlay slides in from bottom with short description
  - Card body: product name (Syne 700), 2 descriptive tags, "Enquire Now →" link
  - Card hover lifts with shadow
- Cards scroll-reveal with stagger (each card animates in 80ms after previous)

**Product data:**

| # | Image file | Card title | Tags |
|---|-----------|-----------|------|
| 1 | `apparel.png` | T-Shirts, Hoodies & Caps | Cotton · Polyester · Sportswear · Jersey |
| 2 | `bottles.png` | Bottles, Mugs & Coffee Holders | Steel · Copper · Ceramic · Plastic |
| 3 | `gift-kits.png` | Corporate & Educational Gift Kits | Corporate Gifting · Onboarding Kits |
| 4 | `stationery.png` | Diaries, Notebooks & Stationery | Hardbound · Spiral · Cork · Pens |
| 5 | `bags.png` | Bags, Wallets, Pouches & Sleeves | Tote · Jute · Laptop Sleeve · Backpack |
| 6 | `cards-badges.png` | Visiting Cards, Badges & Standees | ID Cards · Certificates · Banners |

#### Section 5 — Stats Strip
- Background: `--ink`
- 4 large stats in a row (animated count-up on scroll-enter):
  - **500+** Happy Clients
  - **10,000+** Orders Delivered
  - **100+** Product Varieties
  - **Pan-India** Delivery Network
- Number: Syne 800, orange color. Label: DM Sans 400, muted white

#### Section 6 — Why CrowdPrints
- Background: `--white`
- Section label + H2
- 4 feature cards in a row (→ 2×2 → 1-col)
- Each card: large icon (Lucide), bold title, 1-sentence description
- Cards have a left-border accent in `--teal` on hover

| Icon | Title | Description |
|------|-------|-------------|
| Palette | Vibrant, Durable Prints | High-resolution printing that stays bright wash after wash |
| Package | Bulk Order Discounts | The more you order, the more you save |
| Truck | Pan-India Delivery | Reliable shipping from metros to tier-2 towns |
| Star | Premium Quality Materials | Pure Cotton, Steel & Copper — only the best |

#### Section 7 — CTA Banner
- Background: `--ink` with orange radial glow at center
- Large H2: "Ready to Print Your Brand?"
- Sub: "Get in touch. We respond fast."
- Single large CTA: "Get a Free Quote" (orange pill, large)

#### Section 8 — Footer
- Background: `#060F0F` (near-black)
- Logo (white variant — use CSS filter or the PNG as-is on dark bg)
- Tagline: "Your Print Partner For Every Occasion"
- Contact row: phone number + website URL (teal links)
- Bottom bar: copyright + "Made with ❤️ in India"

---

### Page 2 — `Enquiry.jsx`

**Route:** `/enquiry`

#### Layout
- Same Navbar + Footer
- Centered single-column layout, vertically centered in viewport

#### Sections
1. **Compact hero** (dark ink bg, shorter than homepage hero)
   - H1: "Get in Touch"
   - Sub: "Choose how you'd like to reach us — we respond fast."

2. **Two option cards** (side by side on desktop, stacked on mobile)
   Each card is large, rounded, with a hover lift + glow:

   **WhatsApp Card:**
   - Accent: green (`#25D366`)
   - Icon: WhatsApp SVG (inline)
   - Title: "Chat on WhatsApp"
   - Body: "Send us your requirements instantly. Fastest way to get a quote."
   - Button: "Open WhatsApp →"
   - Link: `https://wa.me/917385537511?text=Hi%20CrowdPrints!%20I%20would%20like%20to%20enquire%20about%20your%20products.`

   **Email Card:**
   - Accent: `--orange`
   - Icon: `<Mail>` from Lucide
   - Title: "Send an Email"
   - Body: "Prefer email? Drop us a detailed message and we'll get back within 24 hours."
   - Button: "Send Email →"
   - Link: `mailto:` *(email address to be confirmed by client)*

3. **Contact details row** below the cards:
   - Phone: +91 73855 37511
   - Website: www.crowdprints.co.in

---

## Animations Plan (Framer Motion)

| Element | Animation |
|---------|-----------|
| Hero badge, H1, sub-copy, buttons | Staggered fade-up on mount (0.1s delays) |
| Navbar bg | Opacity + blur transition on scroll |
| Product cards | Fade-up + slight Y-translate, staggered by index, on scroll-enter |
| Stats numbers | Count-up when section enters viewport |
| Feature cards | Fade-in left → right, staggered, on scroll |
| Page transitions | Framer Motion `AnimatePresence` — fade between routes |
| USP Marquee | CSS infinite scroll via `animation: marquee linear infinite` |
| Enquiry cards | Scale + shadow on hover |

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|-----------|-----------|
| ≥ 1280px | 3-col product grid, full navbar |
| 1024px–1279px | 3-col product grid, full navbar |
| 768px–1023px | 2-col product grid, full navbar |
| < 768px | 1-col grid, hamburger nav |
| < 480px | Stacked hero buttons, 1-col features |

---

## Open Items (Confirm Before Build)

| # | Item | Status |
|---|------|--------|
| 1 | Business email address for enquiry page | ⏳ Pending from client |
| 2 | Any specific stat numbers client wants (or use aspirational defaults) | ⏳ Optional |
| 3 | Any additional pages needed (e.g. About, Blog) | ⏳ Not mentioned — skipping |

---

## Build Order

1. Project scaffold — Vite + React + Tailwind + Framer Motion + Lucide
2. Copy & rename product images into `public/images/`
3. Design tokens in `index.css` + Tailwind config
4. `Navbar` component
5. `Footer` component
6. `Home` page — section by section (Hero → Marquee → Products → Stats → Why → CTA)
7. `Enquiry` page
8. React Router wiring in `App.jsx`
9. Responsive pass — test all breakpoints
10. Animation polish pass
11. Final code review via `simplify` skill
