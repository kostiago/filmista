import Link from "next/link";
import styles from "./sidebar.module.scss";

const InformationCard = () => {
  return (
    <div className={styles.informationCard}>
      <article className={styles.article}>
        <p>
          Logado como <strong>Administrador</strong> habilitado acesso a funções
          de nivel <strong>Junior</strong>.
        </p>
        <div className={styles.dividerCard}></div>

        <div className={styles.buttons}>
          <Link href={"/"}>Alterar conta</Link>
          <div className={styles.dividerBtn}></div>
          <button>Deslogar</button>
        </div>
      </article>
    </div>
  );
};

export default InformationCard;
