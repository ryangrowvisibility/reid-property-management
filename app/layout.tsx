import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Oswald({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Reid Property Management | Fence & Gate Installation in Toronto",
  description:
    "Wood fences, gates and chain link replacement for Toronto homeowners, built by Jonathan Reid and his brother. Fair prices, quality work, 5.0 stars on Google. Call (647) 571-2195.",
  openGraph: {
    title: "Reid Property Management | Toronto Fences & Gates",
    description: "New wood fences and gates in Toronto. Fair prices, 5.0 on Google. Call (647) 571-2195.",
    type: "website",
    locale: "en_CA",
    images: ["/images/p2.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
