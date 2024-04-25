"use client";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";

import { FaCheck, FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import { useFormState } from "./FormContext";

const PlanChoiceScreen = () => {
  const { onHandleNext, onHandleBack } = useFormState();

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

        <div className={styles.btnChoiceScreen}>
          <div onClick={onHandleBack}>
            <Button rounded variant="secondary">
              Voltar
            </Button>
          </div>

          <div onClick={onHandleNext}>
            <Button rounded variant="secondary">
              Escolher Plano
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanChoiceScreen;
