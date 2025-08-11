import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#3b82f6',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bmi-calculator.vercel.app'),
  title: {
    default: 'BMI Calculator - Free Body Mass Index Calculator',
    template: '%s | BMI Calculator',
  },
  description: 'Free online BMI calculator to calculate your Body Mass Index. Get instant results with metric and imperial units. Check if your weight is healthy with our easy-to-use BMI tool.',
  keywords: [
    'BMI calculator',
    'body mass index',
    'weight calculator',
    'health calculator',
    'BMI tool',
    'healthy weight',
    'metric BMI',
    'imperial BMI',
    'free BMI calculator',
    'online BMI calculator'
  ],
  authors: [{ name: 'BMI Calculator Team' }],
  creator: 'BMI Calculator Team',
  publisher: 'BMI Calculator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bmi-calculator.vercel.app',
    siteName: 'BMI Calculator',
    title: 'BMI Calculator - Free Body Mass Index Calculator',
    description: 'Free online BMI calculator to calculate your Body Mass Index. Get instant results with metric and imperial units.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BMI Calculator - Calculate your Body Mass Index',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator - Free Body Mass Index Calculator',
    description: 'Free online BMI calculator to calculate your Body Mass Index. Get instant results with metric and imperial units.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bmi-calculator.vercel.app',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} h-full antialiased`}>
        <div className="min-h-full flex flex-col">
          <main className="flex-1">
            {children}
          </main>
          <footer className="py-4 text-center text-sm text-gray-500">
            <p>&copy; 2024 BMI Calculator. For informational purposes only.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}