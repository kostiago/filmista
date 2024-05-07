import Link from "next/link";
import styles from "./styles.module.scss";

import Button from "../Button/Button";

import { AiOutlineLogin } from "react-icons/ai";

const Header = ({ type = "public" }) => {
  let content;

  switch (type) {
    case "public":
      content = (
        <div className={styles.headerContent}>
          <Link href={"/"}>
            <img
              src="/images/logo.svg"
              alt="Filmista - O Stream com a sua cara"
            />
          </Link>

          <Button
            rounded
            variant="secondary"
            icon={<img src="./images/placeholder.svg" />}
          >
            Comece agora
          </Button>
        </div>
      );
      break;

    case "auth":
      content = (
        <div className={styles.headerContent}>
          <Link href={"/"}>
            <img
              src="/images/logo.svg"
              alt="Filmista - O Stream com a sua cara"
              width={150}
            />
          </Link>
          <nav>
            <Link href="/movies">Filmes</Link>
            <Link href="/tv-programs">Series</Link>
            <Link href="/suggestions">Sugestões</Link>
            <Link href={"/dashboard/addMovie"}>Dashboard</Link>
          </nav>
          <div className={styles.loginButtons}>
            <Link href={"/login"}>
              <Button rounded variant="login" icon={<AiOutlineLogin />}>
                Entrar
              </Button>
            </Link>
            <Link href={"/register"}>
              <Button
                rounded
                variant="secondary"
                icon={<img src="/images/placeholder.svg" />}
              >
                Comece agora
              </Button>
            </Link>
          </div>
        </div>
      );
      break;
    case "login":
    case "signup":
      content = (
        <div className={styles.headerContent}>
          <Link href={"/"}>
            <img
              src="/images/logo.svg"
              alt="Filmista - O Stream com a sua cara"
              width={150}
            />
          </Link>
        </div>
      );
      break;
  }
  return <header className={styles.headerContainer}>{content}</header>;
};

export default Header;
