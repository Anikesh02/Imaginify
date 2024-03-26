import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Sans({
   subsets: ["latin"] ,
   weight: ['400', '500', '600', '700'],
   variable: '--font-ibm-plex'
  });

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
