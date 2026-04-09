import Link from 'next/link';
import type { Metadata } from 'next';
import { updates } from './data/updates';

export const metadata: Metadata = {
  title: 'Taborlin — Products, Growth, and Execution',
  description:
    'AI-native operator building products, growth systems, and go-to-market strategies. Shipped multiple SaaS products from zero to market.',
  openGraph: {
    title: 'Taborlin — Products, Growth, and Execution',
    description:
      'AI-native operator building products, growth systems, and go-to-market strategies.',
    url: 'https://taborlin.co',
    siteName: 'Taborlin',
    type: 'website',
  },
  alternates: {
    canonical: 'https://taborlin.co',
  },
};

const projects = [
  {
    name: 'Spatix',
    url: 'https://spatix.io',
    headline: 'GIS product for the non-technical market',
    description:
      'Identified a gap between enterprise GIS tools and what most people actually need. Built and launched a map creation platform targeting marketers, journalists, and researchers — users who need maps but not the complexity of ArcGIS or QGIS.',
    signals: ['Market positioning', 'Product-led growth', '0 → launch', 'Vertical SaaS'],
    outcome: 'Shipped to market. Active users creating and sharing maps without GIS training.',
  },
  {
    name: 'CheapTokens',
    url: 'https://cheaptokens.ai',
    headline: 'AI credit marketplace via daily auctions',
    description:
      'Spotted an arbitrage opportunity in AI inference pricing. Built a marketplace where users bid on discounted AI credits through daily auctions — real price discovery for a market that only had list pricing.',
    signals: ['Marketplace dynamics', 'Pricing strategy', 'Auction mechanics', 'AI infrastructure'],
    outcome: 'Live marketplace. Auction engine, payments, and credit distribution running daily.',
  },
  {
    name: 'GISTools',
    url: 'https://gistools.io',
    headline: 'Developer tools for geospatial workflows',
    description:
      'Built a utility suite for GIS file conversion and spatial analysis that runs entirely in the browser. Designed as a complement to Spatix — capturing developer traffic and creating a product ecosystem.',
    signals: ['Ecosystem strategy', 'Developer audience', 'SEO-driven acquisition', 'Cross-sell'],
    outcome: 'Organic traffic engine. Paired with Spatix to capture both technical and non-technical users.',
  },
  {
    name: 'Atlas',
    headline: 'Internal ops dashboard across all products',
    description:
      'Built an internal command center to manage multiple SaaS products from a single view — dev status, user metrics, revenue, and roadmap. The kind of operational tooling you build when you\'re running several products and need signal, not noise.',
    signals: ['Operational leverage', 'Multi-product management', 'Data consolidation', 'Internal tooling'],
    outcome: 'Single-pane view across GitHub, Vercel, Stripe, and analytics for all products.',
  },
];

