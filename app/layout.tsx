import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OhMyToken — Track AI coding agents locally",
  description:
    "Privacy-first usage monitor for Claude, Codex, and Gemini. No login, no OAuth, no cloud sync. Local-only by default.",
  metadataBase: new URL("https://ohmytoken-site.vercel.app"),
  openGraph: {
    title: "OhMyToken — Track AI coding agents locally",
    description:
      "Privacy-first usage monitor for Claude, Codex, and Gemini. Local-only by default.",
    type: "website",
    url: "https://ohmytoken-site.vercel.app",
    images: [{ url: "/logo-mark.svg", width: 96, height: 96, alt: "OhMyToken" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OhMyToken — Track AI coding agents locally",
    description: "Privacy-first usage monitor for Claude, Codex, and Gemini.",
    images: ["/logo-mark.svg"],
  },
  icons: {
    icon: "/favicon.svg",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
