import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FWC Consulting | Trust, Leadership & Culture Advisory",
    template: "%s | FWC Consulting",
  },
  description:
    "Helping organisations close the gap between the culture they aspire to and the reality people experience. Expert advisory on trust, leadership, hybrid working, and change transformation.",
  keywords: [
    "trust consulting",
    "leadership development",
    "culture transformation",
    "employee experience",
    "hybrid working",
    "change management",
    "psychological safety",
    "manager capability",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "FWC Consulting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-navy">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
