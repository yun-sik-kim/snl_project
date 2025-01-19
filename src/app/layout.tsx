import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-dvw h-dvh flex flex-col items-center`}>        
      {/* Navigation Bar */}
      <nav className="w-full bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold"> Home </Link>

          {/* Links */}
          <div className="space-x-4">
            <Link href="/" className="hover:underline hover:text-blue-300 transition-colors">
              Home
            </Link>
            
            <Link href="/calendar" className="hover:underline hover:text-blue-300 transition-colors">
              Calendar
            </Link>
            
            <Link href="/contact" className="hover:underline hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
        {children}
      </body>
    </html>
  );
}
