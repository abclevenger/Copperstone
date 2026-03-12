import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
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
  alternates: {
    canonical: "https://copperstone.info",
  },
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
        <SiteHeader />
        {children}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69b2ed9e6053f690a3de824b"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
