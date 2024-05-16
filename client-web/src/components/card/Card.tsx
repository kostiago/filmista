import Button from "../Button/Button";
import styles from "./card.module.scss";
import { RiMovie2Line } from "react-icons/ri";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <RiMovie2Line />
        </div>
        <div className={styles.content}>
          <h4>20</h4>
          <small>Qtd</small>
          <p>Filmes</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
