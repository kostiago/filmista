import Image from "next/image";
import SignInAndSignOut from "../Buttons/signInAndSignOut";
import styles from "./styles.module.scss";
import { IoPlayCircle } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../Button/Button";
import { ImGift } from "react-icons/im";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.maxWidthContainer}>
        <div className={styles.testo}>
          <p className={styles.title}>FILMISTA</p>

          <h1 className={styles.subtitle}>
            Accesse mais de <span className={styles.highlight}>5000+</span>{" "}
            FILMES e SERIES de <span className={styles.highlight}>50+</span>{" "}
            paises diferentes
          </h1>

          <p className={styles.description}>
            Descubra, compartilhe e assista, faça parte do Stream de filmes e
            series que tem a sua cara .
          </p>

          <div className={styles.form}>
            <form className={styles.searchForm}>
              <input type="text" placeholder="Digite seu email" />
              <Button
                rounded={true}
                variant="secondary"
                icon={<img src="./images/placeholder.svg" />}
              >
                Comece agora
              </Button>
            </form>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={"/images/movies.svg"} className={styles.heroImg} />
          <button className={styles.iconContainer}>
            <IoPlayCircle className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
