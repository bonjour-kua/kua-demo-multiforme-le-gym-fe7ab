# Editorial Brutalist — Design Skill

A reusable design system spec extracted from the codebase. Use this to rebuild
the same visual language for any subject/content. **No business content,
copywriting, or domain-specific text is included.**

---

## 1. Design Philosophy

- **Tone:** Bold, editorial, brutalist. Industrial confidence, oversized
  typography, almost zero ornament.
- **Feel:** Print-magazine meets job-site signage. Heavy black ink on light
  paper, with one saturated accent used like a marker highlight.
- **Intent:** Make the type itself the visual. Layouts are quiet grids; the
  drama comes from scale, weight, and a single accent color used sparingly.
- **Personality:** Confident, professional, uncompromising. Never playful,
  never decorative.

---

## 2. Layout System

### Container
- **Max width:** `1760px` (extra-wide editorial canvas).
- **Horizontal padding:** `px-6` on mobile, `px-10` from `lg:` up.
- **Centered:** `mx-auto`.
- Container is applied per section, not at app root, so full-bleed sections
  (maps, hero media, dark CTAs) can break out cleanly.

### Section Spacing (vertical rhythm)
- **Standard sections:** `py-28` mobile → `py-40` from `lg:` up.
- **Hero sections:** `pt-20 pb-24` → `pt-28 pb-36` from `lg:` up.
- **Big finale CTAs:** `py-32` → `py-48`.
- **Compact stat strips:** ~`px-8 py-12` → `px-12 py-16` per cell.
- **Section header → grid gap:** `mb-16` mobile → `mb-20` to `mb-28` from `lg:`.
- Inner column gaps: `gap-8` → `gap-10` (cards), `gap-14` → `gap-16` (footer
  columns), `gap-16` → `gap-20` (FAQ split).

### Grid System
- 12-column grid for asymmetric editorial splits (`grid-cols-12` with
  `col-span-7 / col-span-5`, `col-span-8 / col-span-4`, etc.).
- 1 / 2 / 3 column responsive grids for galleries (`grid-cols-1 md:grid-cols-2
  lg:grid-cols-3`).
- 4-column responsive grids for footer and stat strips
  (`grid-cols-2 lg:grid-cols-4`).
- "Bento" layout used once for projects: a tall feature card spanning two rows
  next to two stacked cards.
- Stack everything vertically on mobile; asymmetry returns from `lg:`.

### Alignment Rules
- Headlines are **left-aligned**. Centered text is avoided.
- Section headers are top-left; secondary copy or actions sit far-right on the
  same baseline (`flex items-end justify-between`).
- Body copy lives in narrow measures (`max-w-md` to `max-w-2xl`) so the page
  stays airy even with massive type next to it.

---

## 3. Page Structure

Reusable homepage skeleton. Each block is independent and can be reordered.

1. **Sticky top navbar** — dark surface, full width, height `h-24` to `h-28`.
2. **Hero** — 12-column split: ~8 cols of giant headline + sub copy + CTAs
   on a light background, ~4 cols of full-bleed media (image or autoplay
   video) on the dark background.
3. **Stat strip** — 2 / 4-column grid on a dark surface with oversized
   accent-colored numerals and small uppercase labels.
4. **Card grid section** — light surface, 1 / 2 / 3 column gallery of dark
   cards with image + index + title.
5. **Feature split** — full-bleed 50/50 split: full-bleed image on one side,
   dark panel with headline + paragraph + inline link on the other. Order
   reverses on mobile.
6. **Featured gallery (bento)** — light surface, 12-column grid with one
   large feature card spanning two rows next to two stacked cards.
7. **Process / steps** — dark surface, 3-column grid of large numerals and
   short copy. No connectors, no decorative lines.
8. **Testimonials** — light surface, 12-column split: oversized blockquote
   with one accent-colored fragment, plus a clickable list of names that
   swap the active quote (auto-rotating).
9. **FAQ** — dark surface, 12-column split: title + intro on the left,
   accordion on the right.
10. **Big finale CTA** — full-bleed image with a heavy dark overlay,
    massive headline with one accent-highlighted word, two stacked CTAs.
11. **Contact / inline form section** — dark surface, 12-column split:
    contact list on the left, form on the right.
12. **Map strip** — full-width media block (e.g. iframe) with a small
    floating dark "address card" callout.
13. **Footer** — dark surface, 4-column grid: brand block + 3 link
    columns, plus a thin legal/credits row.

