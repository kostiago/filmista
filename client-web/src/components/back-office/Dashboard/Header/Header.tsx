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
import IconButton from "@/components/IconButton/IconButton";

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
          <IconButton rounded variant="icon">
            <MdAdd />
          </IconButton>
        </div>

        <div className={styles.border}>
          <IconButton rounded variant="addUser">
            <MdSupervisedUserCircle />
          </IconButton>

          <IconButton rounded variant="danger">
            <MdNotificationsActive />
          </IconButton>

          <IconButton rounded variant="info">
            <MdOutlineSettings />
          </IconButton>
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
