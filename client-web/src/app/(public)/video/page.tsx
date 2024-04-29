import { MdArrowBack } from "react-icons/md";
import styles from "./video.module.scss";
import Button from "@/components/Button/Button";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import CardPrice from "@/components/CardPrice/CardPrice";

const Video = () => {
  return (
    <section className={styles.container}>
      <article className={styles.left}>Esquerda</article>

      <div className={styles.right}>
        <div>
          <h1>Escolha seu plano</h1>
        </div>

        <CardPrice />
        <CardPrice />
      </div>
    </section>
  );
};

export default Video;
