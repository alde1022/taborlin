import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://taborlin.co'),
  title: {
    default: 'Taborlin — Software, Data, and AI',
    template: '%s — Taborlin',
  },
  description:
    'Building products and closing enterprise deals across software, data, and AI. $50M+ in opportunities influenced. Multiple products shipped from zero.',
  openGraph: {
    title: 'Taborlin',
    description: 'Products and partnerships across software, data, and AI.',
    url: 'https://taborlin.co',
    siteName: 'Taborlin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taborlin',
    description: 'Products and partnerships across software, data, and AI.',
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
                'Building products and closing enterprise deals across software, data, and AI.',
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
