import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Shopify Freelancer - Redesign + Structure Fixes That Convert",
  description: "I help Shopify stores get a modern redesign and clean backend structure so customers convert better—and you stop wasting time fixing broken stuff.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={open_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
