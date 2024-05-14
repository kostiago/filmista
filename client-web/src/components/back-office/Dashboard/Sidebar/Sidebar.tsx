"use client";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import Icon from "/public/images/placeholder.svg";
import Link from "next/link";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

import { TbMessages, TbCreditCard, TbLayoutDashboard } from "react-icons/tb";
import { useState } from "react";

const sidebarItens = [
  {
    section: "Acesso Rapido",
    name: "Inicio",
    href: "/dashboard",
    icon: <TbLayoutDashboard />,
  },
  {
    section: "Acesso Rapido",
    name: "Novo Conteudo",

    href: "/dashboard",
    icon: <TbLayoutDashboard />,
  },
  {
    section: "Acesso Rapido",
    name: "Relatorios",
    href: "/dashboard",
    icon: <TbLayoutDashboard />,
  },
  {
    section: "Acesso Rapido",
    name: "Planos de assinatura",
    href: "/dashboard/plans",
    icon: <TbLayoutDashboard />,
  },

  {
    section: "Conta",
    name: "Notificações",
    href: "/dashboard/plans",
    icon: <TbLayoutDashboard />,
  },

  {
    section: "Conta",
    name: "Configurações",
    href: "/dashboard/plans",
    icon: <TbLayoutDashboard />,
  },

  {
    section: "Conta",
    name: "FAQ",
    href: "/dashboard/plans",
    icon: <TbLayoutDashboard />,
  },
];
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toogleSidebarHandler = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <section className={styles.sidebarWrapper}>
      <button className={styles.btn} onClick={toogleSidebarHandler}>
        <BsArrowRightSquareFill />
      </button>
      <aside className={styles.sidebar} data-collapse={isCollapsed}>
        <div className={styles.topSection}>
          <div>
            <Image
              src={Icon}
              width={40}
              height={40}
              alt="Filmista logo"
              className={styles.logo}
            />
          </div>
          <div>
            <p className={styles.logoTitle}>FILMISTA</p>
            <p>Painel Administrativo</p>
          </div>
        </div>

        <div className={styles.menu}>
          <p className={styles.title}>Acesso rapido</p>

          <ul className={styles.sidebarList}>
            {sidebarItens.map(
              ({ name, href, icon: Icon, section }) =>
                section === "Acesso Rapido" && (
                  <li className={styles.sidebarItem} key={name}>
                    <Link href={href} className={styles.sidebarLink}>
                      <span className={styles.icon}>
                        <TbLayoutDashboard />
                      </span>
                      <span className={styles.name}>{name}</span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className={styles.menu}>
          <p className={styles.title}>Conta</p>

          <ul className={styles.sidebarList}>
            {sidebarItens.map(
              ({ name, href, icon: Icon, section }) =>
                section === "Conta" && (
                  <li className={styles.sidebarItem} key={name}>
                    <Link href={href} className={styles.sidebarLink}>
                      <span className={styles.icon}>
                        <TbLayoutDashboard />
                      </span>
                      <span className={styles.name}>{name}</span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className={styles.sideMenuFooter}></div>
      </aside>
    </section>
  );
};

export default Sidebar;
