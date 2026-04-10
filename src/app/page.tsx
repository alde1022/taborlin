import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taborlin — Software, Data, and AI',
  description:
    'Building products and closing enterprise deals across software, data, and AI. $50M+ in opportunities influenced. Multiple products shipped from zero.',
  openGraph: {
    title: 'Taborlin — Software, Data, and AI',
    description:
      'Building products and closing enterprise deals across software, data, and AI.',
    url: 'https://taborlin.co',
    siteName: 'Taborlin',
    type: 'website',
  },
  alternates: {
    canonical: 'https://taborlin.co',
  },
};

const stats = [
  { value: '$50M+', label: 'In opportunities influenced' },
  { value: '25+', label: 'Partnerships closed' },
  { value: '4', label: 'Products shipped — and counting' },
];

const pillars = [
  'Revenue & Partnerships',
  'GTM & Strategy',
  'Product & Execution',
  'Software, Data & AI',
] as const;

type Pillar = typeof pillars[number];

const work: {
  title: string;
  label: string;
  url?: string;
  description: string;
  pillars: Pillar[];
}[] = [
  {
    title: 'WeatherXM',
    label: 'Enterprise Business Development',
    description:
      'Led enterprise BD, generating $1M+ in revenue. Structured deployments of weather data infrastructure, hardware, and APIs for energy and infrastructure customers.',
    pillars: ['Revenue & Partnerships', 'GTM & Strategy'],
  },
  {
    title: 'Enline Energy',
    label: 'Strategic Partnership',
    description:
      'Structured and closed a pilot deploying hyperlocal weather stations and data API integrations for utility grid operations — navigating compliance, hardware logistics, and multi-stakeholder coordination.',
    pillars: ['Revenue & Partnerships', 'Product & Execution'],
  },
  {
    title: 'CheapTokens',
    label: 'AI Compute Marketplace',
    url: 'https://cheaptokens.ai',
    description:
      'Built and launched an AI credit marketplace with daily auctions and real-time bidding. Currently onboarding early users and partners.',
    pillars: ['Product & Execution', 'Software, Data & AI'],
  },
  {
    title: 'Spatix',
    label: 'GIS Platform & Ecosystem',
    url: 'https://spatix.io',
    description:
      'Built and shipped a map creation platform for non-GIS users. Paired with GISTools.io to create a product ecosystem capturing both technical and non-technical users through organic acquisition.',
    pillars: ['Product & Execution', 'GTM & Strategy'],
  },
];

