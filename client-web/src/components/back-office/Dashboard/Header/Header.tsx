"use client";
import Input from "@/components/Input/Input";
import styles from "./header.module.scss";

import ImageIcon from "../../../../../public/images/saly.svg";
import { CiGrid41, CiGrid42 } from "react-icons/ci";
import {
  MdOutlineHistory,
  MdAdd,
  MdSupervisedUserCircle,
  MdNotificationsActive,
  MdOutlineSettings,
} from "react-icons/md";

import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section className={styles.header}>
      <article className={styles.left}>
        <button>{<MdOutlineHistory size={24} />}</button>
        <Input />
      </article>

      <article className={styles.right}>
        <div className={styles.border}>
          <button className={styles.tooltip}>
            <MdAdd />
          </button>
        </div>

        <div className={styles.border}>
          <button className={styles.tooltip}>
            <MdSupervisedUserCircle />
          </button>

          <button className={styles.tooltip}>
            <MdNotificationsActive />
          </button>

          <button className={styles.tooltip}>
            <MdOutlineSettings />
          </button>
        </div>

        <div className={styles.perfil}>
          <button className={styles.btn}>
            <p>Tiago Costa</p>
            <FaChevronDown />
          </button>

          <button>
            <Image
              src={ImageIcon}
              alt="minha foto"
              width={96}
              height={96}
              className={styles.photo}
            />
          </button>

          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hovered ? (
              <CiGrid42 className={styles.grid} />
            ) : (
              <CiGrid41 className={styles.grid} />
            )}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Header;
