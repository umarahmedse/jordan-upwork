import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// Fix: Reference the font from the public directory
const myFont = localFont({
  src: "./Sohne.ttf", // or "../public/Sohne.ttf" depending on your file structure
});

// Alternative approach if the above doesn't work:
// const myFont = localFont({
//   src: [
//     {
//       path: "../public/Sohne.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
// });

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
