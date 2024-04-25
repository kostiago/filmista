import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useState } from "react";
import { useFormState } from "./FormContext";

type TFormValues = {
  plan: string;
};

const PlanChoiceForm = () => {
  const { register, handleSubmit } = useForm<TFormValues>();
  const { onHandleNext, onHandleBack } = useFormState();

  function onHandleFormSubmit(data: TFormValues) {
    onHandleNext();
  }

  return (
    <div>
      <h2>Escolha seu Plano</h2>
      <form onSubmit={handleSubmit(onHandleFormSubmit)}>
        <div>
          <input
            type="radio"
            id="planA"
            value="Plano A"
            {...register("plan")}
          />
          <label htmlFor="planA">Plano A</label>
        </div>
        <div>
          <input
            type="radio"
            id="planB"
            value="Plano B"
            {...register("plan")}
          />
          <label htmlFor="planB">Plano B</label>
        </div>
        <div>
          <input
            type="radio"
            id="planC"
            value="Plano C"
            {...register("plan")}
          />
          <label htmlFor="planC">Plano C</label>
        </div>
        <div>
          <div onClick={onHandleBack}>
            <Button rounded variant="login">
              Voltar
            </Button>
          </div>
          <Button rounded variant="info">
            Continuar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlanChoiceForm;