const capabilities = [
  {
    area: 'Product & Execution',
    items: ['0 → 1 product launches', 'Roadmap prioritization', 'Rapid prototyping & iteration', 'User research & feedback loops'],
  },
  {
    area: 'Growth & GTM',
    items: ['Go-to-market strategy', 'SEO & content-driven acquisition', 'Product-led growth', 'Pricing & monetization'],
  },
  {
    area: 'Partnerships & BD',
    items: ['Ecosystem & platform strategy', 'Cross-sell & bundling', 'Market positioning', 'Partnership development'],
  },
  {
    area: 'AI & Technical Leverage',
    items: ['AI-native workflows', 'LLM integration & tooling', 'Full-stack product builds', 'Automation & systems design'],
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060B]/80 backdrop-blur-md border-b border-[#1f1f28]/50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-[#fafafa] text-sm font-semibold tracking-tight">
          Taborlin
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#work" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            Work
          </a>
          <a href="#about" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors hidden sm:block">
            About
          </a>
          <Link href="/updates" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            Writing
          </Link>
          <a
            href="mailto:alex@taborlin.co"
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
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <p className="text-sm text-[#a1a1aa] uppercase tracking-widest mb-4">Operator &middot; Builder &middot; GTM</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#fafafa] tracking-tight leading-[1.1]">
            I build products and<br />
            <span className="text-[#a1a1aa]">take them to market.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
            AI-native operator who ships. I&apos;ve taken multiple products from idea to
            live market — owning product, growth, go-to-market, and execution end-to-end.
            Technical enough to build it, commercial enough to sell it.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#work"
              className="text-sm text-[#06060B] bg-[#fafafa] hover:bg-[#e4e4e7] transition-colors px-5 py-2.5 rounded-md font-medium"
            >
              See the work
            </a>
            <a
              href="mailto:alex@taborlin.co"
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

function Work() {
  return (
    <section id="work" className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">What I&apos;ve Shipped</h2>
          <p className="text-sm text-[#a1a1aa]">Products built, launched, and brought to market</p>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-[#0a0a10] border border-[#1f1f28] rounded-xl p-6 sm:p-8 hover:border-[#2a2a35] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    className="text-xl font-semibold text-[#fafafa] hover:text-blue-400 transition-colors"
                  >
                    {project.name}
                    <span className="inline-block ml-1.5 text-[#a1a1aa] text-sm group-hover:text-blue-400 transition-colors">&#8599;</span>
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-[#fafafa]">{project.name}</h3>
                )}
                <span className="text-sm text-[#a1a1aa]/60">{project.headline}</span>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              <p className="text-sm text-[#c8c8d0] mb-4">
                <span className="text-[#a1a1aa]/50">Result:</span> {project.outcome}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.signals.map((s) => (
                  <span
                    key={s}
                    className="text-xs text-[#a1a1aa]/80 bg-[#16161e] border border-[#1f1f28] px-2.5 py-1 rounded-md"
                  >
                    {s}
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
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">How I Operate</h2>
          <p className="text-sm text-[#a1a1aa]">The overlap of product, growth, and technical leverage</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.area} className="bg-[#0a0a10] border border-[#1f1f28] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-[#fafafa] mb-4">{cap.area}</h3>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-[#a1a1aa] flex items-start gap-2.5">
                    <span className="text-[#a1a1aa]/30 mt-1 shrink-0">&#8212;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">About</h2>
        </div>
        <div className="max-w-2xl space-y-4 text-[#a1a1aa] leading-relaxed text-sm sm:text-base">
          <p>
            I run <span className="text-[#fafafa]">Taborlin</span> — where I build, launch, and grow
            software products. Every product I&apos;ve shipped started with a market insight, not a
            technical spec. I find the gap, build the thing, figure out distribution, and iterate
            on what works.
          </p>
          <p>
            I&apos;m most useful where product, growth, and execution intersect. I&apos;ve built
            across AI, geospatial, and marketplaces — but the constant is taking something from
            zero to revenue with speed and commercial instinct.
          </p>
          <p>
            I&apos;m technical enough to prototype, ship, and maintain production products
            using modern AI tooling — but I lead with product thinking, not engineering identity.
            The tech is leverage, not the point.
          </p>
          <p className="text-[#a1a1aa]/50 text-sm">
            Previously operated as 119th Consulting and Atmos Labs.
          </p>
        </div>
      </div>
    </section>
  );
}

function Writing() {
  const recent = updates.slice(0, 3);
  return (
    <section id="writing" className="py-20 sm:py-24 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">Writing</h2>
            <p className="text-sm text-[#a1a1aa]">Notes on building, shipping, and going to market</p>
          </div>
          <Link
            href="/updates"
            className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="space-y-4">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/updates/${post.slug}`}
              className="group block bg-[#0a0a10] border border-[#1f1f28] rounded-xl p-5 sm:p-6 hover:border-[#2a2a35] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                <h3 className="text-base text-[#fafafa] group-hover:text-blue-400 transition-colors font-medium">
                  {post.title}
                </h3>
                <time className="text-xs text-[#a1a1aa]/50 shrink-0">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <p className="text-sm text-[#a1a1aa] mt-2">{post.preview}</p>
            </Link>
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
        <h2 className="text-2xl font-semibold text-[#fafafa] mb-3">Let&apos;s work together</h2>
        <p className="text-sm text-[#a1a1aa] mb-8 max-w-lg mx-auto leading-relaxed">
          Open to GTM, partnerships, and operator roles where product thinking,
          growth, and execution overlap. If that sounds like your team, let&apos;s talk.
        </p>
        <a
          href="mailto:alex@taborlin.co"
          className="inline-block text-sm text-[#06060B] bg-[#fafafa] hover:bg-[#e4e4e7] transition-colors px-6 py-3 rounded-md font-medium"
        >
          alex@taborlin.co
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
          <Link href="/updates" className="hover:text-[#a1a1aa] transition-colors">Writing</Link>
          <a href="mailto:alex@taborlin.co" className="hover:text-[#a1a1aa] transition-colors">Email</a>
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
        <Work />
        <Capabilities />
        <About />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
