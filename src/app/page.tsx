import Link from 'next/link';
import type { Metadata } from 'next';
import { updates } from './data/updates';

export const metadata: Metadata = {
  title: 'Alex De La Torre — Software Engineer & Builder',
  description:
    'Software engineer who builds and ships full-stack products. Creator of Spatix, CheapTokens, and GISTools.',
  openGraph: {
    title: 'Alex De La Torre — Software Engineer & Builder',
    description:
      'Software engineer who builds and ships full-stack products. Creator of Spatix, CheapTokens, and GISTools.',
    url: 'https://taborlin.co',
    siteName: 'Alex De La Torre',
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
    headline: 'Map creation tool for non-GIS users',
    description:
      'Web-based platform that lets anyone create, style, and share maps in seconds — no GIS expertise required. Upload a CSV, pick a style, get a shareable map.',
    tech: ['Next.js', 'TypeScript', 'Mapbox GL', 'PostgreSQL', 'Vercel'],
    role: 'Solo developer — designed, built, and launched end-to-end',
  },
  {
    name: 'CheapTokens',
    url: 'https://cheaptokens.ai',
    headline: 'AI credit marketplace with daily auctions',
    description:
      'Marketplace for discounted AI inference credits via real-time auctions. Built a bidding engine, payment processing, and credit distribution system.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Real-time WebSockets', 'Vercel'],
    role: 'Solo developer — architecture, auction engine, payments',
  },
  {
    name: 'GISTools',
    url: 'https://gistools.io',
    headline: 'GIS file conversion and analysis utilities',
    description:
      'Developer tools for converting between GIS file formats (GeoJSON, Shapefile, KML, GPX) and running spatial analysis in the browser.',
    tech: ['Next.js', 'TypeScript', 'GDAL/OGR', 'Web Workers'],
    role: 'Solo developer — built conversion pipeline and browser-based processing',
  },
  {
    name: 'Atlas',
    headline: 'Internal operations dashboard',
    description:
      'Unified dashboard for managing multiple SaaS products — pulls data from GitHub, Vercel, Stripe, and analytics into a single view per project.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'REST APIs', 'Stripe API'],
    role: 'Solo developer — API integrations, data modeling, UI',
  },
];

const skills = {
  'Languages': ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML/CSS'],
  'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'Mapbox GL JS'],
  'Backend': ['Node.js', 'Prisma', 'REST APIs', 'WebSockets'],
  'Infrastructure': ['Vercel', 'PostgreSQL', 'Stripe', 'GitHub Actions'],
  'Domains': ['GIS / Geospatial', 'AI / LLMs', 'SaaS', 'Developer Tools'],
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060B]/80 backdrop-blur-md border-b border-[#1f1f28]/50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-[#fafafa] text-sm font-semibold tracking-tight">
          Alex De La Torre
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#projects" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors hidden sm:block">
            Skills
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
          <p className="text-sm text-[#a1a1aa] uppercase tracking-widest mb-4">Software Engineer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#fafafa] tracking-tight leading-[1.1]">
            I build and ship<br />
            <span className="text-[#a1a1aa]">full-stack products.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#a1a1aa] max-w-xl leading-relaxed">
            Software engineer focused on building products from zero to launch.
            I&apos;ve designed, developed, and shipped multiple SaaS applications
            across GIS, AI, and developer tools — handling everything from
            architecture to deployment.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a
              href="#projects"
              className="text-sm text-[#06060B] bg-[#fafafa] hover:bg-[#e4e4e7] transition-colors px-5 py-2.5 rounded-md font-medium"
            >
              View my work
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

function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">Projects</h2>
          <p className="text-sm text-[#a1a1aa]">Products I&apos;ve built and shipped</p>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-[#0a0a10] border border-[#1f1f28] rounded-xl p-6 sm:p-8 hover:border-[#2a2a35] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                <div className="flex items-center gap-3">
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
                  <span className="text-sm text-[#a1a1aa]/70">{project.headline}</span>
                </div>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              <p className="text-xs text-[#a1a1aa]/50 mb-4 italic">
                {project.role}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-[#a1a1aa]/80 bg-[#16161e] border border-[#1f1f28] px-2.5 py-1 rounded-md"
                  >
                    {t}
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

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">Skills & Technologies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs text-[#a1a1aa]/50 uppercase tracking-widest mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-[#c8c8d0] bg-[#0f0f14] border border-[#1f1f28] px-3 py-1.5 rounded-md"
                  >
                    {item}
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

function Background() {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[#1f1f28]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-2">Background</h2>
        </div>
        <div className="max-w-2xl space-y-4 text-[#a1a1aa] leading-relaxed text-sm sm:text-base">
          <p>
            I&apos;m a software engineer who thrives on building products from the ground up.
            I operate under <span className="text-[#fafafa]">Taborlin</span> — a solo product studio
            where I handle the full stack: product design, engineering, infrastructure, and launch.
          </p>
          <p>
            My work spans geospatial software, AI marketplaces, and developer tools.
            I care about shipping fast, writing clean code, and solving real problems
            with minimal complexity.
          </p>
          <p className="text-[#a1a1aa]/60 text-sm">
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
            <p className="text-sm text-[#a1a1aa]">Notes on building and shipping</p>
          </div>
          <Link
            href="/updates"
            className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="space-y-6">
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
        <h2 className="text-2xl font-semibold text-[#fafafa] mb-3">Let&apos;s connect</h2>
        <p className="text-sm text-[#a1a1aa] mb-8 max-w-md mx-auto">
          Interested in working together, or just want to say hello? I&apos;d love to hear from you.
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
        <p className="text-xs text-[#a1a1aa]/40">&copy; 2026 Alex De La Torre</p>
        <div className="flex gap-6 text-xs text-[#a1a1aa]/40">
          <a href="#projects" className="hover:text-[#a1a1aa] transition-colors">Projects</a>
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
        <Projects />
        <Skills />
        <Background />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
