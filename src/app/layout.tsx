import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Site Name — AI-based Blockchain",
  description:
    "AI-based blockchain landing: Smart Contracts, Services, Solutions, Roadmap, Whitepaper, Benefits, Reviews (JSON-LD).",
  openGraph: {
    title: "Site Name — AI-based Blockchain",
    description:
      "Fast blockchain (120K TPS) with AI-based data security and Proof of Stake consensus.",
    type: "website",
    images: [{ url: "/images/og.webp", width: 1200, height: 630, alt: "Site Name" }],
  },
metadataBase: new URL("https://site-name-landing.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}