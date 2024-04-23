import styles from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}></div>
      <img src={"/images/Group.svg"} alt="" />
      <span>Copyright ©2024 LOGO All rights reserved</span>
    </footer>
  );
};

export default Footer;
