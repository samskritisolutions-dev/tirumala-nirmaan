import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thirumala Constructions & Developers | Hyderabad",
  description: "Residential and commercial construction and real estate development across Hyderabad. Explore completed and ongoing projects by Thirumala Constructions & Developers.",
  openGraph: { title: "Thirumala Constructions & Developers", description: "Building trust. Creating landmarks. Shaping tomorrow.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
