import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-200`}
      >
        <Navbar />
        <main className="flex-auto p-10">{children}</main>
        <footer className="mt-auto bg-gray-50 py-3 px-10">
          <a href="https://github.com/kirillcodes" target="_blank">
            @kirillcodes
          </a>
        </footer>
      </body>
    </html>
  );
}
