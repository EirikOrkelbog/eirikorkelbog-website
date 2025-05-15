import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Shopify CRO for Fashion Brands - Eirik Orkelbog",
  description: "Conversion-focused Shopify design and CRO for growing fashion e-commerce brands. Book a free call to optimize your site, drive more traffic, and increase sales.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
  },
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
