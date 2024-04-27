import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useState } from "react";
import { useFormState } from "./FormContext";
import styles from "../../styles/components/PlanChoiceForm.module.scss";
import { IoCheckmarkDoneSharp, IoCloseSharp } from "react-icons/io5";

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

      <div className={styles.pricing}>
        <div className={styles.table}>
          <div className={styles.price}>
            <h3>19R$</h3>
            <small>/mês</small>
          </div>

          <div className={styles.shadowContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.title}>
                <h1>Básico</h1>
                <p>Padrão com anúncios</p>
              </div>
            </div>
          </div>

          <div className={styles.tableBody}>
            <div className={styles.bodyTitle}>
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ul>
              <li>
                <IoCheckmarkDoneSharp />
                <span>Lorem Ipsu</span>
              </li>

              <li>
                <IoCheckmarkDoneSharp />
                <span>Lorem Ipsu</span>
              </li>

              <li>
                <IoCloseSharp />
                <span>Lorem Ipsu</span>
              </li>

              <li>
                <IoCloseSharp />
                <span>Lorem Ipsu</span>
              </li>
            </ul>
          </div>
          <div>
            <Button rounded variant="secondary">
              Assine agora
            </Button>
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.price}>
            <h3>40R$</h3>
            <small>/mês</small>
          </div>

          <div className={styles.shadowContainer}>
            <div className={styles.tableHeader}>
              <div className={styles.title}>
                <h1>Premium</h1>
                <p>Premium 4K + HDR</p>
              </div>
            </div>
          </div>

          <div className={styles.tableBody}>
            <div className={styles.bodyTitle}>
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ul>
              <li>
                <IoCheckmarkDoneSharp />

                <div>
                  <span>Qualidade de vídeo e aúdio</span>
                  <p>Boa</p>
                </div>
              </li>

              <li>
                <IoCheckmarkDoneSharp />
                <div>
                  <span>Resolução</span>
                  <p>1080p (Full HD)</p>
                </div>
              </li>

              <li>
                <IoCloseSharp />
                <div>
                  <span>Aparelhos conectados</span>
                  <p>2</p>
                </div>
              </li>

              <li>
                <IoCloseSharp />
                <div>
                  <span>Anúncios</span>
                  <p>Menos do que você pensa</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.btn}>
            <Button rounded variant="secondary">
              Assine agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanChoiceForm;
