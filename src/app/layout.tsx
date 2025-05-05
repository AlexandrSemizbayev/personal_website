import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import MouseTracker from "@/components/MouseTracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior: 'smooth'}}>
    <meta name="viewport" content="width=device-width, user-scalable=no"/>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <div style={{zIndex: -1}} className="fixed left-0 top-0"><MouseTracker/></div>
    <div className="wrap w-[90vw] pt-5 lg:pt-0 lg:w-[70vw] mx-auto">
      {children}
    </div>
    </body>
    </html>
  );
}
