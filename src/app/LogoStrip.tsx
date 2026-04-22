'use client';

import { useState } from 'react';

type Company = {
  /** Display name. Used as alt text and the text fallback. */
  name: string;
  /**
   * Optional self-hosted logo path under /public. When provided, the
   * image is rendered with the shared .logo-item treatment and the
   * text fallback only kicks in if the request fails. When omitted,
   * the company renders as a styled text wordmark.
   *
   * Why self-hosted: external CDNs (Brandfetch, Clearbit) now require
   * client IDs or return HTML error pages on rate limit, which renders
   * as broken images on the homepage. Local SVGs are free and
   * deterministic.
   */
  logo?: string;
  /** Short text shown when the logo fails or is intentionally absent. */
  fallback?: string;
  /**
   * Tailwind classes layered on top of .logo-text for the text fallback
   * (used for brand-specific type treatments).
   */
  textClassName?: string;
};

/**
 * Curated "selected companies worked with" list. Order here = visual
 * order in the scrolling strip.
 *
 * Logos live in public/logos/*.svg. The .logo-item CSS in globals.css
 * re-colors any SVG to muted off-white automatically, so source color
 * does not matter. See public/logos/README.md for how to add more.
 */
const companies: Company[] = [
  { name: 'Esri', logo: '/logos/esri.svg' },
  { name: 'DTN', logo: '/logos/dtn.svg' },
  { name: 'Enterprise Holdings', logo: '/logos/enterpriseholdings.svg' },
  { name: 'Grubhub', logo: '/logos/grubhub.svg' },
  { name: 'Orpheus AI', textClassName: 'font-semibold tracking-[0.04em]' },
  { name: 'Enline Energy', textClassName: 'font-semibold tracking-[0.04em]' },
  { name: 'Milsoft Utility Solutions', textClassName: 'font-bold tracking-[0.05em]' },
  { name: 'Everbridge', logo: '/logos/everbridge.svg' },
  { name: 'AIG', logo: '/logos/aig.svg' },
  { name: 'Trueo', textClassName: 'font-bold tracking-[0.06em]' },
  { name: 'GE Transportation', logo: '/logos/wabtec.svg' },
  { name: 'Crop Risk Services', textClassName: 'font-medium tracking-[0.03em]' },
];

function LogoItem({ company }: { company: Company }) {
  const [failed, setFailed] = useState(false);

  if (!company.logo || failed) {
    return (
      <span
        className={`logo-text shrink-0 px-7 sm:px-10 select-none ${company.textClassName ?? ''}`}
      >
        {company.fallback ?? company.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={company.logo}
      alt={company.name}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="logo-item shrink-0"
    />
  );
}

export default function LogoStrip() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs text-[#a1a1aa]/40 uppercase tracking-widest">
          Selected companies worked with
        </p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex items-center gap-12 sm:gap-16 w-max">
          {[...companies, ...companies].map((co, i) => (
            <LogoItem key={`${co.name}-${i}`} company={co} />
          ))}
        </div>
      </div>
    </section>
  );
}
