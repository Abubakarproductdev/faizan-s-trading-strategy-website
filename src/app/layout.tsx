import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fkfutures.com"),
  title: {
    default: "FK Futures — Precision, executed",
    template: "%s — FK Futures",
  },
  description:
    "A trader-led hybrid execution ecosystem combining a fast-paced strategy, precision infrastructure, tools, community, and mentorship.",
  applicationName: "FK Futures",
  keywords: [
    "futures trading",
    "trading execution system",
    "trading mentorship",
    "trading community",
  ],
  openGraph: {
    title: "FK Futures — Precision, executed",
    description:
      "The professional execution infrastructure behind decisive futures traders.",
    type: "website",
    siteName: "FK Futures",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a09",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
