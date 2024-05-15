"use client";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import Icon from "/public/images/placeholder.svg";
import Logo from "/public/images/Logo.svg";
import Link from "next/link";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

import {
  TbMessages,
  TbCreditCardPay,
  TbReportSearch,
  TbNewSection,
  TbLayoutDashboard,
  TbSettings,
} from "react-icons/tb";
import { useState } from "react";

import { FaQuestionCircle } from "react-icons/fa";

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
    icon: <TbNewSection />,
  },
  {
    section: "Acesso Rapido",
    name: "Relatorios",
    href: "/dashboard",
    icon: <TbReportSearch />,
  },
  {
    section: "Acesso Rapido",
    name: "Planos de assinatura",
    href: "/dashboard/plans",
    icon: <TbCreditCardPay />,
  },

  {
    section: "Conta",
    name: "Notificações",
    href: "/dashboard/plans",
    icon: <TbMessages />,
  },

  {
    section: "Conta",
    name: "Configurações",
    href: "/dashboard/plans",
    icon: <TbSettings />,
  },

  {
    section: "Conta",
    name: "FAQ",
    href: "/dashboard/plans",
    icon: <FaQuestionCircle />,
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <section className={styles.sidebarWrapper}>
      <button
        className={styles.btn}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
      </button>
      <aside
        className={`${styles.sidebar} ${isCollapsed ? styles.inactive : ""}`}
      >
        <div className={styles.topSection}>
          {isCollapsed ? (
            <div>
              <Image
                src={Icon}
                width={40}
                height={40}
                alt="Filmista logo"
                className={styles.logo}
              />
            </div>
          ) : (
            <div>
              <Image
                src={Logo}
                width={140}
                height={0}
                alt="Filmista logo"
                className={styles.logo}
              />
            </div>
          )}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.menu}>
          <p className={styles.title}>Acesso rapido</p>

          <ul className={styles.sidebarList}>
            {sidebarItens.map(
              ({ name, href, icon: Icon, section }) =>
                section === "Acesso Rapido" && (
                  <li className={styles.sidebarItem} key={name}>
                    <Link href={href} className={styles.sidebarLink}>
                      <span className={styles.icon}>{Icon}</span>
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
                      <span className={styles.icon}>{Icon}</span>
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