A secondary page (e.g. a form-focused page) reuses navbar, footer, map,
testimonials, FAQ, and form, plus its own dark hero and a compact "promises"
strip (3-column dark grid of numbered short cards).

---

## 4. Typography System (CRITICAL)

### Font Families
- **Primary (everything bold/UI/headings/body):** `Inter`, sans-serif.
  Loaded from Google Fonts. Weights used: `400, 500, 700, 800, 900`.
- **Secondary / accent (small labels, eyebrows, meta, mono captions):**
  `IBM Plex Mono`, monospace. Weights used: `400, 500, 700`.
- No serif. No script. Two families only.

### Font Usage Rules

| Role                 | Family       | Weight | Transform | Tracking      | Notes |
|----------------------|--------------|--------|-----------|---------------|-------|
| H1 / display         | Inter        | 900    | uppercase | `-0.04em`     | Line-height `0.85`, ultra-tight. |
| H2                   | Inter        | 900    | uppercase | `-0.03em`     | Line-height `0.9`. |
| H3 (card titles)     | Inter        | 900    | uppercase | `-0.02em`     | Line-height `1.0–1.1`. |
| Lead paragraph       | Inter        | 500    | none      | normal        | `text-lg` to `text-2xl`, color at 70–80% opacity. |
| Body paragraph       | Inter        | 500    | none      | normal        | `text-base`, color at 70–80% opacity, `leading-relaxed`. |
| Eyebrow / meta label | IBM Plex Mono| 700    | uppercase | `0.3em`       | `text-xs`, low-opacity neutral, sits above section titles. |
| Index / numeral tag  | IBM Plex Mono| 700    | uppercase | `0.2–0.3em`   | `text-xs`, often accent-colored. |
| Nav links            | Inter        | 900    | uppercase | `0.2em`       | `text-sm`. |
| Buttons / CTAs       | Inter        | 900    | uppercase | `0.2em`       | `text-sm` to `text-base`. |
| Form labels          | IBM Plex Mono| 700    | uppercase | `0.3em`       | `text-xs`, sits above the input. |
| Form input text      | Inter        | 700    | none      | normal        | `text-lg` to `text-xl`. |
| FAQ question         | Inter        | 900    | uppercase | `-0.01em`     | `text-lg` → `text-2xl`. |
| FAQ answer           | Inter        | 500    | none      | normal        | `text-base` → `text-lg`, 80% opacity. |
| Testimonial quote    | Inter        | 900    | uppercase | `-0.02em`     | `text-3xl` → `text-6xl`, line-height `1.1`. |

### Font Scale (responsive, mobile → `lg/xl`)

- **Display H1:** `text-6xl` → `text-7xl` → `text-8xl` → `text-9xl` →
  `text-[11rem]`.
- **Section H2:** `text-5xl` → `text-6xl` → `text-7xl` → `text-8xl`.
- **Card / sub H3:** `text-2xl` → `text-3xl`.
- **Lead paragraph:** `text-lg` → `text-xl` → `text-2xl`.
- **Body paragraph:** `text-base` (16px).
- **Eyebrow / meta:** `text-xs` (12px) with `tracking-[0.3em]`.
- **Stat numerals:** `text-4xl` → `text-7xl`, optionally up to `text-9xl`
  for the most prominent stat.
- **Tabular numbers:** stat numerals use `tabular-nums` so animated counters
  do not jiggle.

### Typography Behavior
- **Letter spacing:**
  - Display headlines: very tight (`-0.04em` to `-0.02em`).
  - Eyebrows / meta / nav / buttons: very wide (`0.2em` to `0.3em`).
  - Body: default.
- **Line height:**
  - Display: `0.85` to `0.95` (visually stacked).
  - Body: `leading-relaxed` (~1.625).
- **Text transform:**
  - Headings, eyebrows, nav, buttons, labels: `uppercase`.
  - Body and form input values: normal case.
- **Selection:** custom selection color (accent background, paper foreground)
  to reinforce the accent.

> The design hinges on this contrast: oversized **uppercase ultra-bold tight**
> headlines vs. tiny **uppercase mono wide-tracked** labels vs. comfortable
> **regular-cased medium** body. Reproduce all three or the system collapses.

---

## 5. Color System

Three roles, one accent. Substitute hexes per project, but keep the roles.

