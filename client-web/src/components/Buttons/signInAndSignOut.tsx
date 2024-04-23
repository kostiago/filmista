import styles from "./styles.module.scss";
import { FiLogIn, FiX } from "react-icons/fi";

const SignInAndSignOut = () => {
  const session = false;

  return session ? (
    <button type="button" className={styles.loggedButton}>
      <img src="/images/man.svg" />
      Bem-vindo <strong>Tiago</strong>
      <FiX color="#DF2935" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <img src="/images/placeholder.svg" />
      Comece agora
    </button>
  );
};

export default SignInAndSignOut;
