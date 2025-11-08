import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Costiera Cinema | Amalfi Coast Film Tourism Merchandise",
  description: "Authentic merchandise celebrating The Equalizer 3, Ripley, and Hotel Costiera - filmed on Italy's stunning Amalfi Coast.",
  keywords: ["Amalfi Coast", "film tourism", "Equalizer 3", "Ripley", "Netflix", "merchandise", "Atrani", "Positano"],
  authors: [{ name: "Costiera Cinema" }],
  openGraph: {
    title: "Costiera Cinema",
    description: "Where Cinema Meets The Coast",
    type: "website",
    locale: "en_US",
    siteName: "Costiera Cinema",
  },
  twitter: {
    card: "summary_large_image",
    title: "Costiera Cinema",
    description: "Where Cinema Meets The Coast",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${outfit.variable} font-body antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