| Token   | Role                              | Used for                                  |
|---------|-----------------------------------|-------------------------------------------|
| `paper` | Light neutral background           | Section backgrounds, light cards, body bg |
| `ink`   | Near-black ink                     | Dark sections, navbar, footer, body text  |
| `accent`| One saturated, slightly desaturated brand color | Highlights, key CTAs, hover states, active states |

Rules:
- Sections **alternate** paper and ink. Never use mid-grey backgrounds.
- Body text on paper uses ink at full strength; secondary copy uses ink at
  70–80% opacity. Body text on ink uses paper with the same opacity scaling.
- The accent color appears in:
  - One word per major headline (highlighted inline).
  - Eyebrow numerals (`01`, `02`, …) and active indicators.
  - Primary CTAs (filled accent → on hover invert to inverted neutrals).
  - Active state in lists, tabs, accordions.
  - Top icons / arrow icons that should "pop".
- The accent is **never** used for paragraphs, body, or large surfaces — only
  for small accents and CTAs.

---

## 6. Component System

### Buttons
- **Shape:** square corners, no radius. Height `h-12 lg:h-14` (small),
  `h-16` (standard), `h-16 lg:h-20` (hero).
- **Padding:** `px-6 lg:px-7` (small), `px-8` (standard), `px-8 lg:px-10`
  (hero).
- **Type:** `font-black uppercase tracking-[0.2em]` Inter, `text-sm` to
  `text-base`.
- **Layout:** flex, gap-6, with a trailing arrow icon (e.g. `→` or `↗`).
- **Variants:**
  - **Primary:** accent background + paper foreground. Hover swaps to
    paper background + ink foreground (or to ink + paper for the dark CTA).
  - **Secondary / outline:** 2px ink border + ink text. Hover fills with ink
    + paper text.
  - **Ghost / text:** uppercase label with a 2px accent underline; arrow
    translates on hover.

### Cards
- **No border radius.** Square corners everywhere.
- **Image cards:**
  - Dark surface, image absolutely positioned with `object-cover` and
    `grayscale` filter at rest.
  - Dark gradient overlay (`from-ink via-ink/70 to-ink/20`) so text remains
    legible.
  - Index label top-left in mono, arrow icon top-right.
  - Title + short copy bottom-left.
  - Hover: image desaturates back to color and scales `1.03–1.04`; gradient
    can shift to accent on service cards.
- **Service cards** include a hover gradient swap from ink to accent.
- **Form / panel cards:** flat colored block (paper or ink) with `p-10
  lg:p-16` padding, no shadow, no border.

### Sections (variants)
- Light section / dark section / split section / full-bleed media section.
- Header pattern repeated everywhere: tiny mono eyebrow → giant H2 with
  one accent word → optional one-line lead aligned to the right baseline.

### Forms
- Inputs are **borderless except for a 2px bottom border** (ink on paper,
  paper on ink). On focus the border switches to accent.
- No background fill (`bg-transparent`).
- Padding: `py-3`, generous gap `gap-8` between fields.
- Labels above the input, mono uppercase tracked-out, ~12px.
- Required marker: trailing `*` in the label.
- Submit button is a full-width primary CTA with a trailing arrow.
- Inline confirmation via toast.

### Navbar
- Sticky top, dark, ~`h-24 lg:h-28`.
- Left: logo image at fixed pixel height.
- Center: uppercase Inter Black links with `tracking-[0.2em]`, gap `gap-10`.
  One link is a click-toggle dropdown panel.
- Right: contact info (phone) + primary CTA.
- Mobile: same content collapsed into a full-width drop-down panel.

### Footer
- Dark surface. 4-column grid: brand block + 3 link columns.
- Each column has a mono eyebrow heading in the accent color.
- Logo image is the brand block (no wordmark text).
- Bottom strip: legal / locale row in mono uppercase, low opacity.
- Just above the footer: a full-width media strip (e.g. map) with a small
  floating dark info card overlapping it.

### Stats
- Horizontal strip on dark surface, 2 / 4 columns.
- Each cell: oversized accent numeral on top, mono uppercase label below.
- Numbers run a count-up animation on first scroll into view.

### Testimonials
- Big quote on the left, clickable list of names on the right.
- Active name is marked by a 4px accent left border + accent text color.
- Auto-rotates on a timer; pauses on hover; manual dots/buttons sync.

### Accordion (FAQ)
- Each item: bottom border only (no card chrome).
- Trigger uses a mono accent index + uppercase Inter Black question.
- Chevron is the only icon.
- Answer is comfortable body copy in the same column, indented to align with
  the question text.

