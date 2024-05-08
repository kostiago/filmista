import Image from "next/image";
import styles from "./sidebar.module.scss";
import Logo from "/public/images/placeholder.svg";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.head}>
          <div className={styles.userImg}>
            <Image src={Logo} width={30} height={30} alt="Filmista logo" />
          </div>

          <div className={styles.userDetails}>
            <p className={styles.title}>Filmista</p>
            <p className={styles.description}>Dashboard Administrativa</p>
          </div>
        </div>

        <div className={styles.nav}>
          <div className={styles.menu}>
            <p className={styles.title}>Principal</p>

            <ul>
              <li className={styles.active}>
                <Link href={"/dashboard"}>
                  <MdOutlineHome />
                  <span>Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
