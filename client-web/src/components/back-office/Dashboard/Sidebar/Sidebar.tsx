"use client";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import Logo from "/public/images/placeholder.svg";
import Link from "next/link";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { TbMessages, TbCreditCard, TbLayoutDashboard } from "react-icons/tb";
import { useState } from "react";

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
            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <TbLayoutDashboard />
                </div>
                Dashboard
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <AiOutlineVideoCameraAdd />
                </div>
                Novo Conteudo
              </Link>

              <ul className={styles.subMenu}>
                <li>
                  <Link href={"#"}>Filmes</Link>
                </li>

                <li>
                  <Link href={"#"}>Series</Link>
                </li>

                <li>
                  <Link href={"#"}>Documentarios</Link>
                </li>
              </ul>
            </li>

            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <TbMessages />
                </div>
                Relátorios
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <TbCreditCard />
                </div>
                Planos
              </Link>
            </li>
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
                Notificações
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <AiOutlineVideoCameraAdd />
                </div>
                Configurações
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link href={"/dashboard"}>
                <div className={styles.menuIcon}>
                  <TbMessages />
                </div>
                FAQ
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
