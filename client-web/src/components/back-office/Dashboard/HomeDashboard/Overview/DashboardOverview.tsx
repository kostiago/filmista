import styles from "./dashboardOverview.module.scss";
import { TfiVideoCamera } from "react-icons/tfi";
import { TbMovie } from "react-icons/tb";
const DashboardOverview = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Conteudo adicionado na plataforma</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h4>20</h4>
            <small>Qtd</small>
            <div className={styles.quant}>
              <TfiVideoCamera />
              <span>Filmes</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <h2>Resumo da plataforma</h2>

        <div className={styles.cardSummary}>
          <div className={styles.card}>
            <h2>Ativos na plataforma</h2>
            <h4>20</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
