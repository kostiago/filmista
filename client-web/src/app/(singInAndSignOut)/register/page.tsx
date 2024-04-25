"use client";

import { FormProvider } from "@/components/MultiStepForm/FormContext";
import styles from "../../../styles/register.module.scss";
import PlanChoiceForm from "@/components/MultiStepForm/PlanChoiceForm";
import { useState } from "react";
import UserForm from "@/components/MultiStepForm/UserForm";
import { FormStep } from "@/components/MultiStepForm/FormStep";

const register = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Bem-vindo(a)</h1>
          <h2>Comece hoje, é fácil assinar a Filmista.</h2>
          <p className={styles.description}>
            Primeiro, insira o email e sua senha para darmos continuidade no
            processo.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.formContainer}>
              <p>etapas</p>
              <div>
                <FormProvider>
                  <FormStep />
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
