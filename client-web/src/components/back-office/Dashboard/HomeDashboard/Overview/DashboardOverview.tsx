import styles from "./dashboardOverview.module.scss";
import { TfiVideoCamera } from "react-icons/tfi";
import { TbMovie } from "react-icons/tb";
import Card from "@/components/card/Card";
const DashboardOverview = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Conteudo adicionado na plataforma</h2>
        <div className={styles.cardContainer}>
          <Card />
        </div>
      </div>

      <div className={styles.summary}>
        <h2>Resumo da plataforma</h2>

        <div className={styles.card}>
          <div className={styles.cardIcon}></div>
          <div className={styles.cardContent}></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
