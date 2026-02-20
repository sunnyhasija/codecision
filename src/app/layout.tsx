import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codecision.ai"),
  title: {
    default: "Codecision | AI Advisory for Decision Systems",
    template: "%s | Codecision",
  },
  description:
    "Codecision is a research-backed advisory for organizations deploying AI in supply chain and operational decisions. Built on peer-reviewed research and large-scale behavioral evaluation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Codecision",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
