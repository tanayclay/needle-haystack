# Needle in a Haystack — The Archives

## What This Is
A teaching demo website for a Claude Code + Chrome class. 18 students use Claude Code's browser navigation to find their personal "needle" page hidden among ~50 themed pages. The site is called "The Archives" — a mysterious digital archive where student data is disguised as archival records.

## Stack
- **Next.js 16** (App Router) + **Tailwind CSS v4**
- All content is static — student info baked into pages from `people.csv`
- Deployed to **Vercel**: https://needle-haystack-five.vercel.app

## Commands
```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npx vercel       # Deploy to Vercel
```

## Site Structure (49 pages)
- `/` — Homepage ("Welcome to The Archives")
- `/about` — About page
- `/map` — Site directory (lists all pages, does NOT reveal which are needles)
- 5 section landings: `/library`, `/laboratory`, `/garden`, `/observatory`, `/vault`
- 40 sub-pages across 5 sections (8 per section)
  - **18 needles** — contain real student data (name, title, org, LinkedIn)
  - **22 haystacks** — fake archival content

## Key Files
```
data/people.ts          # 18 students parsed from people.csv
data/pages.ts           # All 40 sub-page definitions with content
components/record-card.tsx   # Shared archival record card (identical layout for needles & haystacks)
components/sidebar.tsx       # Navigation sidebar
components/section-landing.tsx  # Section landing page template
lib/utils.ts            # Section color helpers
app/layout.tsx          # Root layout with dark theme + sidebar
app/[section]/[slug]/page.tsx  # Dynamic routes (one per section)
```

## How Needles Work
Every sub-page uses the same `RecordCard` component with identical visual layout. Needle pages have extra fields embedded in the card:
- **Subject** → student name
- **Designation** → student title
- **Affiliation** → student organization
- **Reference** → student LinkedIn URL

Claude (or a student) must READ the page content to distinguish needles from haystacks.

## Needle Assignments
| Student | Route |
|---------|-------|
| Andre Domanski | `/library/manuscript-collection` |
| Ansh Bindal | `/library/rare-editions` |
| Anna An8na B. | `/library/scribes-notes` |
| Patricia C. | `/laboratory/field-notes` |
| Heather Melton | `/laboratory/microscopy-log` |
| Dany Dalal | `/laboratory/synthesis-reports` |
| Deepankar Dimri | `/garden/cultivation-diary` |
| Dorothy Huynh | `/garden/greenhouse-records` |
| Luckish Rangra | `/garden/pollination-study` |
| Marina Ghilchik | `/garden/seed-catalog` |
| Mark Lim | `/observatory/celestial-maps` |
| Nathan Lippi | `/observatory/eclipse-records` |
| Nilesh Patil | `/observatory/stellar-catalog` |
| Prashant Mantri | `/vault/acquisition-log` |
| Ria O. | `/vault/classified-documents` |
| Ana Sofia Grass Giraldo | `/vault/expedition-findings` |
| Stephanie Holland | `/vault/provenance-records` |
| Tanay Mishra | `/vault/restoration-archive` |

## Visual Theme
- Dark background (`#0a0a0f`) with warm paper-toned cards
- Monospace fonts for record IDs and metadata, serif for content
- Section color accents: Library=amber, Lab=emerald, Garden=green, Observatory=indigo, Vault=rose
- Aged/archival aesthetic — old library catalog cards

## Adding/Changing Students
1. Edit `people.csv` and `data/people.ts` with the new student info
2. Edit `data/pages.ts` to add/modify needle pages (use the `needlePage()` helper)
3. Ensure the slug exists in the corresponding section's route
