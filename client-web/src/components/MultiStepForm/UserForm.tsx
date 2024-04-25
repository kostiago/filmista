"use client";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./styles.module.scss";
import { useFormState } from "./FormContext";

type TFormValues = {
  email: string;
  password: string;
};

const UserForm = () => {
  const { onHandleNext } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>();

  function onHandleFormSubmit(data: TFormValues) {
    onHandleNext();
  }

  return (
    <div>
      <h2>Crie uma senha para iniciar sua associação</h2>
      <p>Apenas mais alguns passos e pronto! Nós também odiamos papelada.</p>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className={styles.formContext}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
        </div>

        <div className={styles.formContext}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </div>

        <div className={styles.btn}>
          <Button rounded variant="info">
            Continuar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
