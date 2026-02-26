import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://taborlin.co'),
  title: {
    default: 'Taborlin — We build tools for the internet.',
    template: '%s — Taborlin',
  },
  description:
    'Taborlin is a product studio that builds, launches, and grows software products including Spatix, CheapTokens, and GISTools.',
  openGraph: {
    title: 'Taborlin',
    description: 'We build tools for the internet.',
    url: 'https://taborlin.co',
    siteName: 'Taborlin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taborlin',
    description: 'We build tools for the internet.',
  },
  alternates: {
    canonical: 'https://taborlin.co',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Taborlin',
              url: 'https://taborlin.co',
              description:
                'Product studio that builds, launches, and grows software products.',
              founder: {
                '@type': 'Person',
                name: 'Alex',
              },
              sameAs: [
                'https://spatix.io',
                'https://cheaptokens.ai',
                'https://gistools.io',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
