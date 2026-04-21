'use client';

import { useState } from 'react';

type Company = {
  name: string;
  logo: string;
  fallback?: string;
};

const companies: Company[] = [
  { name: 'Esri', logo: 'https://cdn.brandfetch.io/esri.com/w/400/h/120' },
  { name: 'DTN', logo: 'https://cdn.brandfetch.io/dtn.com/w/400/h/120' },
  {
    name: 'Enterprise Holdings',
    logo: 'https://cdn.brandfetch.io/enterpriseholdings.com/w/400/h/120',
  },
  { name: 'Grubhub', logo: 'https://cdn.brandfetch.io/grubhub.com/w/400/h/120' },
  { name: 'Orpheus AI', logo: 'https://cdn.brandfetch.io/orpheus.ai/w/400/h/120' },
  { name: 'Enline Energy', logo: 'https://cdn.brandfetch.io/enline.energy/w/400/h/120' },
  {
    name: 'Milsoft Utility Solutions',
    logo: 'https://cdn.brandfetch.io/milsoft.com/w/400/h/120',
    fallback: 'Milsoft',
  },
  { name: 'Everbridge', logo: 'https://cdn.brandfetch.io/everbridge.com/w/400/h/120' },
  { name: 'AIG', logo: 'https://cdn.brandfetch.io/aig.com/w/400/h/120' },
  { name: 'Trueo', logo: 'https://cdn.brandfetch.io/trueo.com/w/400/h/120' },
  {
    name: 'GE Transportation',
    logo: 'https://cdn.brandfetch.io/wabtec.com/w/400/h/120',
  },
  {
    name: 'Crop Risk Services',
    logo: 'https://cdn.brandfetch.io/cropriskservices.com/w/400/h/120',
  },
];

function LogoItem({ company }: { company: Company }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="logo-text shrink-0">{company.fallback ?? company.name}</span>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={company.logo}
      alt={company.name}
      loading="lazy"
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
