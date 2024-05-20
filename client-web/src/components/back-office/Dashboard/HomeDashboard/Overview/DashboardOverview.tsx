import styles from "./dashboardOverview.module.scss";
import { TfiVideoCamera } from "react-icons/tfi";
import { TbMovie } from "react-icons/tb";
import Card from "@/components/card/Card";
import { BsPatchCheck } from "react-icons/bs";
const DashboardOverview = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Conteudo adicionado na plataforma</h2>
        <div className={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className={styles.summary}>
        <h2>Resumo da plataforma</h2>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <BsPatchCheck />
          </div>
          <div className={styles.cardContent}>
            <h4>Disponivel na plataforma</h4>
            <small>
              TOTAL: <h4>50</h4>
            </small>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <BsPatchCheck />
          </div>
          <div className={styles.cardContent}>
            <h4>Disponivel na plataforma</h4>
            <small>
              TOTAL: <h4>50</h4>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