const capabilities = [
  {
    title: 'Revenue & Partnerships',
    description:
      'Enterprise deal structuring, executive relationship development, and strategic partnerships across energy, technology, and infrastructure. Direct experience navigating procurement, compliance, and multi-stakeholder sales cycles.',
  },
  {
    title: 'GTM & Strategy',
    description:
      'Market positioning, pricing strategy, distribution, and channel development. Product-led growth for SaaS. Marketplace dynamics and partner-driven go-to-market.',
  },
  {
    title: 'Product & Execution',
    description:
      'Zero-to-one product development, rapid prototyping, and roadmap prioritization. Multi-product operations with a bias toward shipping fast and iterating on signal.',
  },
  {
    title: 'Software, Data & AI',
    description:
      'Full-stack product builds, data infrastructure, and AI-native workflows. Technical enough to ship production software, commercially focused on what moves the needle.',
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060B]/80 backdrop-blur-md border-b border-[#1f1f28]/50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-[#fafafa] text-sm font-semibold tracking-tight">
          Taborlin
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#work" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            Work
          </a>
          <a href="#capabilities" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors hidden sm:block">
            Capabilities
          </a>
          <a
            href="mailto:hello@taborlin.co"
            className="text-sm text-[#06060B] bg-[#fafafa] hover:bg-[#e4e4e7] transition-colors px-3.5 py-1.5 rounded-md font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-[#fafafa] tracking-tight leading-[1.15]">
            Building products and partnerships<br className="hidden sm:block" />
            <span className="text-[#a1a1aa]">across software, data, and AI.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
            Taborlin ships products, structures enterprise deals, and executes go-to-market
            strategy. $50M+ in opportunities influenced. Multiple products launched
            from zero.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#work"
              className="text-sm text-[#06060B] bg-[#fafafa] hover:bg-[#e4e4e7] transition-colors px-5 py-2.5 rounded-md font-medium"
            >
              See the work
            </a>
            <a
              href="mailto:hello@taborlin.co"
              className="text-sm text-[#fafafa] border border-[#2a2a35] hover:border-[#3a3a45] transition-colors px-5 py-2.5 rounded-md font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 border border-[#1f1f28] rounded-xl p-6 sm:p-8 bg-[#0a0a10]">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i < stats.length - 1 ? 'sm:border-r sm:border-[#1f1f28]' : ''}`}>
              <p className="text-2xl sm:text-3xl font-semibold text-[#fafafa] tracking-tight">{stat.value}</p>
              <p className="text-xs sm:text-sm text-[#a1a1aa]/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EsriLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Esri">
      <path d="M11.64.003c-1.58.037-3.04.445-4.53 1.062C5.04 1.938 2.4 3.947.8 7.736c-.38 1.056-1.88 6.09.79 10.413 2.17 3.507 4.96 5.177 8.37 5.653 3.41.475 5.26.064 7.41-.892 5.04-2.237 8.89-10.634 5.04-16.72C20.89 3.38 16.91.916 12.55 1.106c-1.03-.032-1.64.102-2.25.22-.18-.047-.52.003-.54.4 0 .213.07.379.2.476.14.097 1.27.931 2.1 1.813-.4.044-.83.117-1.27.208-.5-1.07-2.09-.097-3.14-.054-.12.006-.24.024-.37.03-.12-.894-.2-1.821-.18-2.473.34-.772 2.99-1.345 4.79-1.373l.31-.008c.27-.003.29-.213.04-.247-.56-.076-1.1-.105-1.63-.093zm-.19 1.53c3.91-.017 7.35 1.641 8.92 3.57-.56-.291-1.77-.707-2.26-.816-.26-.27-.6-.49-.89-.676-.23-.146-.51-.092-.4.164.05.099.22.267.36.434-.83-.23-3.05-.406-4.11-.31-.69-.775-1.48-1.716-2.42-2.34.26-.016.53-.025.79-.026zm-4.86.426c-.01.339.07 1.328.19 2.282-.48.048-.96.108-1.43.178a10.23 10.23 0 0 0-2.64 3.46c-.1-.892-.15-1.635-.11-2.091 1.11-1.556 2.62-3.072 4-3.828zm8.42 2.649c.49.017.99.052 1.47.101-.86.307-1.24 1.061-1.66 1.662l-.03.034a19.5 19.5 0 0 0-1.17-1.787c.43-.026.9-.027 1.39-.01zm-2.37.121a13.33 13.33 0 0 1 1.48 2.152c-.68.33-1.59.582-1.96 1.111-.15.22-.19.519-.2.842a19.97 19.97 0 0 0-3.28 1.088c-.38-1.128-.72-2.252-.95-3.253 1.1-1.047 2.38-1.217 2.91-1.627a15.03 15.03 0 0 1 2-.313zm6.89.634c.45.171 1.03.407 1.49.656.35.437 1.34 1.418 1.87 4.165.48 2.474-.05 4.354-.21 4.898l-.16.64c-.12.436-.5 1.466-.71 1.882.08-.561.15-2.019.13-2.312.13.042.42-.123.47-.287.05-.165-.48-.42-.48-.42a17.56 17.56 0 0 0-.14-2.286c.12-.195.24-.383.37-.555a10.23 10.23 0 0 0-.16-1.333c.11.035.2.062.27.063.24.003.24-.161.16-.252-.05-.06-.28-.201-.54-.355a10.18 10.18 0 0 0-2.36-4.505zM1.87 7.005s.05.896.09 1.551c0 0-.66.75-1 1.347.13-1.222.42-1.851.9-2.898zm5.35.232c.2 1.001.44 1.828.75 2.978-1.19.523-3.29 1.818-4.21 2.516-.17-.425-.34-1.028-.5-1.648.21-.624.64-1.06 1.25-1.12 1.04-.104 1.93-1.652 2.66-2.665l.05-.06zm-5.15 2.241.01.111c-.19.737-.31 1.502-.34 2.294.31.33.68.879 1.09 1.446-.26.195-.77.543-.89.628-.35.247-.34.636-.09.858.14.122.42.071.52-.01.3-.241.56-.433.9-.65.13.333.25.633.36.919-.15.159-.25.37-.29.676-.11.992.83 1.77 1.62 1.997l.08.02c.04.064.08.124.13.19-.41.32-.7.646-.89.898-.11.146-.24.365-.14.408.1.042.45 0 .61-.028.39-.076.7-.514.97-.674.33.452.86 1.032 1.42 1.591.02.102.05.21.07.299.11.341.25.68.42 1.012.4.186.81.34 1.24.474a7.06 7.06 0 0 0-.53.61c-3.42-1.073-5.96-3.96-6.87-6.988a14.8 14.8 0 0 1-.55-5.48c.05.01.16.061.32.016.11-.079.52-.364.81-.616zm9.89.182c-.01.282-.04.55-.15.765-.17.31-.09 1.208.11 1.502.64.931 1.7.413 2.5.747.37.153.61.408.82.711-1.67.105-3.31.496-4.83 1.195-.78-1.878-1.45-4.049-1.45-4.049v-.002c.95-.449 1.95-.82 3.01-1.088zM8.2 11.077c.42 1.263 1.03 2.95 1.45 3.853l-.18.093a34.55 34.55 0 0 0-2.76-.66c-.84-.173-.87-.128-1.82.147-.14.04-.27.075-.39.113a30.62 30.62 0 0 1-.38-1.018c1.22-.936 2.44-1.723 4.08-2.528zm13.14 1.977c.05.463.09.916.11 1.325a7.84 7.84 0 0 0-.66-.249c.17-.344.35-.712.55-1.076zm-5.61 1.175c.16.28.34.559.59.81.64.655-.37 1.595-.08 3.449h-.002c-.3.032-.6.069-.86.109-.65.102-1.49.323-2.27.614-.45-.714-1.65-2.449-2.26-3.758 1.22-.6 2.93-1.104 4.89-1.224zm4.76.555c.35.1.69.207.97.325.04.522.04 2.311-.07 3.184-.1.214-.36.583-.54.757-.26-.107-.66-.22-1.08-.319.07-.08.14-.154.2-.236.23-1.521-.28-2.006.36-3.398zm-9.67 2.379c.48.811 1.06 1.693 1.5 2.382-.69.336-1.5.856-2.26 1.428.05-.878.07-1.747.25-2.209.25-.648.44-1.128.51-1.601zm8.54 2.053c.46.054.93.131 1.21.202-.63.792-1.49 1.453-2.41 2.027.02-.345.03-.78.04-1.181.41-.32.8-.669 1.16-1.048zm-2.95.01c.09.29.21.597.38.927.16.323.35.559.55.721.07-.045.14-.097.21-.143-.01.356-.02.716-.04 1.064-.24.16-1.41.689-1.87.836a19.84 19.84 0 0 1-2.07-2.71c.72-.3 1.82-.568 2.83-.695zm-3.63 1.001c.34.534 1.46 2.123 1.91 2.635-.82.142-1.96.249-2.86.21 0 0-1.36-.9-1.7-1.246.68-.565 1.78-1.235 2.65-1.599zm-3.16 2.053c.4.262.82.563 1.16.757-.52-.059-1.13-.073-1.59-.228.13-.172.27-.383.43-.529z"/>
    </svg>
  );
}

function LogoSet() {
  return (
    <>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] flex items-center">
        <EsriLogo className="h-5 sm:h-6" />
      </span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-lg sm:text-2xl font-black tracking-[0.25em] uppercase">DTN</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-[13px] sm:text-base font-medium tracking-[0.05em]">Enterprise Holdings</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-base sm:text-xl font-extrabold tracking-tight lowercase">grubhub</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-[13px] sm:text-base font-semibold tracking-[0.06em]">Zeus Weather</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-[13px] sm:text-base font-semibold tracking-[0.04em]">Enline Energy</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-base sm:text-lg font-bold tracking-[0.06em]">Milsoft</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-sm sm:text-[17px] font-semibold tracking-[0.1em] uppercase">Everbridge</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-xl sm:text-2xl font-black tracking-[0.08em] uppercase">AIG</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-[13px] sm:text-base font-medium tracking-[0.04em]">Crop Risk Insurance</span>
      <span className="shrink-0 px-8 sm:px-12 select-none text-[#a1a1aa]/[0.22] text-base sm:text-lg font-bold tracking-[0.08em]">Trueo</span>
    </>
  );
}

function LogoStrip() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs text-[#a1a1aa]/40 uppercase tracking-widest">Selected companies worked with</p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex items-center w-max">
          <LogoSet />
          <LogoSet />
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-20 sm:py-24 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">Selected Work</h2>
          <p className="text-sm text-[#a1a1aa]">Enterprise deals closed and products shipped</p>
        </div>
        <div className="space-y-4">
          {work.map((item) => (
            <div
              key={item.title}
              className="group bg-[#0a0a10] border border-[#1f1f28] rounded-xl p-6 sm:p-8 hover:border-[#2a2a35] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener"
                    className="text-lg font-semibold text-[#fafafa] hover:text-blue-400 transition-colors"
                  >
                    {item.title}
                    <span className="inline-block ml-1.5 text-[#a1a1aa] text-sm group-hover:text-blue-400 transition-colors">&#8599;</span>
                  </a>
                ) : (
                  <h3 className="text-lg font-semibold text-[#fafafa]">{item.title}</h3>
                )}
                <span className="text-sm text-[#a1a1aa]/50">{item.label}</span>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 max-w-2xl">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="text-xs text-[#a1a1aa]/70 bg-[#16161e] border border-[#1f1f28] px-2.5 py-1 rounded-md"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-24 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">Capabilities</h2>
          <p className="text-sm text-[#a1a1aa]">Where product, partnerships, and execution overlap</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-[#0a0a10] border border-[#1f1f28] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-[#fafafa] mb-3">{cap.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-[#fafafa] mb-3">Let&apos;s talk</h2>
        <p className="text-sm text-[#a1a1aa] mb-8 max-w-md mx-auto leading-relaxed">
          Open to partnerships, GTM, and operator roles where product
          and commercial execution overlap.
        </p>
        <a
          href="mailto:hello@taborlin.co"
          className="inline-block text-sm text-[#06060B] bg-[#fafafa] hover:bg-[#e4e4e7] transition-colors px-6 py-3 rounded-md font-medium"
        >
          hello@taborlin.co
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#a1a1aa]/40">&copy; 2026 Taborlin</p>
        <div className="flex gap-6 text-xs text-[#a1a1aa]/40">
          <a href="#work" className="hover:text-[#a1a1aa] transition-colors">Work</a>
          <a href="#capabilities" className="hover:text-[#a1a1aa] transition-colors">Capabilities</a>
          <a href="mailto:hello@taborlin.co" className="hover:text-[#a1a1aa] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#06060B]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <LogoStrip />
        <Work />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
