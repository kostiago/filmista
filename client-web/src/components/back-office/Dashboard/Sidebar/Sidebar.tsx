"use client";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import Logo from "/public/images/placeholder.svg";
import Link from "next/link";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { TbMessages, TbCreditCard, TbLayoutDashboard } from "react-icons/tb";
import { useState } from "react";
import MenuItem from "./menuItem";

const menuItens = [
  { name: "Dashboard", to: "/" },
  {
    name: "Novo conteudo",
    to: "/",
    subMenus: [{ name: "Courses" }, { name: "Discipline" }],
  },

  { name: "Relatorios", to: "/" },
  { name: "Planos de assinatura", to: "/" },
];
const Sidebar = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`${styles.sidebar} ${inactive ? styles.inactive : ""}`}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <Image src={Logo} width={40} height={40} alt="Filmista logo" />
        </div>

        <div
          className={styles.toggleMenuBtn}
          onClick={() => setInactive(!inactive)}
        >
          {inactive ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.menu}>
        <p className={styles.title}>Menu</p>

        <div className={styles.mainMenu}>
          <ul>
            {menuItens.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                subMenus={menuItem.subMenus || []}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.menu}>
        <p className={styles.title}>Conta</p>

        <div className={styles.mainMenu}>
          <ul>
            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <TbLayoutDashboard />
                </div>
                <span>Notificações</span>
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <AiOutlineVideoCameraAdd />
                </div>
                <span>Configurações</span>
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <TbMessages />
                </div>
                <span>FAQ</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.sideMenuFooter}></div>
    </div>
  );
};

export default Sidebar;
