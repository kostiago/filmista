import styles from "./input.module.scss";
import { RiSearch2Line } from "react-icons/ri";

const Input = () => {
  return (
    <div className={styles.inputBox}>
      <input type="text" required />
      <label htmlFor="">
        {" "}
        <RiSearch2Line />
        Busque algo...
      </label>
    </div>
  );
};

export default Input;
