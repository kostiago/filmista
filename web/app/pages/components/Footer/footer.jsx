import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image src="/assets/Group.svg" alt="" width="120" height="50" />
        </Link>
      </div>
      <span>Copyright ©2024 LOGO All rights reserved</span>
    </footer>
  );
};

export default Footer;
