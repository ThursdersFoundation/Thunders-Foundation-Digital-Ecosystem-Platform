import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thunders Foundation | Digital Ecosystem Platform",
  description:
    "Building the future of digital ecosystems. Next-generation AI-powered platform integrating web applications, intelligent systems, and interactive experiences.",
  keywords: [
    "Thunders Foundation",
    "Digital Ecosystem",
    "AI Platform",
    "Web Applications",
    "Backend Systems",
    "Interactive Experiences",
    "Technology",
  ],
  authors: [{ name: "Thunders Foundation" }],
  icons: {
    icon: "/thunders-favicon.png",
  },
  openGraph: {
    title: "Thunders Foundation: Digital Ecosystem Platform",
    description:
      "Building the future of digital ecosystems. AI-powered platform for next-generation web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-thunder-dark text-thunder-text`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
