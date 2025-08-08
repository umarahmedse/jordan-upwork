import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: "./Sohne.ttf",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan App",
  description: "A modern way of learning Michif",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
