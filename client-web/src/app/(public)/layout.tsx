import type { Metadata } from "next";
import { poppins } from "@/utils/font";
import "../../styles/globals.scss";
import Footer from "../../components/Footer/footer";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Filmista - O Stream com a sua cara",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header type="public" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
