import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Shopify Freelancer - Redesign + Structure Fixes That Convert",
  description: "I help Shopify stores get a modern redesign and clean backend structure so customers convert better—and you stop wasting time fixing broken stuff.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${spaceGrotesk.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
