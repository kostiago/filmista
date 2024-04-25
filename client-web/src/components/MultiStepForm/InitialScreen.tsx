"use client";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./styles.module.scss";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

type TFormValues = {
  email: string;
};

const InitialScreen = () => {
  const { register, handleSubmit } = useForm<TFormValues>();

  function onHandleFormSubmit(data: TFormValues) {
    console.log({ data });
  }

  return (
    <div className={styles.planChoiceScreen}>
      <div className={styles.planChoiceContent}>
        <div className={styles.planChoiceIcon}>
          <FaCheckCircle />
        </div>
        <h1>Escolha seu Plano</h1>
        <div className={styles.planChoiceCescription}>
          <div className={styles.planChoiceDescriptionItem}>
            <FaCheck /> Descrição 1
          </div>
          <div className={styles.planChoiceDescriptionItem}>
            <FaCheck /> Descrição 2
          </div>
          <div className={styles.planChoiceDescriptionItem}>
            <FaCheck /> Descrição 3
          </div>
        </div>
        <Button rounded variant="secondary">
          Escolher Plano
        </Button>
      </div>
    </div>
  );
};

export default InitialScreen;
