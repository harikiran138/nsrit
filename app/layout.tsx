import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSRIT | Nadimpalli Satyanarayana Raju Institute of Technology",
  description: "NSRIT (formerly VITS) offers quality technical education in Visakhapatnam. Approved by AICTE, Affiliated to JNTUGV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
