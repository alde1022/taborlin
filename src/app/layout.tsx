import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://taborlin.co'),
  title: {
    default: 'Taborlin — Products, Growth, and Execution',
    template: '%s — Taborlin',
  },
  description:
    'AI-native operator building products, growth systems, and go-to-market strategies. Shipped multiple SaaS products from zero to market.',
  openGraph: {
    title: 'Taborlin',
    description: 'AI-native operator building products, growth systems, and go-to-market strategies.',
    url: 'https://taborlin.co',
    siteName: 'Taborlin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taborlin',
    description: 'AI-native operator building products, growth systems, and go-to-market strategies.',
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
                'AI-native operator building products, growth systems, and go-to-market strategies.',
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
