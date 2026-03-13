import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-montserrat-alternates",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Klima Harvest",
    template: "%s | Klima Harvest",
  },
  description:
    "Empowering climate action through transparent, community-driven carbon projects in Kenya.",
  metadataBase: new URL("https://klima.com"),
  openGraph: {
    title: "Klima Harvest",
    description: "Track, verify, and support real climate impact in Kenya.",
    type: "website",
    locale: "en_KE",
    siteName: "Klima Harvest",
  },
  twitter: {
    card: "summary_large_image",
    site: "@klima_harvest",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserratAlternates.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}