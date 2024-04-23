import Link from "next/link";
import styles from "./styles.module.scss";
import SignInAndSignOut from "../Buttons/signInAndSignOut";

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
              width={150}
            />
          </Link>

          <SignInAndSignOut />
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
          </nav>
          <SignInAndSignOut />
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
