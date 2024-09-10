import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const steezyFont = localFont({
  src: [
    {
      path: './fonts/Steez-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SteezBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Last Stand Trading Company",
  description: "Howdy, feller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${steezyFont.className} bg-stone-900`}>{children}</body>
    </html>
  );
}
