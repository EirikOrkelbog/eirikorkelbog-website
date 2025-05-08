import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Eirik Orkelbog - Shopify & CRO",
  description: "Shopify Store Optimization & CRO Specialist",
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
