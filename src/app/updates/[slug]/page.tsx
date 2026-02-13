import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const posts: Record<string, { title: string; date: string; content: string }> = {
  'building-atlas': {
    title: 'Building Atlas',
    date: '2026-02-13',
    content: `Managing multiple products across different platforms gets messy fast. GitHub for code, Vercel for deploys, Stripe for revenue, sticky notes for everything else.

Atlas is our internal dashboard that pulls it all together. One view across every project — development status, marketing tasks, user metrics, revenue, and roadmap. Built with Next.js, Prisma, and a handful of API integrations.

It's not a product we're selling. It's a tool we built because we needed it. Every product studio eventually builds something like this, and now we have ours.`,
  },
  'why-taborlin': {
    title: 'Why Taborlin',
    date: '2026-02-01',
    content: `We've gone through a few names. 119th Consulting was the starting point — a consultancy that took on client work to fund product ideas. Atmos Labs was the pivot toward building our own things. Taborlin is what we are now.

The name comes from Taborlin the Great, a fictional character known for being resourceful and building things out of nothing. That felt right for what we do — small team, limited resources, shipping real products.

The rebrand reflects a shift in how we operate. Less consulting, more building. Every project we take on is something we own and grow ourselves.`,
  },
  'spatix-launch': {
    title: 'Launching Spatix',
    date: '2026-01-15',
    content: `GIS software is powerful but hostile to anyone who isn't a specialist. We built Spatix to fix that — create maps in seconds, no GIS skills needed.

The core insight: most people who need maps don't need full GIS capabilities. They need to plot data on a map, style it, and share it. That's it. Spatix does exactly that, and nothing more.

We're starting with web-based map creation and expanding into data visualization, collaboration, and embeddable maps. The goal is to be the Canva of maps — simple enough for anyone, powerful enough to be useful.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} — Taborlin`,
    description: post.content.slice(0, 160),
  };
}

export default async function UpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[#06060B]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060B]/80 backdrop-blur-md border-b border-[#1f1f28]/50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-[#fafafa] text-lg font-serif font-semibold tracking-tight">
            Taborlin
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/#projects" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
              Projects
            </Link>
            <Link href="/#about" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
              About
            </Link>
            <Link href="/updates" className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors">
              Updates
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <Link
          href="/updates"
          className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors mb-8 inline-block"
        >
          &larr; All updates
        </Link>
        <article>
          <time className="text-xs text-[#a1a1aa]/60 uppercase tracking-wider">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="font-serif text-4xl font-medium text-[#fafafa] mt-2 mb-8">
            {post.title}
          </h1>
          <div className="prose-custom">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-[#a1a1aa] leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>

      <footer className="py-12 border-t border-[#1f1f28]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-[#a1a1aa]/40">&copy; 2026 Taborlin</p>
        </div>
      </footer>
    </div>
  );
}
