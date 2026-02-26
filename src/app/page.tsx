import Link from 'next/link';
import type { Metadata } from 'next';
import { updates } from './data/updates';

export const metadata: Metadata = {
  title: 'Taborlin — We build tools for the internet.',
  description:
    'Taborlin is a product studio that builds, launches, and grows software products including Spatix, CheapTokens, and GISTools.',
  openGraph: {
    title: 'Taborlin — We build tools for the internet.',
    description:
      'Product studio building Spatix, CheapTokens, GISTools, and more.',
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
    description: 'Create maps in seconds. No GIS skills needed.',
    status: 'active' as const,
    tags: ['GIS', 'SaaS'],
  },
  {
    name: 'CheapTokens',
    url: 'https://cheaptokens.ai',
    description: 'Discounted Venice AI credits via daily auctions.',
    status: 'active' as const,
    tags: ['AI', 'Marketplace'],
  },
  {
    name: 'GISTools',
    url: 'https://gistools.io',
    description: 'GIS file conversion and analysis tools.',
    status: 'active' as const,
    tags: ['GIS', 'Developer Tools'],
  },
];

const statusColors = {
  active: 'bg-green-500',
  building: 'bg-yellow-500',
  paused: 'bg-zinc-500',
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060B]/80 backdrop-blur-md border-b border-[#1f1f28]/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[#fafafa] text-lg font-serif font-semibold tracking-tight">
          Taborlin
        </Link>
        <div className="flex items-center gap-8">
          <a href="#projects" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            About
          </a>
          <Link href="/updates" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            Updates
          </Link>
          <a href="#contact" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#fafafa] tracking-tight leading-[1.1]">
          We build tools<br />for the internet.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#a1a1aa] max-w-xl leading-relaxed">
          Taborlin is a product studio that builds, launches, and grows software products.
        </p>
        <a
          href="#projects"
          className="inline-block mt-10 text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors border-b border-[#a1a1aa]/30 hover:border-[#fafafa]/50 pb-0.5"
        >
          See what we&apos;re building
        </a>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl font-medium text-[#fafafa] mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0f0f14] border border-[#1f1f28] rounded-xl p-6 hover:border-[#2a2a35] transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-medium text-[#fafafa] group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <span className={`w-2 h-2 rounded-full ${statusColors[project.status]}`} />
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#a1a1aa]/70 bg-[#1f1f28] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 border-t border-[#1f1f28]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl font-medium text-[#fafafa] mb-8">About</h2>
        <div className="max-w-2xl space-y-5 text-[#a1a1aa] leading-relaxed">
          <p>
            Taborlin builds internet products. We focus on tools that are useful,
            well-crafted, and solve real problems — from geospatial software to
            AI marketplaces.
          </p>
          <p>
            We stay small on purpose. Small teams ship faster, make better decisions,
            and build things they&apos;re proud of. Every product we launch is something
            we&apos;d want to use ourselves.
          </p>
          <p className="text-[#a1a1aa]/60 text-sm">
            Previously operated as 119th Consulting and Atmos Labs.
          </p>
        </div>
      </div>
    </section>
  );
}

function Updates() {
  return (
    <section id="updates" className="py-24 border-t border-[#1f1f28]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-serif text-3xl font-medium text-[#fafafa]">Updates</h2>
          <Link
            href="/updates"
            className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="space-y-8">
          {updates.map((post) => (
            <Link
              key={post.slug}
              href={`/updates/${post.slug}`}
              className="group block"
            >
              <time className="text-xs text-[#a1a1aa]/60 uppercase tracking-wider">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h3 className="text-lg text-[#fafafa] mt-1 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[#a1a1aa] mt-1">{post.preview}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-[#1f1f28]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl font-medium text-[#fafafa] mb-2">Get in touch</h2>
            <a
              href="mailto:alex@taborlin.co"
              className="text-[#a1a1aa] hover:text-[#fafafa] transition-colors text-sm"
            >
              alex@taborlin.co
            </a>
          </div>
          <div className="flex gap-6 text-sm text-[#a1a1aa]">
            <a href="#projects" className="hover:text-[#fafafa] transition-colors">Projects</a>
            <a href="#about" className="hover:text-[#fafafa] transition-colors">About</a>
            <Link href="/updates" className="hover:text-[#fafafa] transition-colors">Updates</Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[#1f1f28]">
          <p className="text-xs text-[#a1a1aa]/40">&copy; 2026 Taborlin</p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#06060B]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}
