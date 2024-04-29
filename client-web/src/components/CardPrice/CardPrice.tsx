import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Button from "../Button/Button";
import styles from "./styles.module.scss";

interface CardPriceProps {
  price: number;
  interval: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
}
const CardPrice: React.FC<CardPriceProps> = (props) => {
  return (
    <div className={styles.pricing}>
      <div className={styles.table}>
        <div className={styles.price}>
          <h1>$30</h1>
          <small>/mês</small>
        </div>

        <div className={styles.shadowContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.title}>
              <h1>Regular</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className={styles.tableBody}>
          <div className={styles.bodyTitle}>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={styles.benefits}>
            <div className={styles.icon}>
              <span>
                <IoCheckmarkDoneSharp />
                <span>Qualidade de vídeo e aúdio</span>
              </span>
              <p>Boa</p>
              <img src="/images/line.svg" alt="" />
            </div>

            <div className={styles.icon}>
              <span>
                <IoCheckmarkDoneSharp />
                <span>Resolução</span>
              </span>
              <p>1080p (Full HD)</p>
              <img src="/images/line.svg" alt="" />
            </div>

            <div className={styles.icon}>
              <span>
                <IoCheckmarkDoneSharp />
                <span>Aparelhos conectados</span>
              </span>
              <p>2</p>
              <img src="/images/line.svg" alt="" />
            </div>

            <div className={styles.icon}>
              <span>
                <IoCheckmarkDoneSharp />
                <span>Anúncios</span>
              </span>
              <p>Menos do que você pensa</p>
              <img src="/images/line.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <Button rounded variant="secondary">
            Assine agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPrice;
