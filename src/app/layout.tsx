import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Villa Ora di Oros | Luxury Villa Rental in Curaçao",
  description: "Experience unparalleled luxury at Villa Ora di Oro, an exclusive vacation rental in Curaçao. Pristine beaches, private pools, and Caribbean elegance await.",
  keywords: ["Curaçao villa", "luxury vacation rental", "Villa Ora di Oro", "Caribbean luxury", "private villa Curaçao"],
  authors: [{ name: "Villa Ora di Oro" }],
  openGraph: {
    title: "Villa Ora di Oro | Luxury Villa Rental in Curaçao",
    description: "Experience unparalleled luxury at Villa Ora di Oro",
    images: ["/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