---

## 7. Visual Style

- **Border radius:** `0` everywhere. CSS `--radius` is set to `0px` and all
  Tailwind radius tokens are overridden to `0`.
- **Shadows:** essentially none. Only the floating map address card uses a
  `shadow-2xl` to lift it off the media beneath.
- **Borders:** 1–2px hairlines, low-opacity neutrals (`/10` to `/20`) on
  dividers; 2px ink/paper for emphasis (button outlines, form underlines).
- **Images:**
  - Full-bleed within their container.
  - `object-cover`, often `aspect-[4/5]` for portrait features and
    `aspect-[16/9]` for landscape cards.
  - Default `grayscale` with reduced opacity, returning to full color on hover.
  - Maps use `grayscale` to match the photo treatment.
- **Overlays:** dark linear gradients on top of media to guarantee text
  contrast (`from-ink via-ink/40 to-transparent`, sometimes a flat
  `bg-ink/80` for hero CTAs).
- **Iconography:** Lucide icons only. Stroke width `2.5` to `3` so they read
  bold next to the heavy type. Sizes typically `w-5 h-5` (inline),
  `w-6 h-6` (cards), `w-7 h-7` to `w-12 h-12` (hero arrows).
- **Highlight motif:** key word in a headline is wrapped inline in an
  accent-colored block (`bg-accent text-paper px-4 lg:px-6 pb-2 lg:pb-3`)
  to evoke a marker stroke.

---

## 8. Animation System

Restrained, functional, never decorative.

- **Hover transitions** (`duration-300` to `duration-500`, `transition-colors`
  / `transition-transform`):
  - Buttons swap background/foreground.
  - Card arrows translate `+8px` right and `-8px` up on hover.
  - Card images desaturate to color and scale `1.03–1.04`.
  - Service cards gradient shifts from ink to accent.
  - Active list indicators grow from `w-5` to `w-10`.
- **Dropdown / chevron:** chevron rotates 180° on open with a transform
  transition.
- **Count-up stats:** IntersectionObserver triggers an `easeOutExpo` count
  from `0` to target over ~`1.6s`, using `tabular-nums` to keep digits
  steady.
- **Testimonial rotation:** auto-advances every ~`6s`, pauses on hover,
  fades the active quote in with a small `translateY(8px)` keyframe.
- **Page entry:** none beyond the above. No big scroll-jacking, no parallax.

---

## 9. Design Rules (STRICT)

1. **Two fonts only** (primary sans + mono accent). No third family ever.
2. **All headings, nav, buttons and labels are UPPERCASE.** Body and inputs
   stay normal case.
3. **Border radius is 0 everywhere.** No rounded corners anywhere.
4. **Three colors only:** paper, ink, accent. No mid-greys, no second accent.
5. **Accent is rare:** one accented word per major headline, plus CTAs and
   active states. Never bodies, never large fills.
6. **Sections alternate light/dark surfaces.** No mid-tone sections.
7. **Headlines are always left-aligned** and use very tight tracking with
   ultra-tight line-height.
8. **Eyebrows are always uppercase mono with `tracking-[0.3em]`** and sit
   directly above the section title.
9. **Standard section padding is `py-28 lg:py-40`.** Don't break the rhythm
   without reason.
10. **Use the 12-col asymmetric grid for editorial splits** and the 1/2/3
    grid for galleries.
11. **Images are grayscale at rest, color on hover.** Same rule applies to
    embedded maps.
12. **Buttons are square, full-height, with an inline arrow icon.** No
    pill buttons, no shadow buttons.
13. **Forms have no boxes, only bottom-borders.** Focus turns the border
    accent.
14. **Use the inline accent block highlight** to mark one keyword per major
    headline.
15. **Animations stay subtle:** color/transform tweens, count-up, fade —
    nothing flashy.

---

## 10. Implementation Notes (from the codebase)

### Stack
- React + Vite, TypeScript, Tailwind CSS v4 with `@theme inline` token block.
- Routing: lightweight router (e.g. `wouter`) with a base path so the app
  can mount under any subpath.
- Toast system for form confirmations.
- Lucide icons.
- Optional shadcn-style primitives only where useful (Accordion, Tooltip,
  Toaster). All chrome stripped to match the brutalist style.

### Tailwind / Theme Setup
- `--radius-*` tokens are all `0px`. Don't reintroduce radii.
- `--font-sans` set to the primary family, `--font-mono` to the accent
  family. Both loaded via Google Fonts in `index.html` with `preconnect`.
