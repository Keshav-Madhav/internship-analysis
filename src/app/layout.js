"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/icon.png" />
      <body className={inter.className}>
        <NextUIProvider>
          <Toaster richColors closeButton />
          {children}
          <ProgressBar
            height="5px"
            color="#7A7AFF"
            shallowRouting
          />
        </NextUIProvider></body>
    </html>
  );
}
