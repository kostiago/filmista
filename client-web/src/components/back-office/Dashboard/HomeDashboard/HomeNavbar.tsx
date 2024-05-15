"use client";
import Link from "next/link";
import styles from "./homeNavbar.module.scss";
import { RiAdminLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Inicio", href: "/dashboard/home/overview" },
  { title: "Comece agora", href: "/dashboard/home/getting-started" },
  { title: "Atualizações recentes", href: "/dashboard/home/updates" },
  { title: "Novidades", href: "/dashboard/home/announcements" },
];
const HomeNavbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <RiAdminLine />
        </div>
        <div className={styles.title}>
          <p>Bem-vindo, Tiago Costa</p>
          <span>
            Gerente | <strong>Junior</strong>
          </span>
        </div>
      </div>

      <nav className={styles.nav}>
        {navLinks.map((item, i) => {
          return (
            <Link
              href={item.href}
              className={`${styles.links} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default HomeNavbar;
