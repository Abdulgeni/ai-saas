import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'AI SaaS Starter',
  description: 'Complete SaaS with auth, billing, and AI features'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}