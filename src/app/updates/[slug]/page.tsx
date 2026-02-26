import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { updates, getUpdate, getAllSlugs } from '../../data/updates';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getUpdate(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} — Taborlin`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://taborlin.co/updates/${slug}`,
      siteName: 'Taborlin',
    },
    twitter: {
      card: 'summary',
      title: `${post.title} — Taborlin`,
      description: post.description,
    },
    alternates: {
      canonical: `https://taborlin.co/updates/${slug}`,
    },
  };
}

export default async function UpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getUpdate(slug);

  if (!post) return notFound();

  const currentIndex = updates.findIndex((u) => u.slug === slug);
  const nextPost = currentIndex > 0 ? updates[currentIndex - 1] : null;
  const prevPost =
    currentIndex < updates.length - 1 ? updates[currentIndex + 1] : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://taborlin.co/updates/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'Taborlin',
      url: 'https://taborlin.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Taborlin',
      url: 'https://taborlin.co',
    },
  };

  return (
    <div className="min-h-screen bg-[#06060B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
            >
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

        {(prevPost || nextPost) && (
          <nav className="mt-16 pt-8 border-t border-[#1f1f28] flex justify-between">
            {prevPost ? (
              <Link
                href={`/updates/${prevPost.slug}`}
                className="group text-sm"
              >
                <span className="text-[#a1a1aa]/60 text-xs">
                  &larr; Older
                </span>
                <span className="block text-[#a1a1aa] group-hover:text-[#fafafa] transition-colors mt-0.5">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/updates/${nextPost.slug}`}
                className="group text-sm text-right"
              >
                <span className="text-[#a1a1aa]/60 text-xs">
                  Newer &rarr;
                </span>
                <span className="block text-[#a1a1aa] group-hover:text-[#fafafa] transition-colors mt-0.5">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}
      </main>

      <footer className="py-12 border-t border-[#1f1f28]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-[#a1a1aa]/40">&copy; 2026 Taborlin</p>
        </div>
      </footer>
    </div>
  );
}
