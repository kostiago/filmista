import Image from "next/image";
import SignInAndSignOut from "../Buttons/signInAndSignOut";
import styles from "./styles.module.scss";
import { BiSolidCameraMovie } from "react-icons/bi";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBox}>
        <div className={styles.boxLeft}>
          <h1>
            Filmista, descubra, compartilhe e assista <BiSolidCameraMovie />{" "}
          </h1>
          <p>Faça parte do Stream de filmes e series que tem a sua cara.</p>
          <SignInAndSignOut />
        </div>

        <div className={styles.boxRight}>
          <Image
            src={"/images/movies.svg"}
            alt="Filmes da plataforma"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
