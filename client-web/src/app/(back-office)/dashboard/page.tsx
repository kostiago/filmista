import { MdAdd } from "react-icons/md";
import styles from "./dashboard.module.scss";

import React from "react";

const Dashboard: React.FC = () => {
  const handleInputChange = (newValue: string) => {
    console.log("Novo valor:", newValue);
  };

  return (
    <div className={styles.right}>
      <button className={styles.tooltip}>
        <MdAdd />
      </button>
    </div>
  );
};

export default Dashboard;
