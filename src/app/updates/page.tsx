import Link from 'next/link';
import type { Metadata } from 'next';
import { updates } from '../data/updates';

export const metadata: Metadata = {
  title: 'Updates',
  description:
    'Updates from Taborlin — what we\'re building, launching, and learning across Spatix, CheapTokens, and GISTools.',
  alternates: {
    canonical: 'https://taborlin.co/updates',
  },
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-[#06060B]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060B]/80 backdrop-blur-md border-b border-[#1f1f28]/50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#fafafa] text-lg font-serif font-semibold tracking-tight"
          >
            Taborlin
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/#projects"
              className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            >
              About
            </Link>
            <Link
              href="/updates"
              className="text-sm text-[#fafafa]"
            >
              Updates
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl font-medium text-[#fafafa] mb-4">
          Updates
        </h1>
        <p className="text-[#a1a1aa] mb-16">
          What we&apos;re building, launching, and learning.
        </p>

        <div className="space-y-12">
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
              <h2 className="text-xl text-[#fafafa] mt-1.5 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#a1a1aa] mt-2 leading-relaxed">
                {post.preview}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-[#1f1f28]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-[#a1a1aa]/40">&copy; 2026 Taborlin</p>
        </div>
      </footer>
    </div>
  );
}
