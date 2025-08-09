import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunny Garg - Portfolio",
  description:
    "Personal portfolio of Sunny Garg - Competitive Programmer & Full-Stack Developer",
  keywords: [
    "portfolio",
    "developer",
    "competitive programming",
    "full-stack",
    "react",
    "next.js",
  ],
  authors: [{ name: "Sunny Garg" }],
  creator: "Sunny Garg",
  openGraph: {
    title: "Sunny Garg - Portfolio",
    description:
      "Personal portfolio of Sunny Garg - Competitive Programmer & Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
