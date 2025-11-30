import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://naveen-s.com'),
  title: "Naveen S | Principal Engineer & Creative Technologist",
  description: "Portfolio of Naveen S, Principal Engineer at Zoho. Specializing in AI Agentic Frameworks, Homomorphic Encryption, and scalable system design.",
  keywords: ["Naveen S", "Naveen Zoho", "Principal Engineer", "AI Agents", "Encryption", "React", "Next.js", "Portfolio", "Software Engineer", "Cryptography"],
  authors: [{ name: "Naveen S", url: "https://naveen-s.com" }],
  creator: "Naveen S",
  alternates: {
    canonical: "https://naveen-s.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naveen-s.com",
    title: "Naveen S | Principal Engineer & Creative Technologist",
    description: "Building AI Agents that think & Encryption that protects. Specializing in AI frameworks, homomorphic encryption, and scalable system design.",
    siteName: "Naveen S Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 800,
        alt: "Naveen S - Principal Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@naveen_s",
    creator: "@naveen_s",
    title: "Naveen S | Principal Engineer",
    description: "Building AI Agents that think & Encryption that protects.",
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-body antialiased bg-background text-foreground`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
