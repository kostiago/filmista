"use client";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import Logo from "/public/images/placeholder.svg";
import Link from "next/link";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { MdOutlineHome } from "react-icons/md";
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
                  <MdOutlineHome />
                </div>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
