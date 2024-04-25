"use client";

import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

type TFormValues = {
  holder: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

const PaymentInfoForm = () => {
  const { register, handleSubmit } = useForm<TFormValues>();
  const [formData, setFormData] = useState<TFormValues>({
    holder: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  function onHandleFormSubmit(data: TFormValues) {
    console.log({ data }); // Submete os dados para a próxima etapa ou ação final
  }

  return (
    <div className={styles.creditContainer}>
      <div className={styles.creditContext}>
        <article className={styles.frontCard}>
          <img src={"/images/card/card-logo.svg"} alt="logo" />
          <div className={styles.creditInfo}>
            <h2>0000 0000 0000 0000</h2>

            <ul>
              <li>Thomas Sankara</li>
              <li>00/00</li>
            </ul>
          </div>
        </article>

        <article className={styles.backCard}>
          <p>132</p>
        </article>
      </div>

      <div>
        <form
          onSubmit={handleSubmit(onHandleFormSubmit)}
          className={styles.creditForm}
        >
          <div>
            <label htmlFor="holder">Titular do cartão</label>
            <input
              type="text"
              id="holder"
              placeholder="e.g. Jane AppleSeed"
              {...register("holder")}
            />
          </div>

          <div>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input
              type="text"
              id="cardNumber"
              maxLength={19}
              placeholder="e.g 1234 8564 3698 4562"
              {...register("cardNumber")}
            />
          </div>

          <article className={styles.dateCVV}>
            <div className={styles.te}>
              <label htmlFor="expirationDate">Data de Expiração</label>
              <input
                type="month"
                id="expirationDate"
                placeholder="MM YY"
                {...register("expirationDate")}
              />
            </div>

            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="e.g 123"
                maxLength={3}
                {...register("cvv")}
              />
            </div>
          </article>

          <Button rounded variant="info">
            Finalizar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PaymentInfoForm;
