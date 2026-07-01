import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

// Load premium sans-serif font configuration
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synthetix — AI SaaS Core Platform",
  description: "Enterprise-grade AI-powered SaaS orchestrator featuring secure authorization, Stripe billing automation, and deep contextual summarization modules.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Synthetix — AI SaaS Core Platform",
    description: "Enterprise-grade AI SaaS framework ready for scale.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-slate-950 text-slate-100 min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}