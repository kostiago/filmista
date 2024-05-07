import styles from "./header.module.scss";
import { MdOutlineHistory } from "react-icons/md";
const Header = () => {
  return (
    <section className={styles.header}>
      <article className={styles.left}>
        <button>{<MdOutlineHistory size={22} />}</button>
      </article>
    </section>
  );
};

export default Header;
