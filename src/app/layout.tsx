import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/layout/HeaderComponent";
import { Footer } from "@/components/layout/FooterComponent";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ["latin"] });

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    template: '%s | ' + process.env.NEXT_PUBLIC_SITE_PAGE_TITLE,
    default: process.env.NEXT_PUBLIC_SITE_PAGE_TITLE,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-light`}>
        <Toaster position="top-center" />
        <Header />
        <div className="container">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
