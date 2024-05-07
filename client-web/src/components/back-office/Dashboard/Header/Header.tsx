import Input from "@/components/Input/Input";
import styles from "./header.module.scss";
import { MdOutlineHistory, MdAdd } from "react-icons/md";
const Header = () => {
  return (
    <section className={styles.header}>
      <article className={styles.left}>
        <button>{<MdOutlineHistory size={24} />}</button>
        <Input />
      </article>

      <article className={styles.right}></article>
    </section>
  );
};

export default Header;
