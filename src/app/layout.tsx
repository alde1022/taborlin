import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://taborlin.co'),
  title: {
    default: 'Taborlin — Product, Partnerships, and Execution',
    template: '%s — Taborlin',
  },
  description:
    'AI-native operator building products and closing enterprise deals across AI, energy, and technology. $1M+ in enterprise revenue. Multiple products shipped from zero.',
  openGraph: {
    title: 'Taborlin',
    description: 'Product, partnerships, and execution across AI, energy, and enterprise.',
    url: 'https://taborlin.co',
    siteName: 'Taborlin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taborlin',
    description: 'Product, partnerships, and execution across AI, energy, and enterprise.',
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
                'AI-native operator building products and closing enterprise deals across AI, energy, and technology.',
              sameAs: [
                'https://cheaptokens.ai',
                'https://spatix.io',
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
