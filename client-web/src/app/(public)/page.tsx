import styles from "../../styles/home.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
    </div>
  );
}
