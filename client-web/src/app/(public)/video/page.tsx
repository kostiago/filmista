import { MdArrowBack } from "react-icons/md";
import styles from "./video.module.scss";

const Video = () => {
  return (
    <button className={styles.downloadBtn}>
      <img src="/images/placeholder.svg" alt="" />
      <span className="text">Download Files</span>
    </button>
  );
};

export default Video;
