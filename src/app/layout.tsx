import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taborlin',
  description: 'We build tools for the internet.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
