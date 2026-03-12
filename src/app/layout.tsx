import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import DeferredChatWidget from "@/components/DeferredChatWidget";
import SiteHeader from "@/components/SiteHeader";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://copperstone.info"),
  title: {
    default: "Copperstone Executive Suites | Office & Meeting Space in Land O' Lakes & South Tampa",
    template: "%s | Copperstone Executive Suites",
  },
  description:
    "Professional executive suites, coworking, virtual offices, and meeting space in Land O' Lakes and South Tampa. Grow your business with Copperstone Executive Suites.",
  openGraph: {
    siteName: "Copperstone Executive Suites",
    type: "website",
    locale: "en_US",
    url: "https://copperstone.info",
    title: "Copperstone Executive Suites | Office & Meeting Space in Land O' Lakes & South Tampa",
    description:
      "Professional executive suites, coworking, virtual offices, and meeting space in Land O' Lakes and South Tampa.",
    images: [{ url: "/Executive-Offices-for-Rent-Land-O-Lakes.jpg", width: 1200, height: 630, alt: "Copperstone Executive Suites" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Copperstone Executive Suites | Office & Meeting Space",
    description:
      "Professional executive suites, coworking, virtual offices, and meeting space in Land O' Lakes and South Tampa.",
    images: ["/Executive-Offices-for-Rent-Land-O-Lakes.jpg"],
  },
  icons: {
    icon: "/favicon-copperstone.png",
    shortcut: "/favicon-copperstone.png",
    apple: "/favicon-copperstone.png",
  },
  alternates: {
    canonical: "https://copperstone.info",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3RV4C1HD8N"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RV4C1HD8N');
          `}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-[#c47a3a] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <PageTransition>
          <div id="main-content">{children}</div>
        </PageTransition>
        <BackToTop />
        <CookieConsent />
        <DeferredChatWidget />
      </body>
    </html>
  );
}
