# Company logos

Self-hosted SVGs for the homepage "selected companies worked with" strip.

## Why self-hosted
External logo CDNs (Brandfetch, Clearbit, etc.) now require client IDs or
return HTML error pages on rate limits, which renders as broken images on
the homepage. Self-hosting is free, deterministic, and faster to load.

## Adding a logo
1. Download a monochrome SVG (mark only — no tagline, no full lockup).
   Good sources:
   - Official brand/press kit pages
   - Simple Icons (simpleicons.org) — MIT-licensed
   - Wikipedia commons (public domain SVGs)
2. Save as `<slug>.svg` in this directory. Keep the filename lowercase.
3. Flip the corresponding entry in `src/app/LogoStrip.tsx` to
   `logo: '/logos/<slug>.svg'`.
4. The `.logo-item` CSS in `globals.css` re-colors the SVG to muted
   off-white automatically, so the source color does not matter.

## Falling back to text
If a brand does not have a usable logo, leave the `logo` field unset on
its entry in `LogoStrip.tsx`. The component renders a styled text
wordmark using the entry's `textClassName`.
