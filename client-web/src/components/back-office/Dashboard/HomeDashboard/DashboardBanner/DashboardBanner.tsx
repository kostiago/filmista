"use client";
import Image from "next/image";
import Cash from "../../../../../../public/images/cash.svg";
import Button from "@/components/Button/Button";
import styles from "./dashboardBanner.module.scss";
import IconButton from "@/components/IconButton/IconButton";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const DashboardBanner = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <section className={`${styles.banner} ${hidden ? styles.hidden : ""}`}>
      <div className={styles.logo}>
        <Image src={Cash} alt="logo dashboard" />
      </div>
      <div className={styles.text}>
        <h3>Analise diferentes tipos de pagamentos online.</h3>
        <p>
          Seus clientes estão migrando para variados tipos de pagamentos, são
          fáceis, seguros e rápidos. Veja qual melhor se encaixa para o seu
          negócio hoje.
        </p>
      </div>
      <div className={styles.btn}>
        <Button rounded variant="secondary">
          Habilite agora
        </Button>
      </div>
      <div className={styles.icon} onClick={() => setHidden(true)}>
        <IconButton rounded variant="info">
          <IoClose />
        </IconButton>
      </div>
    </section>
  );
};

export default DashboardBanner;
