import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SITE = "https://zenbify.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Zenbify: confirm orders, ship faster, see your profit", template: "%s | Zenbify" },
  description:
    "Zenbify is an AI-powered commerce platform for sellers in Bangladesh: store, AI order confirmation, courier booking and profit tracking in one dashboard.",
  openGraph: { siteName: "Zenbify", type: "website", url: SITE },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0b1220", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
