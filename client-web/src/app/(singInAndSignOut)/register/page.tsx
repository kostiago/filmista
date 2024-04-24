"use client";
import Button from "@/components/Button/Button";
import styles from "../../../styles/register.module.scss";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import InitialScreen from "@/components/MultiStepForm/InitialScreen";
import UserForm from "@/components/MultiStepForm/UserForm";
import { userFormHook } from "../../../hooks/userFormHook";

const register = () => {
  const formComponents = [<InitialScreen />, <UserForm />];
  const { currentStep, currentComponent, changedStep } =
    userFormHook(formComponents);
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
          <div className={styles.formContainer}>
            <p>etapas</p>
            <form>
              <div className={styles.inputsContainer}>{currentComponent}</div>
              <div className={styles.actions}>
                <Button
                  rounded
                  variant="info"
                  icon={<MdKeyboardDoubleArrowLeft />}
                >
                  Voltar
                </Button>

                <Button
                  rounded
                  variant="secondary"
                  icon={<MdKeyboardDoubleArrowRight />}
                >
                  Continuar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
