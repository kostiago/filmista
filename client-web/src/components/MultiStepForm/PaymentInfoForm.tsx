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
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

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
            <h2>{cardNumber}</h2>

            <ul>
              <li>{name}</li>
              <li>{expirationDate}</li>
            </ul>
          </div>
        </article>

        <article className={styles.backCard}>
          <p>{cvv}</p>
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
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input
              type="text"
              id="cardNumber"
              maxLength={19}
              placeholder="e.g 1234 8564 3698 4562"
              required
              value={cardNumber
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()}
              {...register("cardNumber")}
              onChange={(e) => setCardNumber(e.target.value)}
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
                required
                onChange={(e) => setExpirationDate(e.target.value)}
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
                required
                onChange={(e) => setCVV(e.target.value)}
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
