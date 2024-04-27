import Link from "next/link";
import styles from "./footer.module.scss";

import { FaGitSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Fa1 } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContext}>
        <div className={styles.footerColumn}>
          <img src={"/images/logo.svg"} alt="" />

          <p className={styles.description}>
            This project is a study project and merely illustrative, a fun and
            personal project created by <strong>Tiago Costa</strong>. The source
            code is available on <strong>Github</strong>. Open for pull request.
            If you want, clone and use it personally. You decide.
          </p>
          <div className={styles.icons}>
            <Link href={"#"}>
              <FaInstagramSquare width={50} />
            </Link>
            <Link href={"#"}>
              <FaLinkedin width={22} height={22} />
            </Link>
            <Link href={"#"}>
              <FaGitSquare />
            </Link>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3>Links</h3>
          <ul>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/login"}>Entrar</Link>
            </li>
            <li>
              <Link href={"/register"}>Comece Agora</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Ajuda</h3>
          <ul>
            <li>
              <Link href={"#"}>Privacidade</Link>
            </li>
            <li>
              <Link href={"#"}>Condições</Link>
            </li>
            <li>
              <Link href={"#"}>Blog</Link>
            </li>
            <li>
              <Link href={"#"}>FAQs</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Contato</h3>
          <p> ITPL LOGO</p>
          <p>Brazil</p>
          <p>Endereço, CEP 560066, Brazil</p>
          <p className={styles.email}>
            <span>Email:</span> tiago@user.com
          </p>
          <h4>
            <span>Contato: </span> +55 - 99964-0707
          </h4>
        </div>
      </div>
      <div className={styles.copy}>
        <span>Copyright ©2024 ITPL LOGO All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
