"use client";
import Link from "next/link";
import styles from "./sidebar.module.scss";

import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { useState } from "react";

interface MenuItemProps {
  name: String;
  subMenus?: MenuItemProps[];
}

const MenuItem = (props: MenuItemProps) => {
  const { name, subMenus } = props;
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("expand", !expand);
    }
  };

  return (
    <li className={styles.menuItem}>
      <Link onClick={toggleExpand} href={"/dashboard"}>
        <div className={styles.menuIcon}>
          <AiOutlineVideoCameraAdd />
        </div>
        <span>{name}</span>
      </Link>

      {subMenus && subMenus.length > 0 ? (
        <ul className={`${styles.subMenu} ${expand ? styles.active : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <Link href={""}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
