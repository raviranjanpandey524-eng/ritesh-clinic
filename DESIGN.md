# Dr. Ritesh Homoeopathic Clinic — Design Brief

## Conceptual Direction
Premium wellness sanctuary for holistic, natural healthcare. Green-themed with luxury trust signals and WhatsApp-first contact model.

## Tone & Differentiation
Refined, trustworthy, compassionate. Featured: fade-up scroll animations, floating card effects, and soft green gradients throughout. Trust signals (patient stats, testimonials, doctor credentials) on every major section.

## Color Palette (OKLCH)

| Role | Value | Usage |
|------|-------|-------|
| **Primary (Deep Green)** | `0.44 0.16 150` | Hero, buttons, borders |
| **Mid Green** | `0.54 0.17 150` | Hover states, emphasis |
| **Soft Green** | `0.63 0.18 150` | Accents, secondary CTAs |
| **Light Green** | `0.87 0.10 150` | Card backgrounds, highlights |
| **Pale Green** | `0.97 0.04 150` | Section backgrounds, subtle fills |
| **Gold** | `0.69 0.12 80` | Accent highlights, badges |
| **Text Dark** | `0.15 0.06 150` | Headlines, body copy |
| **White** | `1.0 0 0` | Card surfaces, foreground |

## Typography
- **Display**: Playfair Display (serif, 400/700) — hero headlines, section titles, doctor name
- **Body**: Poppins (sans, 400/600) — copy, buttons, labels
- **Mono**: JetBrains Mono — form labels, code (if any)
- **Type Scale**: Display up to 3.4rem (clamp), body 0.88–0.95rem, labels 0.78rem

## Elevation & Depth
- Shadows: `sm` (2px/8px spread), `md` (8px/32px), `lg` (20px/60px) with green tint
- Cards: white background, 18px border-radius, subtle lift-on-hover
- No dark mode in v1 (light-theme only)

## Structural Zones

| Zone | Surface Treatment |
|------|-------------------|
| **Header/Nav** | White glass with backdrop blur, bottom border, scroll shadow |
| **Hero** | Pale green gradient with radial orb overlays, left text + right floating card |
| **Content Sections** | Alternating white & pale green backgrounds |
| **Cards** | White with 1px border, soft shadows, 18px radius |
| **Footer** | Dark green (#0f2318), inverse text |

## Component Patterns
- **Buttons**: Primary (deep green), WhatsApp (#25D366), secondary (pale green outline)
- **Service/Testimonial Cards**: Click-to-expand modals, fade-up on scroll
- **Contact Chips**: Icon + text, left-aligned, hover background shift
- **Forms**: Light green background container, white inputs, soft focus ring
- **Stats/Badges**: Gold accents, centered, bold Playfair Display

## Motion & Microinteractions
- **Scroll**: Fade-up + stagger (0.12s intervals) on elements entering viewport
- **Hover**: Button lift (-2px), card lift (-8px), icon color shift
- **Click**: Service cards open modal with scale + fade (0.3s)
- **Loading**: Success message slides in green, auto-dismisses 5s
- **Floating**: Hero card and badges bob gently (4s cycle)

## Responsive
- **Desktop**: 1200px max-width, 2-column grids
- **Tablet (1024px)**: 1-column hero, 2-column services
- **Mobile (768px)**: Hamburger menu, single-column, enlarged touch targets
- **Small (480px)**: Full-width buttons, stacked forms, 1.5rem padding

## Spacing & Rhythm
- Base unit: 8px (Tailwind default)
- Section padding: 80px desktop, 70px tablet, 50px mobile, 40px small
- Card padding: 32px, 24px, 18px, 16px (desktop to small)
- Gap patterns: 24px between cards, 14px mobile

## Anti-Patterns Avoided
- No purple gradients, no generic blue CTA, no system fonts
- No uniform rounded-lg everywhere (varied 10–24px)
- No dark mode shortcuts (only intentional light theme)
- No rainbow palettes (3-color green + gold system)
- No full-page gradients (subtle radial orbs only)

## Signature Detail
WhatsApp-green floating action buttons (bottom-right) with labels on hover. Seamless WhatsApp-first contact flow throughout (hero, appointment form, footer, floating FAB).

---

**Files**: `index.css` (OKLCH tokens + fonts), `tailwind.config.js` (shadows/keyframes), `DESIGN.md` (this)

