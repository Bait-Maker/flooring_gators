import type { Metadata } from "next";
import { Inter, Handlee } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Nav from "@/components/header/mobileNav/Nav";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const handlee = Handlee({
  weight: "400",
  variable: "--font-handlee",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flooring Gators",
  description: "Hardwood Floor Refinishing & Installation Pro's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${handlee.variable}`}>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
