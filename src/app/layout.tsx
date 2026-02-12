import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-jakarta",
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
      <body
        className={`${anton.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
