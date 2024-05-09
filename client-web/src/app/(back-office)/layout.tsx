import { poppins } from "@/utils/font";
import "../../styles/back-office/officeGlobals.scss";
import styles from "../../styles/back-office/styles.module.scss";
import Header from "@/components/back-office/Dashboard/Header/Header";
import Sidebar from "@/components/back-office/Dashboard/Sidebar/Sidebar";

export const metadata = {
  title: "Dashboard Administrativa",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} ${styles.backOffice}`}>
        <Sidebar />
        <main className={styles.rightBar}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
