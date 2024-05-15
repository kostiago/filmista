import HomeNavbar from "@/components/back-office/Dashboard/HomeDashboard/HomeNavbar";
import styles from "@/styles/back-office/homeLayout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HomeNavbar />
      {children}
    </div>
  );
}
