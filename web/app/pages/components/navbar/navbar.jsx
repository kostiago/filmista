import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={"/"} className={styles.logo}>
          <Image src="/assets/Group.svg" alt="" width="200" height="100" />
        </Link>
      </div>

      <Link href={"/login"}>
        <button className={styles.btn}>Comece agora</button>
      </Link>
    </nav>
  );
};

export default Navbar;