- Color tokens stored as `hsl(var(--token))` so they can be re-themed per
  project, but the role mapping (background = paper, foreground = ink,
  primary = accent, secondary = ink) stays constant.
- A custom `fadeIn` keyframe is defined in CSS for testimonial swaps.

### Recurring Patterns
- **Section header block:**
  ```tsx
  <span className="block font-mono text-xs tracking-[0.3em] uppercase text-foreground/60 mb-8">
    {EYEBROW}
  </span>
  <h2 className="font-['Inter'] font-black uppercase tracking-[-0.03em] leading-[0.9]
                 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
    {LEFT} <span className="text-accent">{HIGHLIGHT}</span>
  </h2>
  ```
- **Inline highlight:**
  ```tsx
  <span className="inline-flex items-center align-middle bg-accent text-paper
                   px-4 lg:px-6 pb-2 lg:pb-3">{WORD}</span>
  ```
- **Card hover image:**
  ```tsx
  <img className="grayscale group-hover:grayscale-0 transition-all duration-500
                  group-hover:scale-[1.03]" />
  ```
- **Animated arrow:**
  ```tsx
  <ArrowUpRight className="transition-transform duration-300
                           group-hover:translate-x-2 group-hover:-translate-y-2" />
  ```

### Component Reuse
- A `site/` folder holds shared building blocks: `Navbar`, `Footer`,
  `SiteMap`, `Stats`, `Testimonial`, `Faq`, `SubmissionForm`.
- Shared data (nav links, services, FAQ entries, contact rows, map coords)
  lives in a `lib/site-data.ts` module so multiple pages share one source
  of truth.
- Pages compose these blocks and add their own hero and one or two
  page-specific sections. A second page (e.g. a form page) typically reuses
  navbar + footer + map + testimonials + FAQ + form.

### Responsiveness Strategy
- Mobile-first. From `lg:` (≥1024px) the asymmetric editorial grid kicks
  in. Below that, everything stacks in a single column with the same vertical
  rhythm.
- Type scales with explicit breakpoints (`text-6xl sm:text-7xl md:text-8xl
  lg:text-9xl xl:text-[11rem]`) rather than fluid `clamp()`, to keep the
  scale predictable.
- Spacing scales similarly (`py-28 lg:py-40`, `mb-16 lg:mb-20`).
- Mobile menu is a stacked drawer below the navbar with the same uppercase
  links and a dedicated CTA at the bottom.

### Accessibility
- Color contrast is high by construction (paper vs. ink with one saturated
  accent).
- Buttons use `aria-expanded` for dropdowns and `aria-pressed` for active
  list items.
- Map iframe has a descriptive `title`.
- All interactive elements remain keyboard-focusable; nothing relies solely
  on hover.

---

## 11. JSON Summary

```json
{
  "design_name": "Editorial Brutalist",
  "layout_type": "wide editorial 12-column with full-bleed accents",
  "hero_type": "asymmetric split (oversized left headline + right media panel)",
  "spacing": "generous, py-28 lg:py-40 sections, 1760px max container, px-6 lg:px-10",
  "typography_style": "ultra-bold uppercase headlines with tight tracking, mono uppercase eyebrows, regular-cased medium body",
  "font_primary": "Inter (400/500/700/800/900)",
  "font_secondary": "IBM Plex Mono (400/500/700)",
  "visual_style": "zero border-radius, no shadows, grayscale-to-color imagery, accent block highlight, dark/light alternating sections",
  "complexity": "medium — small set of strong patterns repeated everywhere",
  "tone": "industrial, confident, editorial, professional, no decoration"
}
```

---

### Adapting This Skill

To rebuild this design for a different project:

1. Pick three colors (paper / ink / accent) and slot them into the existing
   token map. Keep contrasts high; keep the accent saturated but never neon.
2. Keep `Inter` + `IBM Plex Mono` (or any sans-black + mono pair with the
   same weight range). Do not introduce a third family.
3. Reuse the section skeleton from §3, in any order, with new copy. Each
   block is independent.
4. Apply every typographic and spacing rule from §4 and §9 verbatim.
5. Treat the accent as expensive: one highlighted word per H1/H2, primary
   CTAs, active markers, and that is essentially it.
6. Keep all corners square and all images grayscale at rest. The whole
   identity rests on those two rules plus the type system.
