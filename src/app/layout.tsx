import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://taborlin.co'),
  title: {
    default: 'Alex De La Torre — Software Engineer & Builder',
    template: '%s — Alex De La Torre',
  },
  description:
    'Software engineer who builds and ships full-stack products. Creator of Spatix, CheapTokens, and GISTools.',
  openGraph: {
    title: 'Alex De La Torre',
    description: 'Software engineer who builds and ships full-stack products.',
    url: 'https://taborlin.co',
    siteName: 'Alex De La Torre',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex De La Torre',
    description: 'Software engineer who builds and ships full-stack products.',
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
              '@type': 'Person',
              name: 'Alex De La Torre',
              url: 'https://taborlin.co',
              email: 'alex@taborlin.co',
              jobTitle: 'Software Engineer',
              description:
                'Software engineer who builds and ships full-stack products including Spatix, CheapTokens, and GISTools.',
              sameAs: [
                'https://spatix.io',
                'https://cheaptokens.ai',
                'https://gistools.io',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Taborlin',
                url: 'https://taborlin.co',
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
