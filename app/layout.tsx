import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PixelGrove Store",
  description: "Welcome to the pixelgrove store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
