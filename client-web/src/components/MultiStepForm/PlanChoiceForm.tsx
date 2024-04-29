import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useState } from "react";
import { useFormState } from "./FormContext";
import styles from "../../styles/components/PlanChoiceForm.module.scss";
import { IoCheckmarkDoneSharp, IoCloseSharp } from "react-icons/io5";
import CardPrice from "../CardPrice/CardPrice";

type TFormValues = {
  plan: string;
};

const PlanChoiceForm = () => {
  const { register, handleSubmit } = useForm<TFormValues>();
  const { onHandleNext, onHandleBack } = useFormState();

  function onHandleFormSubmit(data: TFormValues) {
    onHandleNext();
    console.log({ data });
  }

  return (
    <div className={styles.formContainer}>
      <h2>Escolha seu Plano</h2>

      <div className={styles.card}>
        <CardPrice />
        <CardPrice />
      </div>
    </div>
  );
};

export default PlanChoiceForm;
